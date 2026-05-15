"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { solutionKeyForSlug, solutions } from "@/data/solutions";
import { ArrowRightIcon } from "./Icons";

export function SolutionsSection() {
  const { t } = useLanguage();

  return (
    <section className="section-shell bg-white" id="solutions">
      <div className="page-container">
        <div className="section-title">
          <p className="eyebrow">{t("sections.solutionsEyebrow")}</p>
          <h2>{t("sections.solutionsTitle")}</h2>
          <p>{t("sections.solutionsDescription")}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution) => {
            const solutionKey = solutionKeyForSlug(solution.slug);
            const title = t(`solutions.${solutionKey}`) as string;

            return (
              <article
                key={solution.slug}
                className="group relative min-h-[320px] overflow-hidden rounded-[28px] bg-brand-navy shadow-card"
              >
                <img
                  src={solution.image}
                  alt={title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-navy/88 via-brand-navy/30 to-transparent p-6 text-white">
                  <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-[16px] border border-white/10 bg-white/15 text-white backdrop-blur-md">
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  </span>
                  <h3 className="text-[22px] leading-[1.15] tracking-tighter3 font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/78">{solution.description}</p>
                  <Link href="/solutions" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/95">
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
