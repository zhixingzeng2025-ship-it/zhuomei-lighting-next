"use client";

import Link from "@/components/LocalizedLink";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRightIcon } from "./Icons";

const companyImages = [
  {
    src: "https://img.zomeiled.com/images/company/website-assets/wall-washer-rd-test-area-hero.jpg",
  },
  {
    src: "https://img.zomeiled.com/images/company/factory-production-line.jpg",
  },
  {
    src: "https://img.zomeiled.com/images/company/website-assets/zhongshan-oem-odm-manufacturing-base-1717x916.jpg",
  },
];

export function HomeCompanySection() {
  const { t } = useLanguage();
  const strengths = t("homeCompany.strengths") as string[][];
  const imageLabels = t("homeCompany.images") as string[];
  const imageAlts = t("homeCompany.imageAlts") as string[];

  return (
    <section className="bg-[#f7f9fc] py-9 sm:py-12 lg:py-14" id="why-us">
      <div className="page-container">
        <div className="border border-brand-line bg-white p-5 shadow-soft sm:p-7">
          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="eyebrow">{t("homeCompany.eyebrow")}</p>
              <h2 className="text-[clamp(1.9rem,3vw,2.8rem)] font-semibold leading-[1.08] tracking-tighter3 text-brand-text">
                {t("homeCompany.title")}
              </h2>
            </div>
            <div>
              <p className="text-[15px] leading-7 text-brand-muted">
                {t("homeCompany.description")}
              </p>
              <Link href="/about" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-deep">
                {t("homeCompany.action")}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="mt-6 grid gap-px border border-brand-line bg-brand-line md:grid-cols-3">
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
        </div>
      </div>
    </section>
  );
}
