"use client";

import Link from "next/link";
import { useEffect } from "react";
import { DocIcon, MailIcon, PhoneIcon, UpIcon, WhatsAppIcon } from "./Icons";
import { siteConfig } from "@/data/site";

export function FloatingContact() {
  useEffect(() => {
    const onScroll = () => {
      const mobileBar = document.getElementById("mobile-contact-bar");
      if (!mobileBar) return;
      mobileBar.dataset.atTop = String(window.scrollY < 300);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <aside className="floating-contact">
        <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noreferrer">
          <WhatsAppIcon className="h-5 w-5 text-brand-deep" />
          <span>WhatsApp</span>
        </a>
        <a href={`mailto:${siteConfig.contact.email}`}>
          <MailIcon className="h-5 w-5 text-brand-deep" />
          <span>Email</span>
        </a>
        <Link href="/products">
          <DocIcon className="h-5 w-5 text-brand-deep" />
          <span>Catalog</span>
        </Link>
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <UpIcon className="h-5 w-5 text-brand-deep" />
          <span>Top</span>
        </button>
      </aside>

      <div id="mobile-contact-bar" className="mobile-bottom-bar">
        <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noreferrer">
          <WhatsAppIcon className="h-5 w-5" />
          <span>WhatsApp</span>
        </a>
        <a href={`mailto:${siteConfig.contact.email}`}>
          <MailIcon className="h-5 w-5" />
          <span>Email</span>
        </a>
        <Link href="/contact">
          <DocIcon className="h-5 w-5" />
          <span>Inquiry</span>
        </Link>
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <UpIcon className="h-5 w-5" />
          <span>Top</span>
        </button>
      </div>
    </>
  );
}
