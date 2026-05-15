import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { products } from "@/data/products";
import { ArrowRightIcon } from "@/components/Icons";

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
            <article key={product.slug} id={product.slug} className="soft-card">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#eef4fb]">
                <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
              </div>
              <div className="grid gap-3 p-6">
                <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-deep">{product.cn}</div>
                <h2 className="text-[22px] leading-[1.15] tracking-tighter3 font-semibold text-brand-text">
                  {product.name}
                </h2>
                <p className="text-sm leading-7 text-brand-muted">{product.description}</p>
                <Link href="/contact" className="action-pill w-fit border border-brand-blue/15 bg-brand-blue/8 text-brand-deep hover:bg-brand-blue/12">
                  View Products
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
