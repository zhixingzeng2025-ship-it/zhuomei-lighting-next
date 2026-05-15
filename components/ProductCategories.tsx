import Link from "next/link";
import { products } from "@/data/products";
import { ArrowRightIcon } from "./Icons";

export function ProductCategories() {
  return (
    <section className="section-shell bg-gradient-to-b from-white to-[#eef4fb]" id="products">
      <div className="page-container">
        <div className="section-title">
          <p className="eyebrow">Product Categories</p>
          <h2>Explore Our Outdoor Lighting Products</h2>
          <p>
            Structured product categories designed for fast browsing, clear specification reading, and future
            product-detail expansion.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <article key={product.slug} className="soft-card">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#eef4fb]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
                {product.badge ? (
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[12px] font-bold tracking-[0.12em] text-brand-deep shadow-soft">
                    {product.badge}
                  </span>
                ) : null}
              </div>
              <div className="grid gap-3 p-6">
                <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-deep">{product.cn}</div>
                <h3 className="text-[22px] leading-[1.15] tracking-tighter3 font-semibold text-brand-text">
                  {product.name}
                </h3>
                <p className="text-sm leading-7 text-brand-muted">{product.description}</p>
                <Link href="/products" className="action-pill w-fit border border-brand-blue/15 bg-brand-blue/8 text-brand-deep hover:bg-brand-blue/12">
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
