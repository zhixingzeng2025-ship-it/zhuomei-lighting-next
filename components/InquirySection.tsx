"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/data/site";
import { ArrowRightIcon, MailIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

export function InquirySection() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({
    type: "idle",
    message: "",
  });

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      country: String(formData.get("country") || "").trim(),
      product: String(formData.get("product") || "").trim(),
      details: String(formData.get("details") || "").trim(),
    };

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { ok?: boolean; message?: string };

      if (!response.ok || !result.ok) {
        throw new Error(result.message || "Submission failed");
      }

      setStatus({
        type: "success",
        message: "Inquiry submitted. We will contact you within 24 hours.",
      });
      form.reset();
    } catch (error) {
      const message = error instanceof Error ? error.message : "Submission failed";
      setStatus({
        type: "error",
        message,
      });
    } finally {
      setSubmitting(false);
    }
  };

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

          <form className="rounded-[28px] border border-brand-line bg-white p-6 shadow-card sm:p-7" onSubmit={onSubmit}>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 sm:col-span-1">
                <span className="label-text">Name</span>
                <input className="input-field" type="text" name="name" placeholder="Your name" required />
              </label>
              <label className="grid gap-2 sm:col-span-1">
                <span className="label-text">Email</span>
                <input className="input-field" type="email" name="email" placeholder="name@company.com" required />
              </label>
              <label className="grid gap-2 sm:col-span-1">
                <span className="label-text">Company</span>
                <input className="input-field" type="text" name="company" placeholder="Company name" />
              </label>
              <label className="grid gap-2 sm:col-span-1">
                <span className="label-text">Country</span>
                <input className="input-field" type="text" name="country" placeholder="Country / Region" />
              </label>
              <label className="grid gap-2 sm:col-span-2">
                <span className="label-text">Product Interested</span>
                <select className="input-field" name="product" defaultValue="">
                  <option value="">Select a product</option>
                  <option>Street Light</option>
                  <option>Solar Street Light</option>
                  <option>Flood Light</option>
                  <option>Solar Flood Light</option>
                  <option>Solar Garden Light</option>
                  <option>High Bay Light</option>
                  <option>Moisture Proof Lamps</option>
                  <option>Wall Washer Light</option>
                  <option>Linear Light</option>
                  <option>Projector Light</option>
                  <option>Point Light Source</option>
                </select>
              </label>
              <label className="grid gap-2 sm:col-span-2">
                <span className="label-text">Project Details</span>
                <textarea
                  className="min-h-40 input-field resize-y"
                  name="details"
                  rows={6}
                  placeholder="Share project scope, quantity, voltage, control system or timeline..."
                />
              </label>
            </div>

            <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                className="action-pill bg-gradient-to-r from-brand-blue to-[#77bfff] px-6 text-white shadow-[0_16px_34px_rgba(45,140,255,0.28)]"
                disabled={submitting}
              >
                {submitting ? "Sending..." : "Send Inquiry"}
                <ArrowRightIcon className="h-4 w-4" />
              </button>
              <p className="max-w-md text-sm leading-6 text-brand-muted">
                We reply within 24 hours with a practical solution and specification support.
              </p>
            </div>

            {status.type !== "idle" ? (
              <div
                className={[
                  "mt-4 rounded-[18px] border px-4 py-3 text-sm",
                  status.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-rose-200 bg-rose-50 text-rose-700",
                ].join(" ")}
              >
                {status.message}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
