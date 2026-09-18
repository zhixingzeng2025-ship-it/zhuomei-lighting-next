"use client";

import Link from "@/components/LocalizedLink";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRightIcon } from "./Icons";

type LocalizedPageHeaderProps = {
  eyebrowKey: string;
  titleKey: string;
  descriptionKey: string;
  actionHref?: string;
  actionLabelKey?: string;
  image?: string;
  variant?: "split" | "cover";
};

export function LocalizedPageHeader({
  eyebrowKey,
  titleKey,
  descriptionKey,
  actionHref = "/contact",
  actionLabelKey = "common.sendInquiry",
  image,
  variant = "split",
}: LocalizedPageHeaderProps) {
  const { t } = useLanguage();

  if (image && variant === "cover") {
    return (
      <div className="relative h-[300px] overflow-hidden border border-brand-line bg-[#071225] shadow-soft sm:h-[340px] lg:h-[360px]">
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="relative flex h-full items-center px-5 py-6 sm:px-8 lg:px-12">
          <div className="max-w-2xl text-white">
            <p className="text-xs font-bold tracking-[0.24em] text-brand-yellow">{t(eyebrowKey)}</p>
            <h1 className="mt-3 text-[clamp(2rem,3.7vw,3.9rem)] font-semibold leading-[0.98] tracking-tighter3 drop-shadow-[0_10px_24px_rgba(0,0,0,0.5)]">
              {t(titleKey)}
            </h1>
            <p className="mt-4 max-w-xl text-[15px] font-semibold leading-7 text-white/88 drop-shadow-[0_8px_18px_rgba(0,0,0,0.48)] sm:text-base">
              {t(descriptionKey)}
            </p>
            <div className="mt-5">
              <Link href={actionHref} className="action-pill bg-brand-blue text-white shadow-[0_18px_36px_rgba(0,0,0,0.26)] hover:bg-brand-deep">
                {t(actionLabelKey)}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden border border-brand-line bg-white shadow-soft">
      <div className={image ? "grid lg:h-[360px] lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)]" : ""}>
        <div className="flex h-full items-center px-6 py-8 sm:px-8 sm:py-10 lg:py-0">
          <div className="w-full max-w-3xl">
            <p className="eyebrow mb-4 flex h-6 items-center">{t(eyebrowKey)}</p>
            <h1 className="text-[clamp(2.1rem,4vw,4rem)] font-semibold leading-[0.98] text-brand-text lg:min-h-[7.9rem]">
              {t(titleKey)}
            </h1>
            <p className="mt-4 max-w-3xl text-[15px] leading-7 text-brand-muted sm:min-h-14 sm:text-base">{t(descriptionKey)}</p>
            <div className="mt-6 min-h-[52px]">
              <Link href={actionHref} className="action-pill bg-brand-blue text-white shadow-[0_16px_34px_rgba(37,99,255,0.22)] hover:bg-brand-deep">
                {t(actionLabelKey)}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        {image ? (
          <div className="h-[260px] bg-brand-background lg:h-full">
            <img src={image} alt="" className="h-full w-full object-cover" />
          </div>
        ) : null}
      </div>
    </div>
  );
}
