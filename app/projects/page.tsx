import type { Metadata } from "next";
import { Suspense } from "react";
import { LocalizedPageHeader } from "@/components/LocalizedPageHeader";
import { LocalizedProjectsGrid } from "@/components/LocalizedProjectsGrid";

export const metadata: Metadata = {
  title: "Outdoor Lighting Project Cases",
  description:
    "View real ZOMEI outdoor lighting project cases with final effect, application scene, products used, technical challenges and delivery support.",
};

export const dynamic = "force-static";

export default function ProjectsPage() {
  return (
    <section className="py-14">
      <div className="page-container space-y-10">
        <LocalizedPageHeader
          eyebrowKey="pageHeader.projectsEyebrow"
          titleKey="pageHeader.projectsTitle"
          descriptionKey="pageHeader.projectsDescription"
          actionHref="/contact"
          actionLabelKey="pageHeader.projectsAction"
          image="https://img.zomeiled.com/images/projects/guangzhou-digital-culture-valley/web/social-cover.jpg"
        />
        <Suspense fallback={null}><LocalizedProjectsGrid /></Suspense>
      </div>
    </section>
  );
}
