"use client";

import { useLanguage } from "@/context/LanguageContext";
import { whyChooseUs } from "@/data/site";
import { FeatureIcon } from "./Icons";

export function AboutContent() {
  const { t } = useLanguage();

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {whyChooseUs.slice(0, 4).map((item) => (
          <article key={item.title} className="soft-card p-6">
            <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-[16px] bg-brand-background text-brand-deep">
              <FeatureIcon name={item.icon} />
            </span>
            <h2 className="text-[20px] leading-[1.2] tracking-tighter3 font-semibold text-brand-text">
              {t(item.titleKey || item.title)}
            </h2>
            <p className="mt-3 text-sm leading-7 text-brand-muted">
              {t(item.descriptionKey || item.description)}
            </p>
          </article>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="soft-card p-6 sm:p-8">
          <p className="eyebrow">{t("pageHeader.aboutEyebrow")}</p>
          <h2 className="text-[clamp(1.9rem,3vw,3rem)] leading-[1.05] tracking-tighter2 font-semibold text-brand-text">
            {t("pageHeader.aboutTitle")}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-brand-muted sm:text-base">
            {t("pageHeader.aboutDescription")}
          </p>
        </article>

        <article className="soft-card overflow-hidden">
          <img src="/images/hero.svg" alt="ZHUOMEI LIGHTING brand visual" className="h-full w-full object-cover" />
        </article>
      </div>
    </>
  );
}
