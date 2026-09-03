"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  getProductGroupItems,
  productGroups,
  productSeriesImage,
} from "@/data/productGroups";
import type { ProductSeriesItem } from "@/data/productSeries";
import { ArrowRightIcon } from "./Icons";

type SiteLanguage = "en" | "zh" | "ru";
type CategoryTile = {
  key: string;
  href: string;
  labels: Record<SiteLanguage, string>;
  image: string;
};

const featuredGroupOrder = ["linear-lighting", "projector-light", "point-light-source", "wall-lamp"];
const extraCategoryTiles = [
  {
    key: "wall-washer-light",
    groupSlug: "linear-lighting",
    productSlug: "wall-washer-light",
    labels: {
      en: "Wall Washer",
      zh: "洗墙灯",
      ru: "Настенный прожектор",
    },
  },
  {
    key: "street-light",
    groupSlug: "general-lighting",
    productSlug: "street-light",
    labels: {
      en: "Street Lighting",
      zh: "路灯照明",
      ru: "Уличное освещение",
    },
  },
] as const;

function productDetailHref(item: ProductSeriesItem) {
  const group = productGroups.find((entry) => entry.productSlugs.includes(item.categorySlug));
  return group ? `/products/${group.slug}/${item.id}` : "/products";
}

export function ProductCategories() {
  const { t, locale } = useLanguage();
  const categoryTiles: CategoryTile[] = [
    ...productGroups.map((group) => {
      const representative = getProductGroupItems(group)[0];
      return {
        key: group.slug,
        href: `/products/${group.slug}`,
        labels: group.labels,
        image: representative ? productSeriesImage(representative) : group.heroImage,
      };
    }),
    ...extraCategoryTiles.map((tile) => {
      const group = productGroups.find((entry) => entry.slug === tile.groupSlug);
      const representative = group
        ? getProductGroupItems(group).find((item) => item.categorySlug === tile.productSlug)
        : undefined;

      return {
        key: tile.key,
        href: `/products/${tile.groupSlug}`,
        labels: tile.labels,
        image: representative ? productSeriesImage(representative) : group?.heroImage || "/images/generated/products-overview.png",
      };
    }),
  ];
  const featuredProducts = featuredGroupOrder
    .map((slug) => productGroups.find((group) => group.slug === slug))
    .map((group) => (group ? getProductGroupItems(group)[0] : undefined))
    .filter((item): item is ProductSeriesItem => Boolean(item));

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16" id="products">
      <div className="page-container">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-end">
          <div className="section-title">
            <p className="eyebrow">{t("sections.productsEyebrow")}</p>
            <h2>{t("sections.productsTitle")}</h2>
            <p>{t("sections.productsDescription")}</p>
            <Link href="/products" className="action-pill mt-6 border border-brand-blue/20 bg-brand-blue text-white hover:bg-brand-deep">
              {t("common.viewProducts")}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative min-h-[260px] overflow-hidden border border-brand-line bg-brand-background">
            <img
              src="/images/generated/products-overview.png"
              alt=""
              className="h-full min-h-[260px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/10 to-transparent" />
          </div>
        </div>

        <div className="mt-8 grid gap-px border border-brand-line bg-brand-line sm:grid-cols-2 lg:grid-cols-4">
          {categoryTiles.map((tile) => {
            const title = tile.labels[locale as SiteLanguage] || tile.labels.zh || tile.labels.en;

            return (
              <Link
                key={tile.key}
                href={tile.href}
                className="group grid min-h-[210px] bg-white p-5 transition hover:bg-[#f8fbff]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-[17px] font-semibold uppercase leading-tight tracking-[0.04em] text-brand-text">
                      {title}
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-2 text-[12px] font-semibold text-brand-blue">
                      {t("common.viewProducts")} <ArrowRightIcon className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <span className="h-1.5 w-8 bg-brand-blue transition group-hover:bg-brand-gold" />
                </div>
                <img
                  src={tile.image}
                  alt={title}
                  className="mt-auto h-[112px] w-full object-contain object-center transition duration-500 group-hover:scale-[1.04]"
                />
              </Link>
            );
          })}
        </div>

        <div className="mt-10">
          <div className="mb-5 flex items-end justify-between gap-4">
            <h3 className="text-[15px] font-bold uppercase tracking-[0.14em] text-brand-text">
              {t("sections.featuredProductsTitle")}
            </h3>
            <Link href="/products" className="text-sm font-semibold text-brand-blue hover:text-brand-deep">
              {t("common.viewProducts")} →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                href={productDetailHref(product)}
                className="group overflow-hidden border border-brand-line bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(15,35,75,0.12)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f7f9fc] p-5">
                  <img
                    src={productSeriesImage(product)}
                    alt={product.name}
                    className="h-full w-full object-contain object-center transition duration-500 group-hover:scale-[1.04]"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-brand-blue">
                    {product.categoryName}
                  </span>
                </div>
                <div className="grid gap-3 p-6">
                  <h3 className="text-xl font-bold text-brand-text">{product.code}</h3>
                  <p className="text-sm leading-7 text-brand-muted">{product.name}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                    {t("common.learnMore")} <ArrowRightIcon className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
