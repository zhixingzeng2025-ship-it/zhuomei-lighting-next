 "use client";

import { useLanguage } from "@/context/LanguageContext";
import { products } from "@/data/products";
import { ProductCard } from "./ProductCard";

export function ProductCategories() {
  const { t } = useLanguage();

  return (
    <section className="section-shell bg-gradient-to-b from-white to-[#eef4fb]" id="products">
      <div className="page-container">
        <div className="section-title">
          <p className="eyebrow">{t("sections.productsEyebrow")}</p>
          <h2>{t("sections.productsTitle")}</h2>
          <p>{t("sections.productsDescription")}</p>
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
