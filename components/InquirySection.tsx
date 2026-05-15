"use client";

import { siteConfig } from "@/data/site";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import InquiryForm from "./InquiryForm";

export function InquirySection() {
  return (
    <section className="section-shell bg-white" id="contact">
      <div className="page-container">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="py-1">
            <p className="eyebrow">Contact / Inquiry</p>
            <h2 className="max-w-2xl text-[clamp(2rem,3.6vw,3.5rem)] leading-[1.04] tracking-tighter2 font-semibold text-brand-text">
              Have an Outdoor Lighting Project in Mind?
            </h2>
            <p className="mt-4 max-w-2xl text-[15px] leading-7 text-brand-muted sm:text-base">
              Contact our lighting experts and get a professional solution within 24 hours.
            </p>

            <div className="mt-8 grid gap-4">
              <a className="soft-card flex items-center gap-4 p-4" href={siteConfig.contact.whatsappLink} target="_blank" rel="noreferrer">
                <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-gradient-to-br from-brand-blue to-brand-deep text-white">
                  <WhatsAppIcon />
                </span>
                <span>
                  <strong className="block text-[15px] text-brand-text">WhatsApp</strong>
                  <span className="text-sm text-brand-muted">{siteConfig.contact.whatsapp}</span>
                </span>
              </a>

              <a className="soft-card flex items-center gap-4 p-4" href={`mailto:${siteConfig.contact.email}`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-gradient-to-br from-brand-blue to-brand-deep text-white">
                  <MailIcon />
                </span>
                <span>
                  <strong className="block text-[15px] text-brand-text">Email</strong>
                  <span className="text-sm text-brand-muted">{siteConfig.contact.email}</span>
                </span>
              </a>

              <a className="soft-card flex items-center gap-4 p-4" href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}>
                <span className="flex h-12 w-12 items-center justify-center rounded-[16px] bg-gradient-to-br from-brand-blue to-brand-deep text-white">
                  <PhoneIcon />
                </span>
                <span>
                  <strong className="block text-[15px] text-brand-text">Phone</strong>
                  <span className="text-sm text-brand-muted">{siteConfig.contact.phone}</span>
                </span>
              </a>
            </div>
          </div>

          <div className="rounded-[28px] border border-brand-line bg-white p-6 shadow-card sm:p-7">
            <InquiryForm submitLabel="Send Inquiry" endpoint="/api/contact" />
          </div>
        </div>
      </div>
    </section>
  );
}
