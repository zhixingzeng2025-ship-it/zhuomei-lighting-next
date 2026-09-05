import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ProductCategories } from "@/components/ProductCategories";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { HomeCompanySection } from "@/components/HomeCompanySection";
import { InquirySection } from "@/components/InquirySection";

export const metadata: Metadata = {
  title: "Architectural & Outdoor Lighting for Real Projects",
  description:
    "ZOMEI Lighting supplies outdoor LED lighting products, facade lighting solutions, custom manufacturing and project delivery support for global engineering buyers.",
};

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <ProjectsSection />
      <SolutionsSection />
      <HomeCompanySection />
      <InquirySection />
    </>
  );
}
