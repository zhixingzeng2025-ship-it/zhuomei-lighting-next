"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { solutionKeyForSlug, solutions } from "@/data/solutions";
import { ArrowRightIcon } from "./Icons";

const solutionDescriptions = {
  en: {
    roadStreet: "Infrastructure lighting that balances road safety and visual comfort.",
    solar: "Standalone energy-saving systems for flexible outdoor deployment.",
    landscape: "Elegant ambience lighting for parks, gardens and public spaces.",
    facade: "Controlled light color and rhythm for architectural facades.",
    industrial: "Durable lighting for factories, warehouses and work areas.",
    gardenPark: "Human-centered lighting for leisure and public environments.",
    stadiumArea: "High-coverage lighting for sports fields and large-area projects.",
    urbanPublic: "Reliable lighting for urban and public infrastructure.",
  },
  zh: {},
  ru: {
    roadStreet: "Инфраструктурное освещение с балансом безопасности и зрительного комфорта.",
    solar: "Автономные энергоэффективные системы для гибкого наружного применения.",
    landscape: "Атмосферное освещение парков, садов и общественных пространств.",
    facade: "Контролируемый цвет и ритм света для архитектурных фасадов.",
    industrial: "Надежное освещение для производств, складов и рабочих зон.",
    gardenPark: "Комфортное освещение для рекреационных и общественных пространств.",
    stadiumArea: "Широкое покрытие для спортивных площадок и больших территорий.",
    urbanPublic: "Надежное освещение городской и общественной инфраструктуры.",
  },
};

const solutionCategories = [
  {
    key: "all",
    label: { en: "All Solutions", zh: "全部方案", ru: "Все решения" },
    description: {
      en: "Browse every outdoor lighting solution.",
      zh: "快速浏览所有户外照明方案。",
      ru: "Все решения наружного освещения.",
    },
    slugs: [],
  },
  {
    key: "road",
    label: { en: "Road & Solar", zh: "道路与太阳能", ru: "Дороги и solar" },
    description: {
      en: "Street, road and off-grid systems.",
      zh: "道路、市政与离网照明系统。",
      ru: "Дорожные и автономные системы.",
    },
    slugs: ["road-street-lighting", "solar-lighting", "urban-public-lighting"],
  },
  {
    key: "facade",
    label: { en: "Facade & Urban", zh: "建筑与城市", ru: "Фасады и город" },
    description: {
      en: "Architectural facades and public spaces.",
      zh: "建筑立面与城市公共空间。",
      ru: "Фасады и городские пространства.",
    },
    slugs: ["building-facade-lighting", "urban-public-lighting"],
  },
  {
    key: "landscape",
    label: { en: "Landscape", zh: "景观园林", ru: "Ландшафт" },
    description: {
      en: "Parks, gardens and leisure areas.",
      zh: "公园、园林与休闲空间。",
      ru: "Парки, сады и зоны отдыха.",
    },
    slugs: ["landscape-lighting", "garden-park-lighting"],
  },
  {
    key: "area",
    label: { en: "Industrial & Area", zh: "工业与大场地", ru: "Промышленные зоны" },
    description: {
      en: "Factories, warehouses and large-area lighting.",
      zh: "厂房、仓储、广场与运动场。",
      ru: "Производства, склады и большие площадки.",
    },
    slugs: ["industrial-lighting", "stadium-area-lighting"],
  },
] satisfies Array<{
  key: string;
  label: Record<"en" | "zh" | "ru", string>;
  description: Record<"en" | "zh" | "ru", string>;
  slugs: string[];
}>;

const localizedUi = {
  en: {
    categoryEyebrow: "Solution Categories",
    categoryDescription: "Browse by project type and lighting scenario.",
    resultLabel: "Showing",
    resultUnit: "solutions",
    libraryLabel: "Solution Library",
    metaType: "Solution",
    metaReadTime: "Quick overview",
    applicationLabel: "Applications",
  },
  zh: {
    categoryEyebrow: "方案分类",
    categoryDescription: "按项目类型和照明场景快速筛选。",
    resultLabel: "当前显示",
    resultUnit: "个方案",
    libraryLabel: "Solution Library",
    metaType: "解决方案",
    metaReadTime: "简洁浏览",
    applicationLabel: "应用场景",
  },
  ru: {
    categoryEyebrow: "Категории решений",
    categoryDescription: "Быстрый выбор по типу проекта и сценарию.",
    resultLabel: "Показано",
    resultUnit: "решений",
    libraryLabel: "Solution Library",
    metaType: "Решение",
    metaReadTime: "Краткий обзор",
    applicationLabel: "Применение",
  },
};

export function LocalizedSolutionsGrid() {
  const { locale, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<(typeof solutionCategories)[number]["key"]>("all");
  const ui = localizedUi[locale as "en" | "zh" | "ru"] || localizedUi.zh;

  const categoryMeta = useMemo(() => {
    return solutionCategories.map((category) => {
      const count =
        category.key === "all"
          ? solutions.length
          : solutions.filter((solution) => category.slugs.includes(solution.slug)).length;
      return {
        ...category,
        count,
        label: category.label[locale as "en" | "zh" | "ru"] || category.label.zh,
        description: category.description[locale as "en" | "zh" | "ru"] || category.description.zh,
      };
    });
  }, [locale]);

  const visibleSolutions = useMemo(() => {
    const active = solutionCategories.find((category) => category.key === activeCategory);
    if (!active || active.key === "all") return solutions;
    return solutions.filter((solution) => active.slugs.includes(solution.slug));
  }, [activeCategory]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 border-y border-brand-line bg-white/80 px-5 py-4 shadow-[0_14px_36px_rgba(8,26,59,0.05)] backdrop-blur lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-blue">{ui.categoryEyebrow}</p>
          <p className="mt-1 text-sm leading-6 text-brand-muted">{ui.categoryDescription}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {categoryMeta.map((category) => {
            const isActive = category.key === activeCategory;
            return (
              <button
                key={category.key}
                type="button"
                onClick={() => setActiveCategory(category.key)}
                className={[
                  "min-h-11 border px-4 py-2 text-sm font-semibold transition",
                  isActive
                    ? "border-brand-blue bg-brand-blue text-white shadow-[0_12px_24px_rgba(37,99,255,0.18)]"
                    : "border-brand-line bg-white text-brand-text hover:border-brand-blue/40 hover:bg-[#f3f7ff] hover:text-brand-blue",
                ].join(" ")}
                title={category.description}
              >
                {category.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-brand-line pb-4">
        <p className="text-sm font-semibold text-brand-muted">
          {ui.resultLabel} <span className="text-brand-blue">{visibleSolutions.length}</span> {ui.resultUnit}
        </p>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-muted">{ui.libraryLabel}</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {visibleSolutions.map((solution) => {
          const solutionKey = solutionKeyForSlug(solution.slug);
          const title = t(`solutions.${solutionKey}`) as string;
          const description =
            locale === "zh"
              ? solution.description
              : solutionDescriptions[locale as "en" | "ru"][solutionKey as keyof typeof solutionDescriptions.en] || solution.description;
          const applications = solution.applications.slice(0, 3);

          return (
            <Link
              key={solution.slug}
              id={solution.slug}
              href={`/solutions/${solution.slug}`}
              className="group flex h-full flex-col overflow-hidden border border-brand-line bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand-blue/30 hover:shadow-[0_22px_58px_rgba(8,26,59,0.13)]"
            >
              <div className="relative h-60 overflow-hidden bg-[#edf5ff]">
                <img
                  src={solution.image}
                  alt={title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute left-5 top-5 bg-white/92 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-blue shadow-[0_10px_24px_rgba(8,26,59,0.12)]">
                  {ui.metaType}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex flex-wrap items-center gap-3 text-[12px] font-semibold text-brand-muted">
                  <span>{ui.metaReadTime}</span>
                  <span className="h-1 w-1 rounded-full bg-brand-blue/45" />
                  <span>{applications.length} {ui.applicationLabel}</span>
                </div>
                <h2 className="mt-3 text-[23px] leading-tight font-semibold tracking-tighter3 text-brand-text transition group-hover:text-brand-blue">
                  {title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-brand-muted">{description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {applications.map((application) => (
                    <span key={application} className="border border-brand-line bg-[#f8fbff] px-3 py-1.5 text-[12px] font-semibold text-brand-muted">
                      {application}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue">
                  {t("common.viewContent")} <ArrowRightIcon className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
