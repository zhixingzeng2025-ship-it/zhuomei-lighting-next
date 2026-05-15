"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRightIcon } from "./Icons";

type FactItem = {
  labelKey: string;
  value: string;
};

type DetailViewProps = {
  backHref: string;
  backLabelKey: string;
  eyebrowKey: string;
  titleKey: string;
  description: string;
  image: string;
  facts: FactItem[];
  ctaHref: string;
  ctaLabelKey: string;
};

export function DetailView({
  backHref,
  backLabelKey,
  eyebrowKey,
  titleKey,
  description,
  image,
  facts,
  ctaHref,
  ctaLabelKey,
}: DetailViewProps) {
  const { t } = useLanguage();

  return (
    <section className="section-shell bg-gradient-to-b from-white to-[#eef4fb]">
      <div className="page-container space-y-8">
        <Link href={backHref} className="inline-flex items-center gap-2 text-sm font-semibold text-brand-deep">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-background">
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
          </span>
          {t(backLabelKey)}
        </Link>

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)]">
          <article className="soft-card overflow-hidden">
            <div className="relative aspect-[16/10] overflow-hidden bg-[#eef4fb]">
              <img src={image} alt={t(titleKey)} className="h-full w-full object-cover" />
            </div>
            <div className="space-y-4 p-6 sm:p-8">
              <p className="eyebrow">{t(eyebrowKey)}</p>
              <h1 className="text-[clamp(2rem,3.4vw,3.4rem)] leading-[0.98] tracking-tighter2 font-semibold text-brand-text">
                {t(titleKey)}
              </h1>
              <p className="max-w-3xl text-[15px] leading-7 text-brand-muted sm:text-base">{description}</p>
            </div>
          </article>

          <aside className="grid gap-5">
            <div className="soft-card p-6 sm:p-7">
              <p className="eyebrow">{t("common.learnMore")}</p>
              <div className="grid gap-4 sm:grid-cols-2">
                {facts.map((fact) => (
                  <div key={fact.labelKey} className="rounded-[22px] bg-brand-background p-4">
                    <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-deep">
                      {t(fact.labelKey)}
                    </div>
                    <div className="mt-2 text-[18px] font-semibold text-brand-text">{fact.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="soft-card p-6 sm:p-7">
              <p className="eyebrow">{t("common.quickInquiry")}</p>
              <h2 className="text-[22px] leading-[1.2] tracking-tighter3 font-semibold text-brand-text">
                {t("hero.requestSolution")}
              </h2>
              <p className="mt-3 text-sm leading-7 text-brand-muted">
                {t("sections.inquiryDescription")}
              </p>
              <Link
                href={ctaHref}
                className="action-pill mt-5 w-full bg-gradient-to-r from-brand-blue to-[#77bfff] text-white shadow-[0_16px_34px_rgba(45,140,255,0.28)]"
              >
                {t(ctaLabelKey)}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
