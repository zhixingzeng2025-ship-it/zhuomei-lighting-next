"use client";

import { useLanguage } from "@/context/LanguageContext";
import { BlogArticleGrid } from "@/components/BlogArticleGrid";

export function BlogPageContent() {
  const { locale, t } = useLanguage();
  const heroAlt =
    locale === "en"
      ? "Architectural lighting design sketch"
      : locale === "ru"
        ? "Эскиз архитектурного освещения"
        : "建筑照明设计草图";

  return (
    <section className="bg-gradient-to-b from-white to-[#eef5ff] py-14">
      <div className="page-container">
        <div className="overflow-hidden border border-brand-line bg-white shadow-soft">
          <div className="grid lg:h-[360px] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]">
            <div className="flex h-full items-center px-6 py-8 sm:px-8 sm:py-10 lg:py-0">
              <div className="w-full max-w-3xl">
                <p className="eyebrow mb-4 flex h-6 items-center">{t("blog.metaTitle")}</p>
                <h1 className="text-[clamp(2.1rem,4vw,4rem)] font-semibold leading-[0.98] text-brand-text lg:min-h-[7.9rem]">
                  {t("blog.title")}
                </h1>
                <p className="mt-4 max-w-3xl text-[15px] leading-7 text-brand-muted sm:min-h-14 sm:text-base">
                  {t("blog.description")}
                </p>
                <div className="mt-6 hidden min-h-[52px] lg:block" aria-hidden="true" />
              </div>
            </div>
            <div className="relative h-[260px] bg-brand-background lg:h-full">
              <img
                src="https://img.zomeiled.com/images/blog/lighting-resources-hero.jpg"
                alt={heroAlt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        <BlogArticleGrid />
      </div>
    </section>
  );
}
