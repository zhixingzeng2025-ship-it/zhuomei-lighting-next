"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { productGroups } from "@/data/productGroups";

const groupCopy = {
  en: {
    eyebrow: "Product Center",
    linear: "Linear Lighting",
    projector: "Projector Light",
    point: "Point Light Source",
    wall: "Wall Lamp",
    general: "General Lighting",
    specialty: "Specialty Lighting",
  },
  zh: {
    eyebrow: "产品中心",
    linear: "线形照明",
    projector: "投光灯",
    point: "点光源",
    wall: "壁灯",
    general: "常规照明",
    specialty: "特种照明",
  },
  ru: {
    eyebrow: "Центр продукции",
    linear: "Линейное освещение",
    projector: "Проекторный светильник",
    point: "Точечный источник",
    wall: "Настенный светильник",
    general: "Общее освещение",
    specialty: "Специальное освещение",
  },
};

export function ProductSeriesBrowser() {
  const { locale, t } = useLanguage();
  const copy = groupCopy[locale as keyof typeof groupCopy] || groupCopy.en;

  return (
    <div>
      <div className="mb-1 text-[13px] font-medium text-white">
        {t("common.home")} &gt; {copy.eyebrow}
      </div>

      <div className="overflow-hidden bg-brand-deep">
        <div className="grid grid-flow-dense auto-rows-[245px] gap-px bg-brand-deep md:grid-cols-4 xl:auto-rows-[285px]">
        {productGroups.map((category) => {
          const title = category.labels[locale as keyof typeof category.labels] || category.labels.en;
          return (
          <Link
            key={category.slug}
            id={category.slug}
            href={`/products/${category.slug}`}
            className={[
                "group relative overflow-hidden bg-white",
              category.tileClassName,
            ].join(" ")}
          >
            <img
              src={category.heroImage}
              alt={title}
              className={[
                "h-full w-full bg-white transition duration-700 group-hover:scale-[1.07]",
                category.imageClassName,
              ].join(" ")}
            />
            <div className="absolute inset-x-0 top-0 z-10 h-0 overflow-hidden bg-[#151a22]/90 transition-[height] duration-300 ease-out group-hover:h-full">
              <div className="grid h-full place-items-center p-8 text-center">
                <div className="grid place-items-center gap-5">
                  <span className="grid h-14 w-14 place-items-center border border-white/70 text-[36px] font-light leading-none text-white">
                    +
                  </span>
                  <h3 className="text-[clamp(1.7rem,2.7vw,3rem)] leading-none font-semibold tracking-tighter3 text-white drop-shadow-[0_4px_18px_rgba(0,0,0,0.45)]">
                    {title}
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        )})}
        </div>
      </div>
    </div>
  );
}
