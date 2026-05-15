import type { Metadata } from "next";
import { LocalizedPageHeader } from "@/components/LocalizedPageHeader";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Products",
};

export const dynamic = "force-static";

export default function ProductsPage() {
  return (
    <section className="section-shell">
      <div className="page-container space-y-10">
        <LocalizedPageHeader
          eyebrowKey="sections.productsEyebrow"
          titleKey="sections.productsTitle"
          descriptionKey="sections.productsDescription"
          actionHref="/contact"
          actionLabelKey="common.quickInquiry"
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} href="/contact" />
          ))}
        </div>
      </div>
    </section>
  );
}
