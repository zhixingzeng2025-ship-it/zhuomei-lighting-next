 "use client";

import { whyChooseUs } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { FeatureIcon } from "./Icons";

export function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="section-shell bg-gradient-to-b from-brand-navy via-[#081430] to-[#061229] text-white" id="why-us">
      <div className="page-container">
        <div className="section-title">
          <p className="eyebrow eyebrow-light">{t("sections.whyEyebrow")}</p>
          <h2 className="text-white">{t("sections.whyTitle")}</h2>
          <p className="text-white/70">{t("sections.whyDescription")}</p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseUs.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-white/10 bg-white/6 p-6 backdrop-blur-md transition hover:-translate-y-1"
            >
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-[16px] border border-white/10 bg-white/10 text-white">
                <FeatureIcon name={item.icon} />
              </span>
              <h3 className="text-[20px] leading-[1.2] tracking-tighter3 font-semibold text-white">
                {t(item.titleKey || item.title)}
              </h3>
              <p className="mt-3 text-sm leading-7 text-white/72">{t(item.descriptionKey || item.description)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
