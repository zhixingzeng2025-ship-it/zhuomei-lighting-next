"use client";

import { useLanguage } from "@/context/LanguageContext";
import { productGroupHrefForSlug, productKeyForSlug, type ProductItem } from "@/data/products";
import { ArrowRightIcon } from "./Icons";
import Link from "next/link";

type ProductCardProps = {
  product: ProductItem;
  href?: string;
};

export function ProductCard({ product, href }: ProductCardProps) {
  const { t } = useLanguage();
  const productKey = productKeyForSlug(product.slug);
  const title = t(`products.${productKey}`) as string;
  const targetHref = href || productGroupHrefForSlug(product.slug);

  return (
    <article className="soft-card" id={product.slug}>
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f7f9fc] p-5">
        <img src={product.image} alt={title} className="h-full w-full object-contain transition duration-500 hover:scale-[1.03]" />
        {product.badge ? (
          <span className="absolute left-4 top-4 bg-white/92 px-3 py-1 text-[12px] font-bold uppercase tracking-[0.12em] text-brand-blue shadow-soft">
            {product.badge}
          </span>
        ) : null}
      </div>
      <div className="grid gap-3 p-6">
        <h3 className="text-[20px] leading-[1.15] font-semibold text-brand-text">
          {title}
        </h3>
        <p className="text-sm leading-7 text-brand-muted">{product.description}</p>
        <Link href={targetHref} className="action-pill w-fit border border-brand-blue/15 bg-brand-blue/8 text-brand-blue hover:bg-brand-blue hover:text-white">
          {t("common.learnMore")}
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
