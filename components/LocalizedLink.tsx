"use client";

import Link, { type LinkProps } from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { localizePath, useLanguage } from "@/context/LanguageContext";

type Props = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & {
    children: ReactNode;
  };

export default function LocalizedLink({ href, children, ...props }: Props) {
  const { locale } = useLanguage();
  const localizedHref = typeof href === "string" ? localizePath(href, locale) : href;

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
}
