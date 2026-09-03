import type { Metadata } from "next";
import { ProductSeriesBrowser } from "@/components/ProductSeriesBrowser";

export const metadata: Metadata = {
  title: "产品",
  description: "浏览适用于道路、太阳能项目、建筑立面、园林和工业应用的户外照明产品。",
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
