"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";
import { products } from "@/data/products";
import { projects } from "@/data/projects";
import { solutions } from "@/data/solutions";
import { ArrowRightIcon, ChevronDownIcon, CloseIcon, MenuIcon, SearchIcon } from "./Icons";

type SearchItem = {
  label: string;
  subtitle: string;
  href: string;
  kind: "Product" | "Solution" | "Project";
  keywords: string[];
};

const searchItems: SearchItem[] = [
  ...products.map((item) => ({
    label: item.name,
    subtitle: item.cn,
    href: `/products#${item.slug}`,
    kind: "Product" as const,
    keywords: [item.name, item.cn, item.description, "product"],
  })),
  ...solutions.map((item) => ({
    label: item.title,
    subtitle: item.description,
    href: `/solutions#${item.slug}`,
    kind: "Solution" as const,
    keywords: [item.title, item.description, "solution"],
  })),
  ...projects.map((item) => ({
    label: item.name,
    subtitle: `${item.location} · ${item.products}`,
    href: `/projects#${item.slug}`,
    kind: "Project" as const,
    keywords: [item.name, item.location, item.products, "project"],
  })),
];

export function Header() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return searchItems.slice(0, 8);
    return searchItems.filter((item) =>
      item.keywords.some((keyword) => keyword.toLowerCase().includes(normalized))
    );
  }, [query]);

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
        setLangOpen(false);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setLangOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = searchOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [searchOpen]);

  return (
    <header
      id="site-header"
      className="fixed inset-x-0 top-0 z-[70] border-b border-white/10 bg-[#071128]/80 backdrop-blur-xl"
    >
      <div className="page-container">
        <div className="flex h-[92px] items-center gap-3">
          <Link
            href="/"
            aria-label="Go to homepage"
            className="group flex min-w-0 items-center gap-3 rounded-2xl px-1 py-1 text-white transition hover:opacity-90"
          >
            <span className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-deep text-[13px] font-extrabold tracking-[0.12em] shadow-glass transition group-hover:scale-[1.02]">
              ZL
            </span>
            <span className="grid min-w-0 gap-0.5">
              <strong className="truncate text-[15px] font-extrabold tracking-[0.06em] sm:text-[16px]">
                {siteConfig.brand}
              </strong>
              <span className="hidden text-[12px] tracking-[0.04em] text-white/65 md:block">
                {siteConfig.tagline}
              </span>
            </span>
          </Link>

          <button
            type="button"
            className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/15 md:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>

          <nav
            className={[
              "absolute left-3 right-3 top-[92px] grid gap-1 rounded-[24px] border border-white/10 bg-[#071128]/96 p-4 shadow-card transition md:static md:ml-8 md:flex md:flex-1 md:items-center md:justify-start md:gap-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none",
              menuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0 md:pointer-events-auto md:translate-y-0 md:opacity-100",
            ].join(" ")}
            aria-label="Primary navigation"
          >
            <MenuItem label={t("menu.products")} href="/products">
              {products.map((item) => (
                <SubMenuItem key={item.slug} href={`/products#${item.slug}`}>
                  <span>{t(`products.${productKeyForSlug(item.slug)}`)}</span>
                  <span className="block text-[11px] font-normal text-brand-muted">{item.cn}</span>
                </SubMenuItem>
              ))}
            </MenuItem>

            <MenuItem label={t("menu.solutions")} href="/solutions">
              {solutions.map((item) => (
                <SubMenuItem key={item.slug} href={`/solutions#${item.slug}`}>
                  <span>{t(`solutions.${solutionKeyForSlug(item.slug)}`)}</span>
                  <span className="block text-[11px] font-normal text-brand-muted">{item.description}</span>
                </SubMenuItem>
              ))}
            </MenuItem>

            <MenuItem label={t("menu.projects")} href="/projects">
              {projects.map((item) => (
                <SubMenuItem key={item.slug} href={`/projects#${item.slug}`}>
                  <span>{t(`projects.${projectKeyForSlug(item.slug)}`)}</span>
                  <span className="block text-[11px] font-normal text-brand-muted">{item.location}</span>
                </SubMenuItem>
              ))}
            </MenuItem>

            <Link href="/about" className="nav-link py-3 md:py-0">
              {t("menu.about")}
            </Link>
            <Link href="/contact" className="nav-link py-3 md:py-0">
              {t("menu.support")}
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

            <div className="relative">
              <button
                type="button"
                className="inline-flex h-10 items-center gap-1 rounded-full border border-white/10 bg-white/10 px-4 text-sm font-semibold text-white backdrop-blur-xl transition hover:bg-white/15"
                onClick={() => setLangOpen((value) => !value)}
              >
                {locale.toUpperCase()}
                <ChevronDownIcon />
              </button>

              {langOpen ? (
                <div className="absolute right-0 top-[calc(100%+10px)] min-w-44 rounded-[20px] border border-white/10 bg-[#071128]/96 p-2 shadow-card">
                  <button
                    className="block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold text-white/85 hover:bg-white/8"
                    onClick={() => setLocale("en")}
                  >
                    English
                  </button>
                  <button
                    className="block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold text-white/85 hover:bg-white/8"
                    onClick={() => setLocale("zh")}
                  >
                    中文
                  </button>
                  <button
                    className="block w-full rounded-2xl px-4 py-3 text-left text-sm font-semibold text-white/85 hover:bg-white/8"
                    onClick={() => setLocale("ru")}
                  >
                    Русский
                  </button>
                </div>
              ) : null}
            </div>

            <Link href="/contact" className="action-pill bg-gradient-to-r from-brand-blue to-[#77bfff] text-white shadow-[0_16px_34px_rgba(45,140,255,0.28)]">
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
          <div className="search-panel">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">{t("common.search")}</p>
                <h3 className="text-[26px] font-semibold tracking-tighter2 text-brand-text">
                  Search products, solutions and projects
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
                placeholder="Type a keyword to filter cards"
              />
            </label>

            <div className="mt-4 flex items-center justify-between gap-3 text-[13px] text-brand-muted">
              <span>Try: Street Light, Solar, Facade, Stadium, OEM</span>
              <span>{filtered.length} results</span>
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
                  No results found.
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function productKeyForSlug(slug: string) {
  const map: Record<string, string> = {
    "street-light": "streetLight",
    "solar-street-light": "solarStreetLight",
    "flood-light": "floodLight",
    "solar-flood-light": "solarFloodLight",
    "solar-garden-light": "solarGardenLight",
    "high-bay-light": "highBayLight",
    "moisture-proof-lamps": "moistureProof",
    "wall-washer-light": "wallWasher",
    "linear-light": "linearLight",
    "projector-light": "projectorLight",
    "point-light-source": "pointLight",
  };
  return map[slug] || "streetLight";
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
    "road-lighting-dubai": "road",
    "commercial-plaza-riyadh": "plaza",
    "landscape-park-singapore": "landscape",
    "building-facade-london": "facade",
  };
  return map[slug] || "road";
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
    <div className="group relative">
      <Link href={href} className="nav-link flex items-center gap-1 py-3 md:py-0">
        {label}
        {hasChildren ? <ChevronDownIcon className="h-4 w-4" /> : null}
      </Link>
      {hasChildren ? (
        <div className="absolute left-0 top-[calc(100%+12px)] hidden min-w-[320px] rounded-[22px] border border-white/10 bg-[#071128]/96 p-2 shadow-card group-hover:block group-focus-within:block">
          <div className="grid max-h-[52vh] gap-1 overflow-auto pr-1">{children}</div>
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
      className="rounded-2xl px-4 py-3 text-left text-sm text-white/88 transition hover:bg-white/8 hover:text-white"
    >
      {children}
    </Link>
  );
}
