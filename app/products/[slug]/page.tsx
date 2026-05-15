import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailView } from "@/components/DetailView";
import { products, productKeyForSlug } from "@/data/products";

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

  return (
    <DetailView
      backHref="/products"
      backLabelKey="common.backToProducts"
      eyebrowKey="sections.productsEyebrow"
      titleKey={`products.${productKey}`}
      description={product.description}
      image={product.image}
      facts={[
        { labelKey: "detail.productType", value: product.badge || "Outdoor" },
        { labelKey: "detail.applications", value: `${product.applications.length}` },
      ]}
      sections={[
        {
          titleKey: "detail.overview",
          description: product.overview,
        },
        {
          titleKey: "detail.keyFeatures",
          items: product.features,
        },
        {
          titleKey: "detail.applications",
          items: product.applications,
        },
        {
          titleKey: "detail.specifications",
          rows: product.specs.map((item) => ({ label: item.label, value: item.value })),
        },
      ]}
      ctaHref="/contact"
      ctaLabelKey="common.sendInquiry"
    />
  );
}
