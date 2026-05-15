"use client";

import { useLanguage } from "@/context/LanguageContext";
import { productKeyForSlug, type ProductItem } from "@/data/products";
import { ArrowRightIcon } from "./Icons";
import Link from "next/link";

type ProductCardProps = {
  product: ProductItem;
  href?: string;
};

export function ProductCard({ product, href = "/products" }: ProductCardProps) {
  const { t } = useLanguage();
  const productKey = productKeyForSlug(product.slug);
  const title = t(`products.${productKey}`) as string;

  return (
    <article className="soft-card" id={product.slug}>
      <div className="relative aspect-[4/3] overflow-hidden bg-[#eef4fb]">
        <img src={product.image} alt={title} className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]" />
        {product.badge ? (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[12px] font-bold tracking-[0.12em] text-brand-deep shadow-soft">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="grid gap-3 p-6">
        <h3 className="text-[22px] leading-[1.15] tracking-tighter3 font-semibold text-brand-text">
          {title}
        </h3>
        <p className="text-sm leading-7 text-brand-muted">{product.description}</p>
        <Link href={href} className="action-pill w-fit border border-brand-blue/15 bg-brand-blue/8 text-brand-deep hover:bg-brand-blue/12">
          View Products
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
