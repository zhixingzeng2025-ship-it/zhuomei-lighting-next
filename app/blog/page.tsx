import type { Metadata } from "next";
import { Suspense } from "react";
import { BlogPageContent } from "@/components/blog/BlogPageContent";

export const metadata: Metadata = {
  title: "照明知识",
  description: "ZOMEI 照明知识、产品指南、项目洞察和户外照明行业资料。",
};

export const dynamic = "force-static";

export default function BlogPage() {
  return <Suspense fallback={null}><BlogPageContent /></Suspense>;
}
