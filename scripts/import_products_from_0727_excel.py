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
BACKUP_DIR = ROOT / "data" / "_backups" / f"product_import_0727_{datetime.now().strftime('%Y%m%d_%H%M%S')}"
TOOLBOX_CMS_ROOT = Path("/Users/zengzhixing/Projects/zomeiled-local-toolbox/data/zomei_website_cms")

SOURCE_EXCEL = Path(
    "/Users/zengzhixing/Desktop/ZEOS/Data/01_ZOMEI（卓美空间艺术）/02_Product（产品中心）/Architectural_Lighting（建筑照明）/Product_Lists（产品列表）/ZOMEI_PRODUCT_DATABASE_MASTER_20260722_建筑灯具_大图路径已补齐_产品已抓取0727.xlsx"
)

CATEGORY_MAP = {
    "洗墙灯": ("wall-washer-light", "洗墙灯"),
    "线条灯": ("linear-light", "线条灯"),
    "投光灯": ("projector-light", "投光灯"),
    "点光源": ("point-light-source", "点光源"),
    "壁灯": ("wall-lamp", "壁灯"),
    "泛光灯": ("flood-light", "泛光灯"),
    "路灯": ("street-light", "路灯"),
    "瓦楞灯": ("corrugated-light", "瓦楞灯"),
    "窗台灯": ("window-sill-light", "窗台灯"),
    "台阶灯": ("step-lamp", "台阶灯"),
    "柱灯": ("column-lamp", "柱灯"),
    "水下埋地灯": ("underwater-light", "水下埋地灯"),
    "水下灯": ("underwater-light", "水下埋地灯"),
}

GROUP_SPECIAL_EXTRA_SLUGS = ["underwater-light", "specialty-light"]


def clean(value) -> str:
    if value is None:
        return ""
    if isinstance(value, float) and pd.isna(value):
        return ""
    text = str(value).strip()
    return "" if text.lower() == "nan" else text


def ts_quote(value: str) -> str:
    return json.dumps(value, ensure_ascii=False)


def safe_id(code: str) -> str:
    text = re.sub(r"[^A-Za-z0-9_-]+", "-", code.strip())
    return text.strip("-") or f"product-{datetime.now().strftime('%Y%m%d%H%M%S')}"


def category_for(value: str) -> tuple[str, str]:
    for key, mapped in CATEGORY_MAP.items():
        if key in value:
            return mapped
    return ("specialty-light", value or "特种照明")


def backup_files() -> None:
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    for name in ["productSeries.ts", "productGroups.ts", "productDetailImages.ts", "productDetailGalleries.ts"]:
        source = DATA_DIR / name
        if source.exists():
            shutil.copy2(source, BACKUP_DIR / name)


def copy_image(source_path: str, category_slug: str, code: str) -> tuple[str, str] | None:
    source = Path(source_path)
    if not source.exists():
        return None
    LIBRARY_DIR.mkdir(parents=True, exist_ok=True)
    DETAIL_DIR.mkdir(parents=True, exist_ok=True)
    suffix = source.suffix.lower() or ".png"
    library_name = f"{category_slug}-{code}{suffix}"
    detail_name = f"{code}{suffix}"
    library_target = LIBRARY_DIR / library_name
    detail_target = DETAIL_DIR / detail_name
    shutil.copy2(source, library_target)
    shutil.copy2(source, detail_target)
    library_public = "/" + str(library_target.relative_to(PUBLIC_DIR)).replace("\\", "/")
    detail_public = "/" + str(detail_target.relative_to(PUBLIC_DIR)).replace("\\", "/")
    return library_public, detail_public


def product_series_ts(products: list[dict]) -> str:
    counts: dict[str, int] = {}
    for product in products:
        counts[product["categorySlug"]] = counts.get(product["categorySlug"], 0) + 1
    return (
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


def detail_images_ts(detail_images: dict[str, str]) -> str:
    return "export const productDetailImages: Record<string, string> = " + json.dumps(detail_images, ensure_ascii=False, indent=2) + ";\n"


def galleries_ts(galleries: dict[str, list[str]]) -> str:
    return "export const productDetailGalleries: Record<string, string[]> = " + json.dumps(galleries, ensure_ascii=False, indent=2) + ";\n"


def patch_product_groups() -> None:
    path = DATA_DIR / "productGroups.ts"
    text = path.read_text(encoding="utf-8")
    old = 'productSlugs: ["corrugated-light", "step-lamp", "window-sill-light", "column-lamp"],'
    new = 'productSlugs: ["corrugated-light", "step-lamp", "window-sill-light", "column-lamp", "underwater-light", "specialty-light"],'
    if old in text:
        text = text.replace(old, new)
    old_fn = "return `/images/generated/products/library/${item.categorySlug}-${item.code}.png`;"
    new_fn = 'return item.image || `/images/generated/products/library/${item.categorySlug}-${item.code}.png`;'
    if old_fn in text:
        text = text.replace(old_fn, new_fn)
    path.write_text(text, encoding="utf-8")


def main() -> None:
    backup_files()
    df = pd.read_excel(SOURCE_EXCEL, sheet_name="产品资料")
    products: list[dict] = []
    detail_images: dict[str, str] = {}
    galleries: dict[str, list[str]] = {}
    seen_ids: set[str] = set()

    for index, row in df.iterrows():
        code = clean(row.get("产品编码*"))
        if not code:
            continue
        category_slug, category_name = category_for(clean(row.get("产品分类*")))
        product_id = safe_id(code)
        if product_id in seen_ids:
            product_id = f"{product_id}-{index + 1}"
        seen_ids.add(product_id)

        copied = copy_image(clean(row.get("图片路径")), category_slug, code)
        library_image = copied[0] if copied else f"/images/generated/products/categories/{category_slug}.png"
        detail_image = copied[1] if copied else ""
        if detail_image:
            detail_images[code] = detail_image
            galleries[code] = [detail_image]

        products.append(
            {
                "id": product_id,
                "categorySlug": category_slug,
                "categoryName": category_name,
                "code": code,
                "name": clean(row.get("产品名称*")) or f"ZOMEI LED户外灯具 {code}",
                "model": clean(row.get("型号")) or code,
                "status": clean(row.get("状态")) or clean(row.get("数据核验状态")) or "待完善",
                "power": clean(row.get("功率")) or "-",
                "cct": clean(row.get("色温")) or "-",
                "ip": clean(row.get("防护等级")) or "-",
                "voltage": clean(row.get("电压")) or "-",
                "size": clean(row.get("尺寸")) or "-",
                "beam": clean(row.get("角度")) or "-",
                "material": clean(row.get("材质")) or "-",
                "updatedAt": clean(row.get("更新时间")) or "2026-07-27",
                "image": library_image,
            }
        )

    (DATA_DIR / "productSeries.ts").write_text(product_series_ts(products), encoding="utf-8")
    (DATA_DIR / "productDetailImages.ts").write_text(detail_images_ts(detail_images), encoding="utf-8")
    (DATA_DIR / "productDetailGalleries.ts").write_text(galleries_ts(galleries), encoding="utf-8")
    patch_product_groups()

    TOOLBOX_CMS_ROOT.mkdir(parents=True, exist_ok=True)
    (TOOLBOX_CMS_ROOT / "imported_products.json").write_text(json.dumps(products, ensure_ascii=False, indent=2), encoding="utf-8")
    (TOOLBOX_CMS_ROOT / "product_images.json").write_text(json.dumps(galleries, ensure_ascii=False, indent=2), encoding="utf-8")

    report = {
        "source": str(SOURCE_EXCEL),
        "imported_products": len(products),
        "detail_images": len(detail_images),
        "backup_dir": str(BACKUP_DIR),
        "categories": {},
        "toolbox_cms_cache": str(TOOLBOX_CMS_ROOT),
    }
    for product in products:
        report["categories"][product["categoryName"]] = report["categories"].get(product["categoryName"], 0) + 1
    report_path = DATA_DIR / "_backups" / "product_import_0727_latest_report.json"
    report_path.parent.mkdir(parents=True, exist_ok=True)
    report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps(report, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
