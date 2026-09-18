"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "@/components/LocalizedLink";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { projectCategories, projectKeyForSlug, projects, type ProjectCategoryKey } from "@/data/projects";
import { ArrowRightIcon } from "./Icons";

const projectCopy = {
  en: {
    libraryLabel: "Project Library",
    categoryDescriptions: {
      all: "View all organized engineering projects.",
      signature: "In-depth project stories and signature references.",
      facade: "Building exterior, entrance, outline and facade lighting projects.",
      road: "Road, street, municipal and public-space lighting projects.",
      landscape: "Gardens, parks, walkways and outdoor atmosphere lighting.",
      commercial: "Commercial plazas, hotels, complexes and open spaces.",
    },
    projects: {
      "almaty-museum-of-arts-facade-lighting": {
        location: "Almaty, Kazakhstan",
        products: "1150W precision LED gobo projector / architectural pattern projection",
      },
      "guangzhou-digital-culture-valley-lighting-design": {
        location: "Guangzhou, China",
        products: "36W RGBW wall washer / 10W RGBW linear light / DMX512 control system",
      },
    },
  },
  zh: {
    libraryLabel: "项目库",
    categoryDescriptions: {},
    projects: {},
  },
  ru: {
    libraryLabel: "Библиотека проектов",
    categoryDescriptions: {
      all: "Все подготовленные инженерные проекты.",
      signature: "Подробные материалы и ключевые референс-проекты.",
      facade: "Фасады, входные группы, контуры и архитектурная подсветка.",
      road: "Дорожное, уличное, муниципальное и общественное освещение.",
      landscape: "Сады, парки, пешеходные маршруты и атмосферное наружное освещение.",
      commercial: "Торговые площади, отели, комплексы и открытые пространства.",
    },
    projects: {
      "almaty-museum-of-arts-facade-lighting": {
        location: "Алматы, Казахстан",
        products: "1150W точный LED gobo-проектор / архитектурная проекция",
      },
      "guangzhou-digital-culture-valley-lighting-design": {
        location: "Гуанчжоу, Китай",
        products: "36W RGBW wall washer / 10W RGBW линейный светильник / DMX512 управление",
      },
    },
  },
};

export function LocalizedProjectsGrid() {
  const { locale, t } = useLanguage();
  const searchParams = useSearchParams();
  const requestedCategory = searchParams.get("category") as ("all" | ProjectCategoryKey | null);
  const initialCategory = projectCategories.some((category) => category.key === requestedCategory)
    ? requestedCategory || "all"
    : "all";
  const [activeCategory, setActiveCategory] = useState<"all" | ProjectCategoryKey>(initialCategory);

  useEffect(() => {
    setActiveCategory(initialCategory);
  }, [initialCategory]);

  const categoryMeta = useMemo(() => {
    return projectCategories
      .map((category) => {
        const count =
          category.key === "all"
            ? projects.length
            : projects.filter((project) => project.category === category.key).length;
        const label =
          locale === "en"
            ? category.labelEn
            : locale === "ru"
              ? category.labelRu
              : category.label;
        const description =
          locale === "zh"
            ? category.description
            : projectCopy[locale as "en" | "ru"].categoryDescriptions[category.key] || category.description;
        return { ...category, label, description, count };
      })
      .filter((category) => category.key === "all" || category.count > 0);
  }, [locale]);

  const visibleProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  const labelForCategory = (categoryKey: ProjectCategoryKey) => {
    const category = categoryMeta.find((item) => item.key === categoryKey);
    return category?.label || categoryKey;
  };

  return (
    <div className="space-y-8">
      <div className="rounded-[24px] border border-brand-line bg-white p-4 shadow-[0_20px_60px_rgba(8,26,59,0.06)]">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categoryMeta.map((category) => {
            const active = activeCategory === category.key;
            return (
              <button
                key={category.key}
                type="button"
                onClick={() => setActiveCategory(category.key)}
                className={`group min-h-[88px] rounded-[18px] border px-4 py-3 text-left transition ${
                  active
                    ? "border-brand-blue bg-brand-blue text-white shadow-[0_16px_34px_rgba(37,99,235,0.2)]"
                    : "border-brand-line bg-[#f8fbff] text-brand-text hover:border-brand-blue/40 hover:bg-white"
                }`}
              >
                <span className={`text-[11px] font-extrabold tracking-[0.18em] ${active ? "text-brand-yellow" : "text-brand-blue"}`}>
                  {String(category.count).padStart(2, "0")}
                </span>
                <span className="mt-3 block text-[15px] font-extrabold">{category.label}</span>
                <span className={`mt-1 block text-[12px] leading-5 ${active ? "text-white/70" : "text-brand-muted"}`}>
                  {category.description}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between border-b border-brand-line pb-4">
        <p className="text-sm font-semibold text-brand-muted">
          {t("common.showCount")} <span className="text-brand-blue">{visibleProjects.length}</span> {t("common.projectCount")}
        </p>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-muted">
          {projectCopy[locale as "en" | "zh" | "ru"]?.libraryLabel || projectCopy.zh.libraryLabel}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {visibleProjects.map((project) => {
          const projectKey = projectKeyForSlug(project.slug);
          const title = t(`projects.${projectKey}`) as string;
          const translatedProject =
            locale === "zh"
              ? undefined
              : projectCopy[locale as "en" | "ru"].projects[project.slug as keyof typeof projectCopy.en.projects];

          return (
            <article key={project.slug} id={project.slug} className="soft-card overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#eef4fb]">
                <img src={project.image} alt={title} className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]" />
                <span className="absolute left-4 top-4 bg-white/92 px-3 py-2 text-[11px] font-bold text-brand-blue shadow-soft">
                  {labelForCategory(project.category)}
                </span>
              </div>
              <div className="grid gap-3 p-6">
                <h2 className="text-[22px] leading-[1.15] tracking-tighter3 font-semibold text-brand-text">
                  {title}
                </h2>
                <div className="grid gap-1 text-sm text-brand-muted">
                  <span>
                    <strong className="text-brand-text">{t("common.location")}:</strong> {translatedProject?.location || project.location}
                  </span>
                  <span>
                    <strong className="text-brand-text">{t("common.usedProducts")}:</strong> {translatedProject?.products || project.products}
                  </span>
                </div>
                <Link href={`/projects/${project.slug}`} className="action-pill w-fit border border-brand-blue/15 bg-brand-blue/8 text-brand-deep hover:bg-brand-blue/12">
                  {t("common.learnMore")}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
