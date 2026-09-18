import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { blogArticles } from "@/data/blog";
import { getProductGroupItems, productGroups } from "@/data/productGroups";
import { projects } from "@/data/projects";
import { solutions } from "@/data/solutions";

const baseUrl = "https://www.zomeiled.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/products", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/solutions", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/projects", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/blog", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    ...productGroups.map((group) => ({ path: `/products/${group.slug}`, priority: 0.8, changeFrequency: "monthly" as const })),
    ...productGroups.flatMap((group) =>
      getProductGroupItems(group).map((item) => ({
        path: `/products/${group.slug}/${item.id}`,
        priority: 0.8,
        changeFrequency: "monthly" as const,
      })),
    ),
    ...solutions.map((solution) => ({ path: `/solutions/${solution.slug}`, priority: 0.7, changeFrequency: "monthly" as const })),
    ...projects.map((project) => ({ path: `/projects/${project.slug}`, priority: 0.8, changeFrequency: "monthly" as const })),
    ...blogArticles.map((article) => ({ path: `/blog/${article.slug}`, priority: 0.6, changeFrequency: "monthly" as const })),
  ];

  return locales.flatMap((locale) =>
    paths.map(({ path, priority, changeFrequency }) => ({
      url: `${baseUrl}/${locale}${path}`,
      lastModified: new Date("2026-09-18"),
      changeFrequency,
      priority,
    })),
  );
}
