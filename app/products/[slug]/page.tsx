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
  return {
    title: group ? `${group.labels.zh} | ZOMEI` : "产品 | ZOMEI",
    description: group ? `浏览 ZOMEI ${group.labels.zh} 产品系列。` : "浏览 ZOMEI 产品系列。",
  };
}

export default function ProductCategoryPage({ params }: { params: { slug: string } }) {
  const group = getProductGroup(params.slug);
  if (!group) notFound();

  return <ProductCategoryList group={group} />;
}
