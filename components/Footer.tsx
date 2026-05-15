"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";

export function Footer() {
  const { t } = useLanguage();

  const footerGroups = [
    {
      title: t("footer.products"),
      items: [
        { label: t("footer.streetLight"), href: "/products" },
        { label: t("footer.solarStreetLight"), href: "/products" },
        { label: t("footer.floodLight"), href: "/products" },
        { label: t("footer.solarFloodLight"), href: "/products" },
        { label: t("footer.gardenLight"), href: "/products" },
        { label: t("footer.highBayLight"), href: "/products" },
        { label: t("footer.wallWasherLight"), href: "/products" },
      ],
    },
    {
      title: t("footer.solutions"),
      items: [
        { label: t("footer.roadLighting"), href: "/solutions" },
        { label: t("footer.solarLighting"), href: "/solutions" },
        { label: t("footer.landscapeLighting"), href: "/solutions" },
        { label: t("footer.buildingFacadeLighting"), href: "/solutions" },
        { label: t("footer.industrialLighting"), href: "/solutions" },
      ],
    },
    {
      title: t("footer.support"),
      items: [
        { label: t("footer.catalogDownload"), href: "/contact" },
        { label: t("footer.installationGuide"), href: "/contact" },
        { label: t("footer.faq"), href: "/contact" },
        { label: t("footer.warranty"), href: "/contact" },
        { label: t("footer.contactSupport"), href: "/contact" },
      ],
    },
    {
      title: t("footer.company"),
      items: [
        { label: t("footer.aboutUs"), href: "/about" },
        { label: t("footer.factory"), href: "/about" },
        { label: t("footer.certifications"), href: "/about" },
        { label: t("footer.projects"), href: "/projects" },
        { label: t("footer.news"), href: "/about" },
      ],
    },
  ];

  return (
    <footer className="border-t border-white/8 bg-[#061229] text-white">
      <div className="page-container py-16">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_repeat(4,minmax(0,1fr))]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-deep text-[13px] font-extrabold tracking-[0.12em] shadow-glass">
                ZL
              </span>
              <div className="grid gap-0.5">
                <strong className="text-[16px] font-extrabold tracking-[0.06em]">{siteConfig.brand}</strong>
                <span className="text-[12px] tracking-[0.04em] text-white/65">{t("site.brandTagline")}</span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">{t("footer.description")}</p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="grid gap-3">
              <h3 className="text-[16px] font-semibold tracking-tight">{group.title}</h3>
              {group.items.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm text-white/68 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span>{t("footer.copyright")}</span>
          <span>{t("footer.prototype")}</span>
        </div>
      </div>
    </footer>
  );
}
