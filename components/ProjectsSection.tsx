"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { projectCategories, projectKeyForSlug, projects, type ProjectCategoryKey } from "@/data/projects";
import { ArrowRightIcon } from "./Icons";

export function ProjectsSection() {
  const { locale, t } = useLanguage();

  const labelForCategory = (categoryKey: ProjectCategoryKey) => {
    const category = projectCategories.find((item) => item.key === categoryKey);
    if (!category) return categoryKey;
    if (locale === "en") return category.labelEn;
    if (locale === "ru") return category.labelRu;
    return category.label;
  };

  return (
    <section className="bg-white py-10 sm:py-14 lg:py-16" id="projects">
      <div className="page-container">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="section-title">
            <p className="eyebrow">{t("sections.projectsEyebrow")}</p>
            <h2>{t("sections.projectsTitle")}</h2>
            <p>{t("sections.projectsDescription")}</p>
          </div>
          <Link href="/projects" className="text-sm font-semibold text-brand-blue hover:text-brand-deep">
            View all projects →
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => {
            const projectKey = projectKeyForSlug(project.slug);
            const title = t(`projects.${projectKey}`) as string;

            return (
              <article key={project.slug} className="soft-card">
                <div className="relative aspect-[16/9] overflow-hidden bg-[#eef4fb]">
                  <img
                    src={project.image}
                    alt={title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                  />
                  <span className="absolute left-4 top-4 bg-white/92 px-3 py-2 text-[11px] font-bold text-brand-blue shadow-soft">
                    {labelForCategory(project.category)}
                  </span>
                </div>
                <div className="grid gap-3 p-5">
                  <h3 className="text-[20px] leading-[1.15] font-semibold text-brand-text">
                    {title}
                  </h3>
                  <div className="grid gap-1 text-sm text-brand-muted">
                    <span>
                      <strong className="text-brand-text">{t("common.location")}:</strong> {project.location}
                    </span>
                    <span>
                      <strong className="text-brand-text">{t("common.usedProducts")}:</strong> {project.products}
                    </span>
                  </div>
                  <Link href={`/projects/${project.slug}`} className="action-pill w-fit border border-brand-blue/15 bg-brand-blue/8 text-brand-blue hover:bg-brand-blue hover:text-white">
                    {t("common.viewCase")}
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
