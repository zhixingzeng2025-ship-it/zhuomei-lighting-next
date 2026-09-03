from __future__ import annotations

import json
import re
import shutil
from datetime import datetime
from pathlib import Path

import pandas as pd


ROOT = Path(__file__).resolve().parents[1]
DATA_DIR = ROOT / "data"
PUBLIC_DIR = ROOT / "public"
LIBRARY_DIR = PUBLIC_DIR / "images" / "generated" / "products" / "library"
DETAIL_DIR = PUBLIC_DIR / "images" / "generated" / "products" / "detail"
CLEAN_TRANSPARENT_DIR = PUBLIC_DIR / "images" / "generated" / "products" / "clean" / "transparent"
BACKUP_DIR = DATA_DIR / "_backups" / f"general_lighting_import_{datetime.now().strftime('%Y%m%d_%H%M%S')}"

SOURCE_EXCEL = Path(
    "/Users/zengzhixing/Desktop/ZEOS/Data/01_ZOMEI（卓美空间艺术）/02_Product（产品中心）/Architectural_Lighting（建筑照明）/Product_Lists（产品列表）/ZOMEI_PRODUCT_太阳能路灯.xlsx"
)

CATEGORY_MAP = {
    "泛光灯": ("flood-light", "泛光灯"),
    "路灯": ("street-light", "路灯"),
    "太阳能灯": ("solar-light", "太阳能灯"),
    "工矿灯": ("high-bay-light", "工矿灯"),
}

GENERAL_SLUGS = {"flood-light", "street-light", "solar-light", "high-bay-light"}


def clean(value) -> str:
    if value is None:
        return ""
    if isinstance(value, float) and pd.isna(value):
        return ""
    text = str(value).strip()
    return "" if text.lower() == "nan" else text


def safe_id(code: str) -> str:
    return re.sub(r"[^A-Za-z0-9_-]+", "-", code).strip("-") or "product"


def category_for(value: str) -> tuple[str, str]:
    for key, mapped in CATEGORY_MAP.items():
        if key in value:
            return mapped
    return ("high-bay-light", value or "常规照明")


def read_ts_array(path: Path) -> list[dict]:
    text = path.read_text(encoding="utf-8")
    match = re.search(r"export const productSeries: ProductSeriesItem\[\] = (\[.*\]);\s*$", text, re.S)
    if not match:
        raise RuntimeError(f"Cannot parse {path}")
    return json.loads(match.group(1))


def write_product_series(products: list[dict]) -> None:
    counts: dict[str, int] = {}
    for product in products:
        counts[product["categorySlug"]] = counts.get(product["categorySlug"], 0) + 1
    content = (
        """export type ProductSeriesItem = {
  id: string;
  categorySlug: string;
  categoryName: string;
  code: string;
  name: string;
  model: string;
  status: string;
  power: string;
  cct: string;
  ip: string;
  voltage: string;
  size: string;
  beam: string;
  material: string;
  updatedAt: string;
  image: string;
};

export const productSeriesCounts: Record<string, number> = """
        + json.dumps(counts, ensure_ascii=False, indent=2)
        + """;

export const productSeries: ProductSeriesItem[] = """
        + json.dumps(products, ensure_ascii=False, indent=2)
        + """;
"""
    )
    (DATA_DIR / "productSeries.ts").write_text(content, encoding="utf-8")


def read_record_ts(path: Path) -> dict:
    if not path.exists():
        return {}
    text = path.read_text(encoding="utf-8")
    match = re.search(r"= (\{.*\});\s*$", text, re.S)
    return json.loads(match.group(1)) if match else {}


def write_record_ts(name: str, value: dict) -> None:
    (DATA_DIR / name).write_text(
        f"export const {name.removesuffix('.ts')}: Record<string, {'string[]' if name.endswith('Galleries.ts') else 'string'}> = "
        + json.dumps(value, ensure_ascii=False, indent=2)
        + ";\n",
        encoding="utf-8",
    )


def backup_files() -> None:
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    for name in ["productSeries.ts", "productGroups.ts", "productDetailImages.ts", "productDetailGalleries.ts"]:
        source = DATA_DIR / name
        if source.exists():
            shutil.copy2(source, BACKUP_DIR / name)


def category_placeholder(slug: str) -> str:
    if slug == "high-bay-light":
        return "/images/generated/products/categories/flood-light.png"
    return f"/images/generated/products/categories/{slug}.png"


def find_existing_image(slug: str, code: str) -> tuple[str, str] | None:
    candidates = [
        LIBRARY_DIR / f"{slug}-{code}.png",
        LIBRARY_DIR / f"{slug}-{code}.jpg",
        DETAIL_DIR / f"{code}.png",
        DETAIL_DIR / f"{code}.jpg",
        CLEAN_TRANSPARENT_DIR / f"{code}.png",
    ]
    for candidate in candidates:
        if candidate.exists():
            library_target = LIBRARY_DIR / f"{slug}-{code}.png"
            detail_target = DETAIL_DIR / f"{code}.png"
            library_target.parent.mkdir(parents=True, exist_ok=True)
            detail_target.parent.mkdir(parents=True, exist_ok=True)
            if candidate != library_target:
                shutil.copy2(candidate, library_target)
            if candidate != detail_target:
                shutil.copy2(candidate, detail_target)
            return (
                "/" + str(library_target.relative_to(PUBLIC_DIR)).replace("\\", "/"),
                "/" + str(detail_target.relative_to(PUBLIC_DIR)).replace("\\", "/"),
            )
    return None


def product_from_row(row, index: int) -> tuple[dict, str | None]:
    code = clean(row.get("产品编码*"))
    slug, category_name = category_for(clean(row.get("产品分类*")))
    found = find_existing_image(slug, code)
    library_image = found[0] if found else category_placeholder(slug)
    detail_image = found[1] if found else None
    product = {
        "id": safe_id(code),
        "categorySlug": slug,
        "categoryName": category_name,
        "code": code,
        "name": clean(row.get("产品名称*")) or f"ZOMEI LED{category_name} {code}",
        "model": clean(row.get("型号")) or code,
        "status": clean(row.get("状态")) or clean(row.get("数据核验状态")) or "待完善",
        "power": clean(row.get("功率")) or "-",
        "cct": clean(row.get("色温")) or "-",
        "ip": clean(row.get("防护等级")) or "-",
        "voltage": clean(row.get("电压")) or "-",
        "size": clean(row.get("尺寸")) or "-",
        "beam": clean(row.get("角度")) or "-",
        "material": clean(row.get("材质")) or "-",
        "updatedAt": clean(row.get("更新时间")) or "2026-07-28",
        "image": library_image,
    }
    return product, detail_image


def patch_product_groups() -> None:
    path = DATA_DIR / "productGroups.ts"
    text = path.read_text(encoding="utf-8")
    text = re.sub(
        r'productSlugs: \[[^\]]*\],\n    heroImage: "/images/generated/products/library/flood-light-ZM-FL-YF26-P05-L.png",',
        'productSlugs: ["flood-light", "street-light", "solar-light", "high-bay-light"],\n    heroImage: "/images/generated/products/library/flood-light-ZOMEI-FL23-300W.png",',
        text,
        count=1,
    )
    path.write_text(text, encoding="utf-8")


def main() -> None:
    backup_files()
    current_products = read_ts_array(DATA_DIR / "productSeries.ts")
    keep_products = [product for product in current_products if product.get("categorySlug") not in GENERAL_SLUGS]

    detail_images = read_record_ts(DATA_DIR / "productDetailImages.ts")
    galleries = read_record_ts(DATA_DIR / "productDetailGalleries.ts")
    for product in current_products:
        if product.get("categorySlug") in GENERAL_SLUGS:
            detail_images.pop(product.get("code", ""), None)
            galleries.pop(product.get("code", ""), None)

    df = pd.read_excel(SOURCE_EXCEL, sheet_name="产品资料")
    new_products: list[dict] = []
    image_matches = 0
    for index, row in df.iterrows():
        code = clean(row.get("产品编码*"))
        if not code:
            continue
        product, detail_image = product_from_row(row, index)
        new_products.append(product)
        if detail_image:
            image_matches += 1
            detail_images[product["code"]] = detail_image
            galleries[product["code"]] = [detail_image]

    all_products = keep_products + new_products
    write_product_series(all_products)
    write_record_ts("productDetailImages.ts", detail_images)
    write_record_ts("productDetailGalleries.ts", galleries)
    patch_product_groups()

    report = {
        "source": str(SOURCE_EXCEL),
        "kept_existing_products": len(keep_products),
        "imported_general_products": len(new_products),
        "image_matches": image_matches,
        "backup_dir": str(BACKUP_DIR),
        "categories": {},
    }
    for product in new_products:
        report["categories"][product["categoryName"]] = report["categories"].get(product["categoryName"], 0) + 1
    (DATA_DIR / "_backups" / "general_lighting_import_latest_report.json").write_text(
        json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
