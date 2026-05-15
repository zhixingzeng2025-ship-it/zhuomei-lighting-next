import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

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
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
