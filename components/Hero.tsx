"use client";

import { useMemo } from "react";
import Link from "@/components/LocalizedLink";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRightIcon } from "./Icons";

type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  primary: string;
  primaryHref: string;
  secondary: string;
  secondaryHref: string;
  proof: string[];
  stats: Array<{
    value: string;
    label: string;
  }>;
};

export function Hero() {
  const { locale } = useLanguage();

  const hero = useMemo(() => {
    const copy: Record<string, HeroContent> = {
      en: {
        eyebrow: "Architectural · Landscape · Urban Outdoor Lighting",
        title: "Architectural & Outdoor Lighting for Real Projects",
        description: "Product supply, lighting support and custom manufacturing for global project buyers.",
        image: "https://img.zomeiled.com/images/projects/almaty-museum/web/zomei-almaty-museum-facade-lighting-p01-final-night-hero.jpg",
        imagePosition: "center",
        primary: "View Projects",
        primaryHref: "/projects",
        secondary: "Browse Products",
        secondaryHref: "/products",
        proof: ["Fast Selection", "OEM / ODM", "Project Support"],
        stats: [
          { value: "15+", label: "Years" },
          { value: "100+", label: "Projects" },
          { value: "OEM/ODM", label: "Custom" },
          { value: "CE/RoHS/ISO", label: "Documents" },
        ],
      },
      zh: {
        eyebrow: "建筑 · 景观 · 道路 · 文旅夜游",
        title: "面向工程项目的户外建筑照明解决方案",
        description: "灯具供应、方案配合、定制生产与项目交付支持。",
        image: "https://img.zomeiled.com/images/projects/almaty-museum/web/zomei-almaty-museum-facade-lighting-p01-final-night-hero.jpg",
        imagePosition: "center",
        primary: "看项目案例",
        primaryHref: "/projects",
        secondary: "看产品系列",
        secondaryHref: "/products",
        proof: ["快速选型", "OEM / ODM", "项目配合"],
        stats: [
          { value: "15+", label: "照明经验" },
          { value: "100+", label: "项目服务" },
          { value: "OEM/ODM", label: "定制配合" },
          { value: "CE/RoHS/ISO", label: "资料支持" },
        ],
      },
      ru: {
        eyebrow: "Архитектура · Ландшафт · Дороги · Город",
        title: "Архитектурное наружное освещение для проектов",
        description: "Поставка, подбор, кастомизация и поддержка международных проектов.",
        image: "https://img.zomeiled.com/images/projects/almaty-museum/web/zomei-almaty-museum-facade-lighting-p01-final-night-hero.jpg",
        imagePosition: "center",
        primary: "Смотреть проекты",
        primaryHref: "/projects",
        secondary: "Смотреть продукцию",
        secondaryHref: "/products",
        proof: ["Быстрый подбор", "OEM / ODM", "Поддержка проекта"],
        stats: [
          { value: "15+", label: "Опыт" },
          { value: "100+", label: "Проекты" },
          { value: "OEM/ODM", label: "Кастом" },
          { value: "CE/RoHS/ISO", label: "Документы" },
        ],
      },
    };
    return copy[locale] || copy.en;
  }, [locale]);

  return (
    <section className="relative -mt-16 min-h-[calc(100svh-4rem)] overflow-hidden bg-brand-navy text-white sm:min-h-[560px] md:-mt-[92px] md:min-h-[640px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${hero.image}')`,
          backgroundPosition: hero.imagePosition || "center",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,12,27,0.96)_0%,rgba(4,16,37,0.82)_44%,rgba(4,16,37,0.42)_72%,rgba(4,16,37,0.16)_100%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-navy to-transparent" aria-hidden="true" />

      <div className="page-container relative flex min-h-[calc(100svh-4rem)] flex-col justify-center pb-6 pt-20 sm:min-h-[560px] md:min-h-[640px] md:pb-10 md:pt-[128px]">
        <div className="max-w-[960px]">
          <p className="eyebrow eyebrow-light hidden sm:inline-flex">{hero.eyebrow}</p>
          <h1 className="max-w-[920px] text-[clamp(2rem,9vw,2.55rem)] font-semibold leading-[1.04] sm:text-[clamp(2.55rem,5.2vw,5rem)] sm:leading-[1.02]">
            {hero.title}
          </h1>
          <p className="mt-3 max-w-[700px] text-[15px] leading-7 text-white/82 sm:mt-5 sm:text-[clamp(1rem,1.25vw,1.2rem)] sm:leading-8">
            {hero.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-3 sm:mt-8">
            <Link
              href={hero.primaryHref}
              className="action-pill bg-brand-blue text-white shadow-[0_16px_34px_rgba(37,99,255,0.28)] hover:bg-brand-deep"
            >
              {hero.primary}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link
              href={hero.secondaryHref}
              className="action-pill border border-white/35 bg-transparent text-white backdrop-blur-xl hover:bg-white/12"
            >
              {hero.secondary}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-5 hidden flex-wrap gap-2 sm:flex sm:mt-6">
            {hero.proof.map((item) => (
              <span key={item} className="border border-white/16 bg-white/[0.08] px-4 py-2 text-sm font-semibold text-white/88 backdrop-blur-xl">
                {item}
              </span>
            ))}
          </div>

          <div className="mt-5 hidden max-w-3xl grid-cols-2 gap-px overflow-hidden border border-white/14 bg-white/12 sm:mt-6 sm:grid sm:grid-cols-4">
            {hero.stats.map((item) => (
              <span
                key={item.label}
                className="grid min-h-[70px] content-center bg-black/26 px-4 text-[12px] uppercase tracking-[0.06em] text-white/68 backdrop-blur-xl"
              >
                <strong className="mb-1 block text-[16px] font-semibold normal-case tracking-normal text-white">{item.value}</strong>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
