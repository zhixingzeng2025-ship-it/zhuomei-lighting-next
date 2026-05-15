import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailView } from "@/components/DetailView";
import { solutions } from "@/data/solutions";

export const dynamic = "force-static";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const solution = solutions.find((item) => item.slug === params.slug);
  return {
    title: solution?.title || "Solution",
  };
}

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const solution = solutions.find((item) => item.slug === params.slug);
  if (!solution) notFound();

  const titleKey = `solutions.${
    {
      "road-street-lighting": "roadStreet",
      "solar-lighting": "solar",
      "landscape-lighting": "landscape",
      "building-facade-lighting": "facade",
      "industrial-lighting": "industrial",
      "garden-park-lighting": "gardenPark",
      "stadium-area-lighting": "stadiumArea",
      "urban-public-lighting": "urbanPublic",
    }[solution.slug] || "roadStreet"
  }`;

  return (
    <DetailView
      backHref="/solutions"
      backLabelKey="common.backToSolutions"
      eyebrowKey="sections.solutionsEyebrow"
      titleKey={titleKey}
      description={solution.description}
      image={solution.image}
      facts={[
        { labelKey: "sections.solutionsTitle", value: solution.title },
        { labelKey: "common.learnMore", value: "Outdoor applications" },
      ]}
      ctaHref="/contact"
      ctaLabelKey="common.sendInquiry"
    />
  );
}
