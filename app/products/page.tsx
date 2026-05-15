import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
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
        <PageHeader
          eyebrow="Products"
          title="Outdoor Lighting Product Categories"
          description="A clean product browsing structure for engineering buyers, distributors and project procurement teams."
          actionHref="/contact"
          actionLabel="Request Catalog"
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
