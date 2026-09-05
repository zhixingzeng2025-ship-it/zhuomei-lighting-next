import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductCategoryList } from "@/components/ProductCategoryList";
import { getProductGroup, productGroups } from "@/data/productGroups";

export const dynamic = "force-static";

export function generateStaticParams() {
  return productGroups.map((group) => ({ slug: group.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const group = getProductGroup(params.slug);
  const label = group?.labels.en || group?.labels.zh;
  return {
    title: label ? `${label} Products` : "Outdoor Lighting Products",
    description: label
      ? `Browse ZOMEI ${label} product series for outdoor lighting projects, with model pages, specifications and inquiry support.`
      : "Browse ZOMEI outdoor lighting product series, specifications and inquiry support.",
  };
}

export default function ProductCategoryPage({ params }: { params: { slug: string } }) {
  const group = getProductGroup(params.slug);
  if (!group) notFound();

  return <ProductCategoryList group={group} />;
}
