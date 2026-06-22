import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/ProductDetailView";
import { products, productKeyForSlug } from "@/data/products";
import { projects } from "@/data/projects";

export const dynamic = "force-static";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = products.find((item) => item.slug === params.slug);
  return {
    title: product?.name ? `${product.name} | ZHUOMEI LIGHTING` : "Product | ZHUOMEI LIGHTING",
    description: product?.description,
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((item) => item.slug === params.slug);
  if (!product) notFound();

  const productKey = productKeyForSlug(product.slug);

  return <ProductDetailView product={product} titleKey={`products.${productKey}`} relatedProjects={projects} />;
}
