import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionDetailView } from "@/components/SolutionDetailView";
import { solutionKeyForSlug, solutions } from "@/data/solutions";

export const dynamic = "force-static";

export function generateStaticParams() {
  return solutions.map((solution) => ({ slug: solution.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const solution = solutions.find((item) => item.slug === params.slug);
  return {
    title: solution?.title ? `${solution.title} | ZOMEI` : "Solution | ZOMEI",
    description: solution?.description,
  };
}

export default function SolutionDetailPage({ params }: { params: { slug: string } }) {
  const solution = solutions.find((item) => item.slug === params.slug);
  if (!solution) notFound();

  const solutionKey = solutionKeyForSlug(solution.slug);

  return <SolutionDetailView solution={solution} titleKey={`solutions.${solutionKey}`} />;
}
