import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailView } from "@/components/DetailView";
import { projectKeyForSlug, projects } from "@/data/projects";

export const dynamic = "force-static";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((item) => item.slug === params.slug);
  return {
    title: project?.name ? `${project.name} | ZHUOMEI LIGHTING` : "Project | ZHUOMEI LIGHTING",
    description: project?.overview,
  };
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  const projectKey = projectKeyForSlug(project.slug);

  return (
    <DetailView
      backHref="/projects"
      backLabelKey="common.backToProjects"
      eyebrowKey="sections.projectsEyebrow"
      titleKey={`projects.${projectKey}`}
      description={project.products}
      image={project.image}
      facts={[
        { labelKey: "common.location", value: project.location },
        { labelKey: "common.usedProducts", value: project.products },
      ]}
      sections={[
        {
          titleKey: "detail.overview",
          description: project.overview,
        },
        {
          titleKey: "detail.projectHighlights",
          items: project.highlights,
        },
        {
          titleKey: "detail.projectScope",
          description: "Commercial streets, plazas, parks and architectural facade environments.",
        },
      ]}
      ctaHref="/contact"
      ctaLabelKey="common.sendInquiry"
    />
  );
}
