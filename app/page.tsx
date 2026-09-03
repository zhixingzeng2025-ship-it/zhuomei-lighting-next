import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ProductCategories } from "@/components/ProductCategories";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { HomeCompanySection } from "@/components/HomeCompanySection";
import { InquirySection } from "@/components/InquirySection";

export const metadata: Metadata = {
  title: "面向全球项目的户外照明",
  description: "面向道路、景观、建筑和工业空间的专业户外照明解决方案。",
};

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <SolutionsSection />
      <ProjectsSection />
      <HomeCompanySection />
      <InquirySection />
    </>
  );
}
