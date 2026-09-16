import type { Metadata } from "next";
import { LocalizedPageHeader } from "@/components/LocalizedPageHeader";
import { LocalizedSolutionsGrid } from "@/components/LocalizedSolutionsGrid";

export const metadata: Metadata = {
  title: "解决方案",
  description: "探索道路基础设施、太阳能、景观、立面、工业与公共空间照明方案。",
};

export const dynamic = "force-static";

export default function SolutionsPage() {
  return (
    <section className="bg-gradient-to-b from-[#f6f9fd] to-[#eef4fb] py-14">
      <div className="page-container space-y-10">
        <LocalizedPageHeader
          eyebrowKey="pageHeader.solutionsEyebrow"
          titleKey="pageHeader.solutionsTitle"
          descriptionKey="pageHeader.solutionsDescription"
          actionHref="/contact"
          actionLabelKey="pageHeader.solutionsAction"
          image="https://img.zomeiled.com/images/solutions/solutions-hero-city-night.jpg"
        />
        <LocalizedSolutionsGrid />
      </div>
    </section>
  );
}
