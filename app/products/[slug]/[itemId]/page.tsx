import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductGroup, getProductGroupItems, productGroups } from "@/data/productGroups";
import { productSeries } from "@/data/productSeries";
import { ProductSeriesDetailContent } from "@/components/ProductSeriesDetailContent";

export const dynamic = "force-static";

export function generateStaticParams() {
  return productGroups.flatMap((group) =>
    getProductGroupItems(group).map((item) => ({ slug: group.slug, itemId: item.id }))
  );
}

export function generateMetadata({ params }: { params: { slug: string; itemId: string } }): Metadata {
  const item = productSeries.find((entry) => entry.id === params.itemId);
  return {
    title: item ? `${item.code} Outdoor LED Lighting | ZOMEI` : "Outdoor Lighting Product | ZOMEI",
    description: item
      ? `${item.name} for outdoor lighting projects. View core specifications, application scenes and request datasheet or IES files from ZOMEI Lighting.`
      : "ZOMEI outdoor lighting product details, specifications, datasheet and project inquiry support.",
  };
}

export default function ProductSeriesDetailPage({ params }: { params: { slug: string; itemId: string } }) {
  const group = getProductGroup(params.slug);
  const item = productSeries.find((entry) => entry.id === params.itemId);
  const groupItems = group ? getProductGroupItems(group) : [];
  if (!group || !item || !groupItems.some((entry) => entry.id === item.id)) notFound();

  return <ProductSeriesDetailContent group={group} item={item} />;
}
