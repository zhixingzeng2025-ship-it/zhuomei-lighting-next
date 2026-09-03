from __future__ import annotations

import json
import re
import shutil
from collections import deque
from datetime import datetime
from pathlib import Path

import numpy as np
import pandas as pd
from PIL import Image, ImageFilter, ImageOps


ROOT = Path(__file__).resolve().parents[1]
PUBLIC_DIR = ROOT / "public"
DATA_DIR = ROOT / "data"
LIBRARY_DIR = PUBLIC_DIR / "images" / "generated" / "products" / "library"
DETAIL_DIR = PUBLIC_DIR / "images" / "generated" / "products" / "detail"
CLEAN_ROOT = PUBLIC_DIR / "images" / "generated" / "products" / "clean"
TRANSPARENT_DIR = CLEAN_ROOT / "transparent"
WEBSITE_DIR = CLEAN_ROOT / "website"
PREVIEW_DIR = ROOT / "output" / "product_image_cleaning"
BACKUP_DIR = ROOT / "data" / "_backups" / f"image_cleaning_{datetime.now().strftime('%Y%m%d_%H%M%S')}"

SOURCE_EXCEL = Path(
    "/Users/zengzhixing/Desktop/ZEOS/Data/01_ZOMEI（卓美空间艺术）/02_Product（产品中心）/Architectural_Lighting（建筑照明）/Product_Lists（产品列表）/ZOMEI_PRODUCT_DATABASE_MASTER_20260722_建筑灯具_大图路径已补齐_产品已抓取0727.xlsx"
)

CATEGORY_MAP = {
    "洗墙灯": "wall-washer-light",
    "线条灯": "linear-light",
    "投光灯": "projector-light",
    "点光源": "point-light-source",
    "水下埋地灯": "underwater-light",
    "水下灯": "underwater-light",
}


def clean(value) -> str:
    if value is None:
        return ""
    if isinstance(value, float) and pd.isna(value):
        return ""
    text = str(value).strip()
    return "" if text.lower() == "nan" else text


def category_slug(value: str) -> str:
    for key, slug in CATEGORY_MAP.items():
        if key in value:
            return slug
    return "specialty-light"


def product_crop_window(image: Image.Image) -> tuple[int, int, int, int]:
    width, height = image.size
    return (int(width * 0.04), int(height * 0.13), int(width * 0.50), int(height * 0.52))


def connected_background_mask(rgb: np.ndarray, threshold: int = 246) -> np.ndarray:
    h, w, _ = rgb.shape
    white = np.all(rgb >= threshold, axis=2)
    visited = np.zeros((h, w), dtype=bool)
    q: deque[tuple[int, int]] = deque()
    for x in range(w):
        for y in (0, h - 1):
            if white[y, x] and not visited[y, x]:
                visited[y, x] = True
                q.append((y, x))
    for y in range(h):
        for x in (0, w - 1):
            if white[y, x] and not visited[y, x]:
                visited[y, x] = True
                q.append((y, x))
    while q:
        y, x = q.popleft()
        for ny, nx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
            if 0 <= ny < h and 0 <= nx < w and white[ny, nx] and not visited[ny, nx]:
                visited[ny, nx] = True
                q.append((ny, nx))
    return visited


def bbox_from_alpha(alpha: Image.Image, pad: int = 18) -> tuple[int, int, int, int]:
    box = alpha.getbbox()
    if not box:
        return (0, 0, alpha.width, alpha.height)
    left, top, right, bottom = box
    return (max(0, left - pad), max(0, top - pad), min(alpha.width, right + pad), min(alpha.height, bottom + pad))


def remove_tiny_components(alpha: np.ndarray, min_area: int = 650) -> np.ndarray:
    h, w = alpha.shape
    foreground = alpha > 0
    visited = np.zeros((h, w), dtype=bool)
    components: list[list[tuple[int, int]]] = []
    for start_y in range(h):
        for start_x in range(w):
            if not foreground[start_y, start_x] or visited[start_y, start_x]:
                continue
            q: deque[tuple[int, int]] = deque([(start_y, start_x)])
            visited[start_y, start_x] = True
            pixels: list[tuple[int, int]] = []
            while q:
                y, x = q.popleft()
                pixels.append((y, x))
                for ny, nx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
                    if 0 <= ny < h and 0 <= nx < w and foreground[ny, nx] and not visited[ny, nx]:
                        visited[ny, nx] = True
                        q.append((ny, nx))
            components.append(pixels)
    if not components:
        return np.zeros((h, w), dtype=np.uint8)
    largest_area = max(len(component) for component in components)
    keep_threshold = max(min_area, int(largest_area * 0.10))
    output = np.zeros((h, w), dtype=np.uint8)
    for pixels in components:
        if len(pixels) >= keep_threshold:
            for y, x in pixels:
                output[y, x] = 255
    return output


def extract_product(datasheet_path: Path) -> Image.Image:
    page = Image.open(datasheet_path).convert("RGB")
    window = product_crop_window(page)
    crop = page.crop(window)
    rgb = np.array(crop)
    background = connected_background_mask(rgb, threshold=246)
    alpha = np.where(background, 0, 255).astype(np.uint8)
    alpha = remove_tiny_components(alpha)
    alpha_img = Image.fromarray(alpha, mode="L")
    # Soften only the outside edge. Internal white lenses remain opaque because they are not connected to the page border.
    alpha_img = alpha_img.filter(ImageFilter.MaxFilter(3)).filter(ImageFilter.GaussianBlur(0.45))
    rgba = crop.convert("RGBA")
    rgba.putalpha(alpha_img)
    box = bbox_from_alpha(alpha_img, pad=20)
    return rgba.crop(box)


def canvas_image(
    product: Image.Image,
    size: int = 900,
    background: tuple[int, int, int] = (248, 251, 255),
    fill: float = 0.78,
) -> Image.Image:
    canvas = Image.new("RGB", (size, size), background)
    product = product.copy()
    max_w = int(size * fill)
    max_h = int(size * fill)
    scale = min(max_w / product.width, max_h / product.height)
    target_size = (max(1, int(product.width * scale)), max(1, int(product.height * scale)))
    product = product.resize(target_size, Image.Resampling.LANCZOS)
    x = (size - product.width) // 2
    y = (size - product.height) // 2
    canvas.paste(product.convert("RGB"), (x, y), product.getchannel("A"))
    return canvas


def save_product_images(row) -> dict:
    code = clean(row.get("产品编码*"))
    cat = clean(row.get("产品分类*"))
    slug = category_slug(cat)
    datasheet = Path(clean(row.get("PDF路径")))
    product = extract_product(datasheet)
    transparent_path = TRANSPARENT_DIR / f"{code}.png"
    website_path = WEBSITE_DIR / f"{code}.png"
    library_path = LIBRARY_DIR / f"{slug}-{code}.png"
    detail_path = DETAIL_DIR / f"{code}.png"
    for path in [TRANSPARENT_DIR, WEBSITE_DIR, LIBRARY_DIR, DETAIL_DIR]:
        path.mkdir(parents=True, exist_ok=True)
    product.save(transparent_path)
    website = canvas_image(product, fill=0.76)
    website.save(website_path)
    shutil.copy2(website_path, library_path)
    shutil.copy2(website_path, detail_path)
    return {
        "code": code,
        "category": cat,
        "slug": slug,
        "transparent": "/" + str(transparent_path.relative_to(PUBLIC_DIR)).replace("\\", "/"),
        "website": "/" + str(website_path.relative_to(PUBLIC_DIR)).replace("\\", "/"),
        "library": "/" + str(library_path.relative_to(PUBLIC_DIR)).replace("\\", "/"),
        "detail": "/" + str(detail_path.relative_to(PUBLIC_DIR)).replace("\\", "/"),
    }


def backup_current_images(codes: list[str], rows: list[dict]) -> None:
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    for row in rows:
        code = row["code"]
        slug = row["slug"]
        for source in [DETAIL_DIR / f"{code}.png", LIBRARY_DIR / f"{slug}-{code}.png"]:
            if source.exists():
                target = BACKUP_DIR / source.relative_to(PUBLIC_DIR)
                target.parent.mkdir(parents=True, exist_ok=True)
                shutil.copy2(source, target)


def update_data_images(rows: list[dict]) -> None:
    detail_images = {row["code"]: row["detail"] for row in rows}
    galleries = {row["code"]: [row["detail"]] for row in rows}
    (DATA_DIR / "productDetailImages.ts").write_text(
        "export const productDetailImages: Record<string, string> = " + json.dumps(detail_images, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    (DATA_DIR / "productDetailGalleries.ts").write_text(
        "export const productDetailGalleries: Record<string, string[]> = " + json.dumps(galleries, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )


def make_preview(rows: list[dict], target: Path) -> None:
    thumbs = []
    for row in rows:
        img = Image.open(PUBLIC_DIR / row["website"].lstrip("/")).convert("RGB")
        img.thumbnail((260, 260), Image.Resampling.LANCZOS)
        tile = Image.new("RGB", (300, 330), (255, 255, 255))
        tile.paste(img, ((300 - img.width) // 2, 18))
        thumbs.append(tile)
    cols = min(5, len(thumbs))
    rows_count = (len(thumbs) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * 300, rows_count * 330), (232, 241, 255))
    for index, tile in enumerate(thumbs):
        sheet.paste(tile, ((index % cols) * 300, (index // cols) * 330))
    target.parent.mkdir(parents=True, exist_ok=True)
    sheet.save(target)


def main() -> None:
    df = pd.read_excel(SOURCE_EXCEL, sheet_name="产品资料")
    records = []
    for _, row in df.iterrows():
        code = clean(row.get("产品编码*"))
        datasheet = clean(row.get("PDF路径"))
        if not code or not datasheet or not Path(datasheet).exists():
            continue
        records.append(row)

    results = []
    sample = bool("--sample" in __import__("sys").argv)
    if sample:
        picked = []
        for category in ["水下埋地灯", "点光源", "线条灯", "洗墙灯", "投光灯"]:
            subset = [r for r in records if clean(r.get("产品分类*")) == category]
            if subset:
                picked.append(subset[0])
        records = picked

    if not sample:
        planned = [
            {"code": clean(row.get("产品编码*")), "slug": category_slug(clean(row.get("产品分类*")))}
            for row in records
        ]
        backup_current_images([row["code"] for row in planned], planned)

    for row in records:
        results.append(save_product_images(row))

    if not sample:
        update_data_images(results)

    report = {
        "sample": sample,
        "processed": len(results),
        "backup_dir": str(BACKUP_DIR) if not sample else "",
        "output_root": str(CLEAN_ROOT),
    }
    PREVIEW_DIR.mkdir(parents=True, exist_ok=True)
    (PREVIEW_DIR / ("sample_report.json" if sample else "batch_report.json")).write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    make_preview(results[:25], PREVIEW_DIR / ("sample_preview.png" if sample else "batch_preview_first25.png"))
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
