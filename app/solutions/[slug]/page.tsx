import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailView } from "@/components/DetailView";
import { solutionKeyForSlug, solutions } from "@/data/solutions";

export const dynamic = "force-static";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const solution = solutions.find((item) => item.slug === params.slug);
  return {
    title: solution?.title ? `${solution.title} | ZHUOMEI LIGHTING` : "Solution | ZHUOMEI LIGHTING",
    description: solution?.description,
  };
}

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const solution = solutions.find((item) => item.slug === params.slug);
  if (!solution) notFound();

  const solutionKey = solutionKeyForSlug(solution.slug);

  return (
    <DetailView
      backHref="/solutions"
      backLabelKey="common.backToSolutions"
      eyebrowKey="sections.solutionsEyebrow"
      titleKey={`solutions.${solutionKey}`}
      description={solution.description}
      image={solution.image}
      facts={[
        { labelKey: "detail.suitableFor", value: solution.applications.length ? "Outdoor projects" : "General" },
        { labelKey: "detail.applications", value: `${solution.applications.length}` },
      ]}
      sections={[
        {
          titleKey: "detail.overview",
          description: solution.overview,
        },
        {
          titleKey: "detail.keyFeatures",
          items: solution.highlights,
        },
        {
          titleKey: "detail.applications",
          items: solution.applications,
        },
        {
          titleKey: "detail.engineeringNotes",
          description: "Built for project workflows that require stability, clarity and clean integration.",
        },
      ]}
      ctaHref="/contact"
      ctaLabelKey="common.sendInquiry"
    />
  );
}
