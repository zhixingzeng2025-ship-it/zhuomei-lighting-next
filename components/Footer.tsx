"use client";

import Link from "@/components/LocalizedLink";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";
import { MailIcon, PhoneIcon, SearchIcon, WhatsAppIcon } from "./Icons";

export function Footer() {
  const { locale } = useLanguage();
  const footerCopy = {
    en: {
      search: "Search",
      placeholder: "Enter keyword...",
      address: "Address",
      hotline: "Service Hotline",
      rights: "All rights reserved.",
    },
    zh: {
      search: "搜索",
      placeholder: "请输入关键词...",
      address: "地址",
      hotline: "服务热线",
      rights: "版权所有。",
    },
    ru: {
      search: "Поиск",
      placeholder: "Введите ключевое слово...",
      address: "Адрес",
      hotline: "Телефон",
      rights: "Все права защищены.",
    },
  }[locale as "en" | "zh" | "ru"];

  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="page-container py-8 text-center">
        <Link href="/" className="mx-auto inline-grid place-items-center">
          <img
            src="https://img.zomeiled.com/images/brand/zomei-logo-2026.png"
            alt="ZOMEILED"
            width={92}
            height={92}
            className="h-[92px] w-[92px] object-contain opacity-95"
          />
        </Link>

        <div className="mx-auto mt-4 flex max-w-[430px] flex-wrap items-center justify-center gap-2 text-white">
          <a
            href={siteConfig.contact.whatsappLink}
            aria-label="WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-full text-white/88 transition hover:bg-white/10 hover:text-brand-gold"
          >
            <WhatsAppIcon className="h-6 w-6" />
          </a>
          <a
            href={`mailto:${siteConfig.contact.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full text-white/88 transition hover:bg-white/10 hover:text-brand-gold"
          >
            <MailIcon className="h-6 w-6" />
          </a>
          <a
            href={`tel:${siteConfig.contact.phone}`}
            aria-label="Phone"
            className="grid h-10 w-10 place-items-center rounded-full text-white/88 transition hover:bg-white/10 hover:text-brand-gold"
          >
            <PhoneIcon className="h-6 w-6" />
          </a>
        </div>

        <form className="mx-auto mt-3 flex h-10 max-w-[380px] items-center rounded-full bg-white/20 px-5 text-left ring-1 ring-white/10 transition focus-within:bg-white/24 focus-within:ring-white/24">
          <input
            aria-label={footerCopy.search}
            type="search"
            placeholder={footerCopy.placeholder}
            className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/42"
          />
          <button
            type="submit"
            aria-label={footerCopy.search}
            className="ml-4 text-white/86 transition hover:text-brand-gold"
          >
            <SearchIcon className="h-5 w-5" />
          </button>
        </form>

        <div className="mx-auto mt-4 flex max-w-5xl flex-wrap items-center justify-center gap-x-7 gap-y-1 text-[13px] leading-6 text-white/76">
          <span>{footerCopy.address}: Guangzhou, Guangdong, China</span>
          <span>{footerCopy.hotline}: {siteConfig.contact.phone}</span>
          <span>Email: {siteConfig.contact.email}</span>
        </div>
        <div className="mt-1 text-[13px] leading-6 text-white/70">
          © 2026 ZOMEILED LIGHTING. {footerCopy.rights}
        </div>
      </div>
    </footer>
  );
}
