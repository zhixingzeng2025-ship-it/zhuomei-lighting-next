 "use client";

import { whyChooseUs } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import { FeatureIcon } from "./Icons";

export function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section className="bg-[#f7f9fc] py-10 text-brand-text sm:py-14 lg:py-16" id="why-us">
      <div className="page-container">
        <div className="section-title mx-auto text-center">
          <p className="eyebrow justify-center">{t("sections.whyEyebrow")}</p>
          <h2>{t("sections.whyTitle")}</h2>
          <p>{t("sections.whyDescription")}</p>
        </div>

        <div className="mt-8 grid gap-px border border-brand-line bg-brand-line sm:grid-cols-2 lg:grid-cols-4">
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
    </section>
  );
}
