import type { Metadata } from "next";
import { LocalizedPageHeader } from "@/components/LocalizedPageHeader";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "About Us",
};

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <section className="section-shell bg-gradient-to-b from-white to-[#eef4fb]">
      <div className="page-container space-y-10">
        <LocalizedPageHeader
          eyebrowKey="pageHeader.aboutEyebrow"
          titleKey="pageHeader.aboutTitle"
          descriptionKey="pageHeader.aboutDescription"
          actionHref="/contact"
          actionLabelKey="pageHeader.aboutAction"
        />

        <AboutContent />
      </div>
    </section>
  );
}
