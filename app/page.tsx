import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ProductCategories } from "@/components/ProductCategories";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { InquirySection } from "@/components/InquirySection";

export const metadata: Metadata = {
  title: "Outdoor Lighting for Global Projects",
  description:
    "Professional outdoor lighting solutions for roads, landscapes, buildings and industrial spaces.",
};

export const dynamic = "force-static";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductCategories />
      <SolutionsSection />
      <ProjectsSection />
      <WhyChooseUs />
      <InquirySection />
    </>
  );
}
