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
    title: project?.name || "Project",
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
      ctaHref="/contact"
      ctaLabelKey="common.sendInquiry"
    />
  );
}
