"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

type ProjectBriefPageProps = {
  locale: "en" | "ru";
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  facts: Array<[string, string]>;
  gallery: Array<{ src: string; alt: string }>;
};

const copy = {
  en: {
    back: "Back to Projects",
    overview: "Project Overview",
    proof: "Project Proof",
    proofDescription: "A quick project page should help buyers understand the result, products, technical challenge and delivery support without reading a long article.",
    gallery: "Selected Images",
    inquiry: "Need a similar lighting solution?",
    inquiryText: "Send the project scene, target effect, mounting conditions and schedule. ZOMEI can support product selection, documents and delivery coordination.",
    cta: "Get Similar Project Proposal",
  },
  ru: {
    back: "Назад к проектам",
    overview: "Обзор проекта",
    proof: "Подтверждение опыта",
    proofDescription: "Краткая страница проекта должна быстро показать результат, продукцию, техническую задачу и поддержку поставки.",
    gallery: "Избранные изображения",
    inquiry: "Нужно похожее световое решение?",
    inquiryText: "Отправьте сцену проекта, целевой эффект, условия монтажа и сроки. ZOMEI поможет с подбором, документами и поставкой.",
    cta: "Получить предложение по похожему проекту",
  },
};

export function ProjectBriefPage({ locale, title, subtitle, image, tags, facts, gallery }: ProjectBriefPageProps) {
  const text = copy[locale];

  return (
    <article className="bg-white text-brand-text">
      <section className="relative min-h-[520px] overflow-hidden bg-[#061229] text-white">
        <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover opacity-72" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061229] via-[#061229]/76 to-[#061229]/18" />
        <div className="page-container relative flex min-h-[520px] flex-col justify-between py-8 sm:py-10">
          <Link href="/projects" className="inline-flex w-fit items-center gap-2 border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white hover:bg-white hover:text-brand-text">
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
            {text.back}
          </Link>
          <div className="max-w-4xl">
            <div className="mb-5 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="border border-white/18 bg-white/12 px-3 py-2 text-[12px] font-bold text-white/88">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="text-[clamp(2.4rem,6vw,5.4rem)] font-semibold leading-[0.96] tracking-tighter3">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-[clamp(1rem,1.6vw,1.35rem)] font-semibold leading-8 text-white/78">
              {subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="page-container py-10 sm:py-14">
        <div className="grid gap-px border border-brand-line bg-brand-line sm:grid-cols-2 lg:grid-cols-3">
          {facts.map(([label, value], index) => (
            <div key={label} className="bg-white p-5 sm:p-6">
              <p className="text-[12px] font-extrabold tracking-[0.18em] text-brand-blue">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 text-[18px] font-semibold text-brand-text">{label}</h2>
              <p className="mt-3 text-sm leading-7 text-brand-muted">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#f5f7fa] py-10 sm:py-14">
        <div className="page-container">
          <div className="grid gap-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">{text.proof}</p>
              <h2 className="mt-3 text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-tight tracking-tighter3 text-brand-text">
                {text.overview}
              </h2>
              <p className="mt-4 text-[15px] leading-7 text-brand-muted">{text.proofDescription}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {gallery.map((item) => (
                <figure key={item.src} className="overflow-hidden border border-brand-line bg-white shadow-soft">
                  <img src={item.src} alt={item.alt} className="aspect-[4/3] w-full object-cover" />
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-container py-10 sm:py-14">
        <div className="grid gap-6 bg-[#061229] p-6 text-white sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-yellow">{text.gallery}</p>
            <h2 className="mt-3 text-[clamp(1.75rem,3vw,3rem)] font-semibold leading-tight tracking-tighter3">
              {text.inquiry}
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-white/72">{text.inquiryText}</p>
          </div>
          <Link href="/contact" className="action-pill bg-brand-blue text-white hover:bg-white hover:text-brand-text">
            {text.cta}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </article>
  );
}
