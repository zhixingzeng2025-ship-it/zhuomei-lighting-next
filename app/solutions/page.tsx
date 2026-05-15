import type { Metadata } from "next";
import { LocalizedPageHeader } from "@/components/LocalizedPageHeader";
import { LocalizedSolutionsGrid } from "@/components/LocalizedSolutionsGrid";

export const metadata: Metadata = {
  title: "Solutions",
};

export const dynamic = "force-static";

export default function SolutionsPage() {
  return (
    <section className="section-shell bg-gradient-to-b from-[#f6f9fd] to-[#eef4fb]">
      <div className="page-container space-y-10">
        <LocalizedPageHeader
          eyebrowKey="pageHeader.solutionsEyebrow"
          titleKey="pageHeader.solutionsTitle"
          descriptionKey="pageHeader.solutionsDescription"
          actionHref="/contact"
          actionLabelKey="pageHeader.solutionsAction"
        />
        <LocalizedSolutionsGrid />
      </div>
    </section>
  );
}
