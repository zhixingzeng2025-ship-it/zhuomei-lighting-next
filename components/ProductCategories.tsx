"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  getProductGroupItems,
  productGroups,
  productSeriesImage,
} from "@/data/productGroups";
import { ArrowRightIcon } from "./Icons";

type SiteLanguage = "en" | "zh" | "ru";
type CategoryTile = {
  key: string;
  href: string;
  labels: Record<SiteLanguage, string>;
  image: string;
};

const productUseCases: Record<SiteLanguage, Record<string, string>> = {
  en: {
    "linear-lighting": "For facade outlines, wall washing and continuous architectural lines.",
    "projector-light": "For focused projection, signage, landmarks and long-distance accents.",
    "point-light-source": "For pixel effects, media facades and rhythmic decorative lighting.",
    "wall-lamp": "For entrances, corridors, gardens and exterior wall details.",
    "general-lighting": "For plazas, roads, area lighting and general outdoor applications.",
    "specialty-lighting": "For roofs, columns, steps, water features and custom scenes.",
  },
  zh: {
    "linear-lighting": "用于建筑轮廓、立面洗墙和连续线性照明。",
    "projector-light": "用于重点投射、标识、地标和远距离强调照明。",
    "point-light-source": "用于点阵效果、媒体立面和节奏装饰照明。",
    "wall-lamp": "用于入口、廊道、庭院和外墙细节照明。",
    "general-lighting": "用于广场、道路、区域照明和常规户外场景。",
    "specialty-lighting": "用于屋面、柱体、台阶、水景和定制场景。",
  },
  ru: {
    "linear-lighting": "Для контуров фасада, wall washing и непрерывных линий.",
    "projector-light": "Для акцентной проекции, вывесок, объектов и дальнего света.",
    "point-light-source": "Для пиксельных эффектов, медиафасадов и декоративного ритма.",
    "wall-lamp": "Для входов, коридоров, садов и деталей наружных стен.",
    "general-lighting": "Для площадей, дорог, зонального и общего наружного света.",
    "specialty-lighting": "Для крыш, колонн, ступеней, воды и нестандартных сцен.",
  },
};

export function ProductCategories() {
  const { t, locale } = useLanguage();
  const categoryTiles: CategoryTile[] = productGroups.map((group) => {
    const representative = getProductGroupItems(group)[0];
    return {
      key: group.slug,
      href: `/products/${group.slug}`,
      labels: group.labels,
      image: representative ? productSeriesImage(representative) : group.heroImage,
    };
  });
  const useCases = productUseCases[locale as SiteLanguage] || productUseCases.en;

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-14" id="products">
      <div className="page-container">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="section-title max-w-3xl">
            <p className="eyebrow">{t("sections.productsEyebrow")}</p>
            <h2>{t("sections.productsTitle")}</h2>
            <p>{t("sections.productsDescription")}</p>
          </div>
          <Link href="/products" className="action-pill border border-brand-blue/20 bg-brand-blue text-white hover:bg-brand-deep">
            {t("common.viewProducts")}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-px border border-brand-line bg-brand-line sm:grid-cols-2 lg:grid-cols-3">
          {categoryTiles.map((tile) => {
            const title = tile.labels[locale as SiteLanguage] || tile.labels.zh || tile.labels.en;

            return (
              <Link
                key={tile.key}
                href={tile.href}
                className="group grid min-h-[176px] bg-white p-4 transition hover:bg-[#f8fbff] sm:min-h-[232px] sm:p-5"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-[17px] font-semibold uppercase leading-tight tracking-[0.04em] text-brand-text">
                      {title}
                    </h3>
                    <p className="mt-1.5 max-w-[320px] text-[13px] leading-5 text-brand-muted sm:mt-2 sm:leading-6">
                      {useCases[tile.key]}
                    </p>
                    <span className="mt-2 inline-flex items-center gap-2 text-[12px] font-semibold text-brand-blue sm:mt-3">
                      {t("common.viewProducts")} <ArrowRightIcon className="h-3.5 w-3.5" />
                    </span>
                  </div>
                  <span className="h-1.5 w-8 bg-brand-blue transition group-hover:bg-brand-gold" />
                </div>
                <img
                  src={tile.image}
                  alt={title}
                  className="mt-auto h-[82px] w-full object-contain object-center transition duration-500 group-hover:scale-[1.04] sm:h-[126px]"
                />
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}
