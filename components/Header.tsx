"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "@/components/LocalizedLink";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";
import { productKeyForSlug, products } from "@/data/products";
import { productGroups } from "@/data/productGroups";
import { projectCategories, projects } from "@/data/projects";
import { solutions } from "@/data/solutions";
import { blogArticles, getBlogCategoryLabel } from "@/data/blog";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { ArrowRightIcon, ChevronDownIcon, CloseIcon, MenuIcon, SearchIcon } from "./Icons";

type SearchItem = {
  label: string;
  subtitle: string;
  href: string;
  kind: "Product" | "Solution" | "Project";
  keywords: string[];
};

const productMenuGroups = {
  en: [
    { label: "Linear Lighting", href: "/products/linear-lighting" },
    { label: "Projector Light", href: "/products/projector-light" },
    { label: "Point Light Source", href: "/products/point-light-source" },
    { label: "Wall Lamp", href: "/products/wall-lamp" },
    { label: "General Lighting", href: "/products/general-lighting" },
    { label: "Specialty Lighting", href: "/products/specialty-lighting" },
  ],
  zh: [
    { label: "线形照明", href: "/products/linear-lighting" },
    { label: "投光灯", href: "/products/projector-light" },
    { label: "点光源", href: "/products/point-light-source" },
    { label: "壁灯", href: "/products/wall-lamp" },
    { label: "常规照明", href: "/products/general-lighting" },
    { label: "特种照明", href: "/products/specialty-lighting" },
  ],
  ru: [
    { label: "Линейное освещение", href: "/products/linear-lighting" },
    { label: "Проекторный светильник", href: "/products/projector-light" },
    { label: "Точечный источник", href: "/products/point-light-source" },
    { label: "Настенный светильник", href: "/products/wall-lamp" },
    { label: "Общее освещение", href: "/products/general-lighting" },
    { label: "Специальное освещение", href: "/products/specialty-lighting" },
  ],
};

export function Header() {
  const pathname = usePathname();
  const { locale, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchPanelRef = useRef<HTMLDivElement>(null);
  const groupedProducts = productMenuGroups[locale as keyof typeof productMenuGroups] || productMenuGroups.en;
  const projectMenuCategories = useMemo(() => {
    return projectCategories.map((category) => ({
      key: category.key,
      label: locale === "en" ? category.labelEn : locale === "ru" ? category.labelRu : category.label,
      href: category.key === "all" ? "/projects" : `/projects?category=${category.key}`,
    }));
  }, [locale]);
  const blogMenuCategories = useMemo(() => {
    const sourceCategories = Array.from(new Set(blogArticles.map((article) => article.category)));
    return [
      { key: "all", label: t("blog.allCategory") as string, href: "/blog" },
      ...sourceCategories.map((category) => ({
        key: category,
        label: getBlogCategoryLabel(category, locale as "en" | "zh" | "ru"),
        href: `/blog?category=${encodeURIComponent(category)}`,
      })),
    ];
  }, [locale, t]);

  const searchItems = useMemo<SearchItem[]>(() => {
    return [
      ...products.map((item) => {
        const label = t(`products.${productKeyForSlug(item.slug)}`) as string;
        return {
          label,
          subtitle: item.description,
          href: `/products/${productGroups.find((group) => group.productSlugs.includes(item.slug))?.slug || "linear-lighting"}`,
          kind: "Product" as const,
          keywords: [label, item.name, item.cn, item.description, "product"],
        };
      }),
      ...solutions.map((item) => {
        const label = t(`solutions.${solutionKeyForSlug(item.slug)}`) as string;
        return {
          label,
          subtitle: item.description,
          href: `/solutions#${item.slug}`,
          kind: "Solution" as const,
          keywords: [label, item.title, item.description, "solution"],
        };
      }),
      ...projects.map((item) => {
        const label = t(`projects.${projectKeyForSlug(item.slug)}`) as string;
        return {
          label,
          subtitle: `${item.location} · ${item.products}`,
          href: `/projects#${item.slug}`,
          kind: "Project" as const,
          keywords: [label, item.name, item.location, item.products, "project"],
        };
      }),
    ];
  }, [t]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return searchItems.slice(0, 8);
    return searchItems.filter((item) =>
      item.keywords.some((keyword) => keyword.toLowerCase().includes(normalized))
    );
  }, [query, searchItems]);

  useEffect(() => {
    const onScroll = () => {
      const header = document.getElementById("site-header");
      header?.classList.toggle("is-scrolled", window.scrollY > 16);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen) return;
    const onMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (searchPanelRef.current && !searchPanelRef.current.contains(target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [searchOpen]);

  return (
    <header
      id="site-header"
      className="fixed inset-x-0 top-0 z-[70] border-b border-brand-line bg-white/95 backdrop-blur-xl"
    >
      <div className="page-container">
        <div className="flex h-16 items-center gap-2 md:h-[92px] md:gap-3">
          <Link
            href="/"
            aria-label="Go to homepage"
            className="group flex min-w-0 items-center gap-2 px-1 py-1 text-brand-text transition hover:opacity-90 md:gap-3"
          >
            <span className="grid h-9 w-9 flex-none place-items-center overflow-hidden bg-transparent transition group-hover:scale-[1.02] md:h-12 md:w-12">
              <img
                src="https://img.zomeiled.com/images/brand/zomei-logo-2026.png"
                alt=""
                width={48}
                height={48}
                className="h-9 w-9 object-contain md:h-12 md:w-12"
              />
            </span>
            <span className="grid min-w-0 gap-0.5">
              <strong className="truncate text-[14px] font-extrabold tracking-[0.06em] sm:text-[16px]">
                {siteConfig.brand}
              </strong>
              <span className="hidden text-[12px] tracking-[0.04em] text-brand-muted md:block">
                {t("site.brandTagline")}
              </span>
            </span>
          </Link>

          <button
            type="button"
            className="ml-auto inline-flex h-9 w-9 items-center justify-center border border-brand-line bg-white text-brand-text transition hover:bg-brand-background md:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <nav
            className={[
              "absolute left-3 right-3 top-16 grid max-h-[calc(100vh-80px)] gap-1 overflow-auto border border-brand-line bg-white p-4 shadow-card transition md:static md:ml-10 md:flex md:max-h-none md:flex-1 md:items-center md:justify-center md:gap-9 md:overflow-visible md:border-0 md:bg-transparent md:p-0 md:shadow-none xl:gap-12",
              menuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100",
            ].join(" ")}
            aria-label="Primary navigation"
          >
            <MenuItem label={t("menu.products")} href="/products">
              {groupedProducts.map((item) => (
                <SubMenuItem key={item.href} href={item.href}>
                  <span>{item.label}</span>
                </SubMenuItem>
              ))}
            </MenuItem>

            <MenuItem label={t("menu.solutions")} href="/solutions">
              {solutions.map((item) => (
                <SubMenuItem key={item.slug} href={`/solutions#${item.slug}`}>
                  <span>{t(`solutions.${solutionKeyForSlug(item.slug)}`)}</span>
                </SubMenuItem>
              ))}
            </MenuItem>

            <MenuItem label={t("menu.projects")} href="/projects">
              {projectMenuCategories.map((item) => (
                <SubMenuItem key={item.key} href={item.href}>
                  <span>{item.label}</span>
                </SubMenuItem>
              ))}
            </MenuItem>

            <MenuItem label={t("menu.support")} href="/blog">
              {blogMenuCategories.map((item) => (
                <SubMenuItem key={item.key} href={item.href}>
                  <span>{item.label}</span>
                </SubMenuItem>
              ))}
            </MenuItem>
            <Link href="/about" className="nav-link py-3 md:py-0">
              {t("menu.about")}
            </Link>
            <Link href="/contact" className="nav-link py-3 md:py-0">
              {t("menu.contact")}
            </Link>
          </nav>

          <div className="ml-auto hidden items-center gap-2 md:flex">
            <button
              type="button"
              aria-label="Search"
              className="icon-button"
              onClick={() => setSearchOpen(true)}
            >
              <SearchIcon />
            </button>

            <LanguageSwitcher />

            <Link href="/contact" className="action-pill bg-brand-blue text-white shadow-[0_14px_28px_rgba(37,99,255,0.22)] hover:bg-brand-deep">
              {t("common.quickInquiry")}
            </Link>
          </div>
        </div>
      </div>

      {searchOpen ? (
        <div className="search-overlay" data-open="true">
          <button
            type="button"
            className="absolute inset-0"
            aria-label="Close search"
            onClick={() => setSearchOpen(false)}
          />
          <div ref={searchPanelRef} className="search-panel">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">{t("common.search")}</p>
                <h3 className="text-[26px] font-semibold tracking-tighter2 text-brand-text">
                  {t("common.searchResults")}
                </h3>
              </div>
              <button
                type="button"
                className="icon-button border border-brand-line bg-white text-brand-text hover:bg-brand-background"
                onClick={() => setSearchOpen(false)}
                aria-label="Close search"
              >
                <CloseIcon className="h-5 w-5" />
              </button>
            </div>

            <label className="mt-5 flex items-center gap-3 rounded-[18px] border border-brand-line bg-[#f6f9fd] px-4 py-3">
              <SearchIcon className="h-5 w-5 text-brand-muted" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-brand-muted/70"
                placeholder={t("common.searchPlaceholder")}
              />
            </label>

            <div className="mt-4 flex items-center justify-between gap-3 text-[13px] text-brand-muted">
              <span>{t("common.tryKeywords")}</span>
              <span>
                {filtered.length} {t("common.results")}
              </span>
            </div>

            <div className="mt-5 grid max-h-[52vh] gap-3 overflow-auto pr-1">
              {filtered.length > 0 ? (
                filtered.map((item) => (
                  <Link
                    key={`${item.kind}-${item.label}`}
                    href={item.href}
                    className="rounded-[20px] border border-brand-line bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-soft"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-deep">
                          {item.kind}
                        </div>
                        <h4 className="mt-1 text-[18px] font-semibold tracking-tighter3 text-brand-text">
                          {item.label}
                        </h4>
                        <p className="mt-1 text-sm text-brand-muted">{item.subtitle}</p>
                      </div>
                      <ArrowRightIcon className="h-5 w-5 text-brand-deep" />
                    </div>
                  </Link>
                ))
              ) : (
                <div className="rounded-[20px] border border-brand-line bg-[#f8fbff] p-6 text-sm text-brand-muted">
                  {t("common.noResults")}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function solutionKeyForSlug(slug: string) {
  const map: Record<string, string> = {
    "road-street-lighting": "roadStreet",
    "solar-lighting": "solar",
    "landscape-lighting": "landscape",
    "building-facade-lighting": "facade",
    "industrial-lighting": "industrial",
    "garden-park-lighting": "gardenPark",
    "stadium-area-lighting": "stadiumArea",
    "urban-public-lighting": "urbanPublic",
  };
  return map[slug] || "roadStreet";
}

function projectKeyForSlug(slug: string) {
  const map: Record<string, string> = {
    "almaty-museum-of-arts-facade-lighting": "almatyMuseum",
    "guangzhou-digital-culture-valley-lighting-design": "guangzhouDigitalCultureValley",
  };
  return map[slug] || slug;
}

function MenuItem({
  label,
  href,
  children,
}: {
  label: string;
  href: string;
  children?: React.ReactNode;
}) {
  const hasChildren = Boolean(children);

  return (
    <div className="group relative flex justify-center">
      <Link href={href} className="nav-link flex items-center justify-center gap-1 py-3 md:min-h-[92px] md:py-0">
        {label}
        {hasChildren ? <ChevronDownIcon className="h-4 w-4" /> : null}
      </Link>
      {hasChildren ? (
        <div className="absolute left-1/2 top-[calc(100%-6px)] z-50 min-w-[230px] -translate-x-1/2 translate-y-1 opacity-0 invisible pointer-events-none transition-all duration-120 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto md:min-w-[250px]">
          <div className="border border-brand-line bg-white p-1.5 shadow-[0_16px_42px_rgba(8,26,59,0.14)]">
            <div className="grid max-h-[52vh] gap-1 overflow-auto">{children}</div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function SubMenuItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block border border-transparent px-5 py-3.5 text-center text-[15px] font-semibold tracking-[0.04em] text-brand-text transition hover:border-brand-gold hover:bg-brand-gold hover:text-[#071225] focus-visible:border-brand-gold focus-visible:bg-brand-gold focus-visible:text-[#071225] focus-visible:outline-none"
    >
      {children}
    </Link>
  );
}
