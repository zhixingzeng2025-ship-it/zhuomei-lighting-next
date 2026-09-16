"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import InquiryForm from "./InquiryForm";

export function InquirySection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-brand-navy py-16 text-white sm:py-20" id="contact">
      <div className="absolute inset-0 bg-[url('https://img.zomeiled.com/images/generated/contact-inquiry.png')] bg-cover bg-center opacity-22" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020712]/98 via-[#061229]/90 to-[#07142d]/62" aria-hidden="true" />
      <div className="page-container relative">
        <div className="grid items-stretch gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="h-full border border-white/14 bg-[#061229] p-7 shadow-card sm:p-8">
            <p className="eyebrow eyebrow-light text-brand-gold/95">{t("sections.inquiryEyebrow")}</p>
            <h2 className="max-w-2xl text-[clamp(2rem,3.6vw,3.5rem)] leading-[1.04] font-semibold text-white">
              {t("sections.inquiryTitle")}
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/82 sm:text-base">
              {t("sections.inquiryDescription")}
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-[minmax(0,1fr)_156px] md:items-stretch">
              <div className="grid gap-3">
                <a className="flex items-center gap-4 border border-white/18 bg-white/10 p-3.5 backdrop-blur-md transition hover:bg-white/15" href={siteConfig.contact.whatsappLink} target="_blank" rel="noreferrer">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-brand-blue text-white">
                    <WhatsAppIcon />
                  </span>
                  <span>
                    <strong className="block text-[15px] text-white">{t("common.whatsapp")}</strong>
                    <span className="text-sm text-white/82">{siteConfig.contact.whatsapp}</span>
                  </span>
                </a>

                <a className="flex items-center gap-4 border border-white/18 bg-white/10 p-3.5 backdrop-blur-md transition hover:bg-white/15" href={`mailto:${siteConfig.contact.email}`}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-brand-blue text-white">
                    <MailIcon />
                  </span>
                  <span>
                    <strong className="block text-[15px] text-white">{t("common.email")}</strong>
                    <span className="text-sm text-white/82">{siteConfig.contact.email}</span>
                  </span>
                </a>

                <a className="flex items-center gap-4 border border-white/18 bg-white/10 p-3.5 backdrop-blur-md transition hover:bg-white/15" href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-brand-blue text-white">
                    <PhoneIcon />
                  </span>
                  <span>
                    <strong className="block text-[15px] text-white">{t("common.phone")}</strong>
                    <span className="text-sm text-white/82">{siteConfig.contact.phone}</span>
                  </span>
                </a>
              </div>

              <a
                className="flex flex-col justify-between border border-white/18 bg-white/10 p-3.5 backdrop-blur-md transition hover:bg-white/15"
                href="/contact"
              >
                <span className="mx-auto flex h-28 w-28 items-center justify-center bg-white p-2">
                  <img
                    src="https://img.zomeiled.com/images/contact/zomei-wechat-qr.jpg"
                    alt={t("common.contactQrAlt")}
                    className="h-full w-full object-contain"
                  />
                </span>
                <span className="mt-3 block">
                  <strong className="block text-sm leading-5 text-white">{t("common.scanToAdd")}</strong>
                  <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-gold">
                    {t("common.wechatQr")}
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="h-full border border-white/16 bg-white p-6 shadow-card sm:p-7">
            <InquiryForm endpoint="/api/contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
