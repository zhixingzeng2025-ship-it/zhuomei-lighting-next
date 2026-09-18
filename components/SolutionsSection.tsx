"use client";

import Link from "@/components/LocalizedLink";
import { useLanguage } from "@/context/LanguageContext";
import { solutionKeyForSlug, solutions } from "@/data/solutions";
import { ArrowRightIcon } from "./Icons";

export function SolutionsSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-gradient-to-b from-[#f7f9fc] to-white py-10 sm:py-14 lg:py-16" id="solutions">
      <div className="page-container">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="section-title">
            <p className="eyebrow">{t("sections.solutionsEyebrow")}</p>
            <h2>{t("sections.solutionsTitle")}</h2>
            <p>{t("sections.solutionsDescription")}</p>
          </div>
          <Link href="/solutions" className="text-sm font-semibold text-brand-blue hover:text-brand-deep">
            View all solutions →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {solutions.slice(2, 5).map((solution) => {
            const solutionKey = solutionKeyForSlug(solution.slug);
            const title = t(`solutions.${solutionKey}`) as string;

            return (
              <article
                key={solution.slug}
                className="group relative min-h-[360px] overflow-hidden bg-brand-navy shadow-card"
              >
                <img
                  src={solution.image}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover opacity-95 transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020817] via-[#020817]/72 to-[#020817]/18" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <span className="mb-3 inline-flex h-11 w-11 items-center justify-center border border-white/20 bg-white/14 text-white backdrop-blur-md">
                    <span className="h-2.5 w-2.5 bg-brand-gold" />
                  </span>
                  <h3 className="text-[24px] leading-[1.12] font-semibold text-white drop-shadow-sm">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/88 drop-shadow-sm">{solution.description}</p>
                  <Link href="/solutions" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    {t("common.exploreSolution")}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
