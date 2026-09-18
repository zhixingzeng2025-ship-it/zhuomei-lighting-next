"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "@/components/LocalizedLink";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRightIcon } from "@/components/Icons";
import { blogArticles, getBlogCategoryLabel, localizeBlogArticle } from "@/data/blog";

export function BlogArticleGrid() {
  const { locale, t } = useLanguage();
  const searchParams = useSearchParams();
  const allCategory = t("blog.allCategory") as string;
  const localizedArticles = useMemo(
    () => blogArticles.map((article) => localizeBlogArticle(article, locale)),
    [locale],
  );

  const categories = useMemo(() => {
    return [allCategory, ...Array.from(new Set(blogArticles.map((article) => getBlogCategoryLabel(article.category, locale))))];
  }, [allCategory, locale]);

  const requestedCategory = searchParams.get("category");
  const requestedLabel = requestedCategory ? getBlogCategoryLabel(requestedCategory, locale) : allCategory;
  const initialCategory = categories.includes(requestedLabel) ? requestedLabel : allCategory;
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  const filteredArticles = activeCategory === allCategory
    ? localizedArticles
    : localizedArticles.filter((article) => article.category === activeCategory);

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-4 border-y border-brand-line bg-white/70 px-5 py-4 shadow-[0_14px_36px_rgba(8,26,59,0.05)] backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-blue">{t("blog.categoryEyebrow")}</p>
          <p className="mt-1 text-sm text-brand-muted">{t("blog.categoryDescription")}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={[
                  "border px-4 py-2 text-sm font-semibold transition",
                  isActive
                    ? "border-brand-blue bg-brand-blue text-white shadow-[0_12px_24px_rgba(37,99,255,0.18)]"
                    : "border-brand-line bg-white text-brand-text hover:border-brand-blue/40 hover:bg-[#f3f7ff] hover:text-brand-blue",
                ].join(" ")}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6 grid gap-5 lg:grid-cols-3">
        {filteredArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group flex h-full flex-col overflow-hidden border border-brand-line bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_22px_58px_rgba(8,26,59,0.13)]"
          >
            <div className="relative h-60 overflow-hidden bg-[#edf5ff]">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute left-5 top-5 bg-white/92 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue shadow-[0_10px_24px_rgba(8,26,59,0.12)]">
                {article.category}
              </div>
            </div>

            <div className="flex flex-1 flex-col p-6">
              <div className="flex flex-wrap items-center gap-3 text-[12px] font-semibold text-brand-muted">
                <span>{article.date}</span>
                <span className="h-1 w-1 rounded-full bg-brand-blue/45" />
                <span>{article.readTime}</span>
              </div>
              <h2 className="mt-3 text-[23px] leading-tight font-semibold tracking-tighter3 text-brand-text transition group-hover:text-brand-blue">
                {article.title}
              </h2>
              <p className="mt-4 flex-1 text-sm leading-7 text-brand-muted">{article.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                {t("common.viewContent")} <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
