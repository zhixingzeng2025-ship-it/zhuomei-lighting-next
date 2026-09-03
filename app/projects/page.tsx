import type { Metadata } from "next";
import { LocalizedPageHeader } from "@/components/LocalizedPageHeader";
import { LocalizedProjectsGrid } from "@/components/LocalizedProjectsGrid";

export const metadata: Metadata = {
  title: "项目",
  description: "查看已整理的真实户外照明项目案例，了解照明设计、产品应用和现场交付过程。",
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
          image="/images/projects/guangzhou-digital-culture-valley/web/social-cover.jpg"
        />
        <LocalizedProjectsGrid />
      </div>
    </section>
  );
}
