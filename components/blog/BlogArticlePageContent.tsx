"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRightIcon } from "@/components/Icons";
import { type BlogArticle, localizeBlogArticle } from "@/data/blog";

type BlogArticlePageContentProps = {
  article: BlogArticle;
  relatedArticles: BlogArticle[];
};

export function BlogArticlePageContent({ article, relatedArticles }: BlogArticlePageContentProps) {
  const { locale, t } = useLanguage();
  const localizedArticle = localizeBlogArticle(article, locale);
  const localizedRelated = relatedArticles.map((item) => localizeBlogArticle(item, locale));

  return (
    <article className="bg-white pb-20 pt-14 text-brand-text">
      <div className="mx-auto w-[min(calc(100%-48px),1500px)]">
        <nav className="mb-7 text-sm font-medium text-brand-muted">
          <Link href="/" className="hover:text-brand-blue">{t("common.home")}</Link>
          <span className="mx-2">&gt;</span>
          <Link href="/blog" className="hover:text-brand-blue">{t("blog.breadcrumbCategory")}</Link>
          <span className="mx-2">&gt;</span>
          <span className="text-brand-text">{localizedArticle.category}</span>
        </nav>

        <header className="grid gap-8 border-b border-brand-line pb-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end">
          <div>
            <h1 className="text-[clamp(2.05rem,3.7vw,3.85rem)] leading-[1.05] font-semibold tracking-tighter3 text-brand-text">
              {localizedArticle.title}
            </h1>
            <p className="mt-5 text-[17px] leading-8 text-brand-muted">
              {localizedArticle.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-[13px] font-medium tracking-[0.08em] text-brand-muted">
              <span>{localizedArticle.date}</span>
              <span className="h-1 w-1 rounded-full bg-brand-muted/50" />
              <span>{localizedArticle.readTime}</span>
            </div>
          </div>

          <div className="overflow-hidden border border-brand-line bg-[#edf5ff] shadow-soft">
            <img src={localizedArticle.image} alt={localizedArticle.title} className="h-full min-h-[360px] w-full object-cover" />
          </div>
        </header>

        <div className="mx-auto mt-10 grid w-full gap-8 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <main className="min-w-0 border border-brand-line bg-white p-8 shadow-[0_22px_70px_rgba(9,31,71,0.06)]">
            <section className="border-l-4 border-brand-blue bg-[#f8fbff] px-7 py-6 text-[17px] leading-9 text-brand-text shadow-[0_18px_48px_rgba(9,31,71,0.06)]">
              {localizedArticle.intro}
            </section>

            <div className="mt-10 space-y-11">
              {localizedArticle.sections.map((section, index) => (
                <section key={section.heading}>
                  <h2 className="flex items-center gap-4 text-[30px] leading-tight font-semibold tracking-tighter3 text-brand-text">
                    <span className="h-px w-10 bg-brand-text" />
                    {section.heading}
                  </h2>
                  <div className="mt-5 space-y-4">
                    {section.body.map((paragraph) => (
                      <p key={paragraph} className="text-[16px] leading-8 text-brand-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {index === 1 ? (
                    <div className="mt-7 overflow-hidden border border-brand-line bg-[#edf5ff] shadow-soft">
                      <img src={localizedArticle.image} alt="" className="h-[320px] w-full object-cover" />
                    </div>
                  ) : null}
                </section>
              ))}
            </div>

            {localizedArticle.checklist?.length ? (
              <section className="mt-12 border border-[#d4e5f5] bg-[#f8fbff] p-7">
                <h2 className="text-[24px] font-semibold tracking-tighter3 text-brand-text">{t("blog.checklistTitle")}</h2>
                <ul className="mt-5 grid gap-3">
                  {localizedArticle.checklist.map((item) => (
                    <li key={item} className="flex gap-3 text-[15px] leading-7 text-brand-text">
                      <span className="mt-2.5 h-2 w-2 flex-none bg-brand-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <section className="mt-12 border-t border-brand-line pt-8">
              <h2 className="text-[24px] font-semibold tracking-tighter3 text-brand-text">{t("blog.conclusionTitle")}</h2>
              <p className="mt-4 text-[16px] leading-8 text-brand-muted">{localizedArticle.conclusion}</p>
            </section>
          </main>

          <aside className="sticky top-[116px] hidden border border-brand-line bg-[#f8fbff] p-5 shadow-[0_22px_70px_rgba(9,31,71,0.06)] lg:block">
            <h3 className="text-[22px] font-semibold tracking-tighter3 text-brand-text">{t("blog.relatedTitle")}</h3>
            <div className="mt-5 grid gap-4">
              {localizedRelated.map((item) => (
                <RelatedArticleCard key={item.slug} article={item} cta={t("common.readFullArticle")} />
              ))}
            </div>
          </aside>
        </div>

        <section className="mx-auto mt-14 max-w-[1180px] border-t border-brand-line pt-10 lg:hidden">
          <h2 className="text-[24px] font-semibold tracking-tighter3 text-brand-text">{t("blog.relatedTitle")}</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {localizedRelated.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="border border-brand-line bg-[#f8fbff] p-5 text-sm leading-6 text-brand-muted">
                <strong className="block text-[17px] text-brand-text">{item.title}</strong>
                <span className="mt-3 inline-flex items-center gap-2 text-brand-blue">
                  {t("common.continueReading")} <ArrowRightIcon className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

function RelatedArticleCard({ article, cta }: { article: BlogArticle; cta: string }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group overflow-hidden border border-brand-line bg-white transition hover:-translate-y-0.5 hover:border-brand-blue hover:shadow-soft"
    >
      <div className="h-28 overflow-hidden bg-[#edf5ff]">
        <img src={article.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="p-4">
        <div className="text-[12px] font-medium tracking-[0.08em] text-brand-muted">
          {article.date} · {article.readTime}
        </div>
        <h4 className="mt-2 line-clamp-2 text-[16px] font-semibold leading-6 tracking-tighter3 text-brand-text group-hover:text-brand-blue">
          {article.title}
        </h4>
        <p className="mt-2 line-clamp-2 text-[13px] leading-6 text-brand-muted">
          {article.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-2 text-[13px] font-semibold text-brand-blue">
          {cta} <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
