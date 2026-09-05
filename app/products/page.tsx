import type { Metadata } from "next";
import { ProductSeriesBrowser } from "@/components/ProductSeriesBrowser";

export const metadata: Metadata = {
  title: "Outdoor LED Lighting Products",
  description:
    "Browse ZOMEI outdoor LED lighting product categories for facade, landscape, road, commercial and custom engineering projects.",
};

export const dynamic = "force-static";

export default function ProductsPage() {
  return (
    <section className="bg-brand-deep py-14">
      <div className="page-container">
        <ProductSeriesBrowser />
      </div>
    </section>
  );
}
