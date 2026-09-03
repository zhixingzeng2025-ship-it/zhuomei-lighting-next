"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { whyChooseUs } from "@/data/site";
import { ArrowRightIcon, FeatureIcon } from "./Icons";

const companyImages = [
  {
    src: "/images/company/website-assets/wall-washer-rd-test-area-hero.png",
  },
  {
    src: "/images/company/factory-production-line.jpg",
  },
  {
    src: "/images/company/website-assets/zhongshan-oem-odm-manufacturing-base-1717x916.png",
  },
];

export function HomeCompanySection() {
  const { t } = useLanguage();
  const strengths = t("homeCompany.strengths") as string[][];
  const imageLabels = t("homeCompany.images") as string[];
  const imageAlts = t("homeCompany.imageAlts") as string[];

  return (
    <section className="bg-[#f7f9fc] py-10 sm:py-14 lg:py-16" id="why-us">
      <div className="page-container">
        <div className="border border-brand-line bg-white p-6 shadow-soft sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="eyebrow">{t("homeCompany.eyebrow")}</p>
              <h2 className="text-[clamp(2rem,3.1vw,3rem)] font-semibold leading-[1.08] tracking-tighter3 text-brand-text">
                {t("homeCompany.title")}
              </h2>
            </div>
            <div>
              <p className="text-[15px] leading-8 text-brand-muted">
                {t("homeCompany.description")}
              </p>
              <Link href="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-deep">
                {t("homeCompany.action")}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-7 grid gap-px border border-brand-line bg-brand-line md:grid-cols-3">
            {strengths.map(([title, desc], index) => (
              <div key={title} className="flex gap-4 bg-[#f8fbff] p-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-blue text-xs font-extrabold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>
                  <strong className="block text-[16px] text-brand-text">{title}</strong>
                  <span className="mt-1 block text-sm leading-6 text-brand-muted">{desc}</span>
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[1.05fr_0.95fr_0.95fr]">
            {companyImages.map((item, index) => (
              <figure
                key={item.src}
                className="group relative min-h-[270px] overflow-hidden border border-brand-line bg-white"
              >
                <img
                  src={item.src}
                  alt={imageAlts[index] || ""}
                  className={`h-full min-h-[270px] w-full object-cover transition duration-500 group-hover:scale-[1.03] ${
                    index === 0 ? "object-left" : ""
                  }`}
                />
                <figcaption className="absolute left-4 top-4 bg-[#061229]/88 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                  {imageLabels[index]}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 border-t border-brand-line pt-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="section-title">
                <p className="eyebrow">{t("sections.whyEyebrow")}</p>
                <h2>{t("sections.whyTitle")}</h2>
                <p>{t("sections.whyDescription")}</p>
              </div>
              <Link href="/about" className="text-sm font-semibold text-brand-blue hover:text-brand-deep">
                {t("homeCompany.more")} →
              </Link>
            </div>

            <div className="mt-7 grid gap-px border border-brand-line bg-brand-line sm:grid-cols-2 lg:grid-cols-4">
              {whyChooseUs.map((item) => (
                <article
                  key={item.title}
                  className="bg-white p-6 text-center transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center border border-brand-line bg-[#f8fbff] text-brand-blue">
                    <FeatureIcon name={item.icon} />
                  </span>
                  <h3 className="text-[17px] leading-[1.25] font-semibold text-brand-text">
                    {t(item.titleKey || item.title)}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-brand-muted">{t(item.descriptionKey || item.description)}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
