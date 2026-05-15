import Link from "next/link";
import { siteConfig } from "@/data/site";

const footerGroups = [
  {
    title: "Products",
    items: [
      { label: "Street Light", href: "/products" },
      { label: "Solar Street Light", href: "/products" },
      { label: "Flood Light", href: "/products" },
      { label: "Solar Flood Light", href: "/products" },
      { label: "Garden Light", href: "/products" },
      { label: "High Bay Light", href: "/products" },
      { label: "Wall Washer Light", href: "/products" },
    ],
  },
  {
    title: "Solutions",
    items: [
      { label: "Road Lighting", href: "/solutions" },
      { label: "Solar Lighting", href: "/solutions" },
      { label: "Landscape Lighting", href: "/solutions" },
      { label: "Building Facade Lighting", href: "/solutions" },
      { label: "Industrial Lighting", href: "/solutions" },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Catalog Download", href: "/contact" },
      { label: "Installation Guide", href: "/contact" },
      { label: "FAQ", href: "/contact" },
      { label: "Warranty", href: "/contact" },
      { label: "Contact Support", href: "/contact" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", href: "/about" },
      { label: "Factory", href: "/about" },
      { label: "Certifications", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "News", href: "/about" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#061229] text-white">
      <div className="page-container py-16">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_repeat(4,minmax(0,1fr))]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-deep text-[13px] font-extrabold tracking-[0.12em] shadow-glass">
                ZL
              </span>
              <div className="grid gap-0.5">
                <strong className="text-[16px] font-extrabold tracking-[0.06em]">{siteConfig.brand}</strong>
                <span className="text-[12px] tracking-[0.04em] text-white/65">{siteConfig.tagline}</span>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Premium outdoor lighting for engineering projects, distributors and international buyers.
            </p>
          </div>

          {footerGroups.map((group) => (
            <div key={group.title} className="grid gap-3">
              <h3 className="text-[16px] font-semibold tracking-tight">{group.title}</h3>
              {group.items.map((item) => (
                <Link key={item.label} href={item.href} className="text-sm text-white/68 hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 ZHUOMEI LIGHTING. All rights reserved.</span>
          <span>Outdoor lighting brand website homepage prototype.</span>
        </div>
      </div>
    </footer>
  );
}
