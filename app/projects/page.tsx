import type { Metadata } from "next";
import { LocalizedPageHeader } from "@/components/LocalizedPageHeader";
import { LocalizedProjectsGrid } from "@/components/LocalizedProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "See selected outdoor lighting project references from road lighting to commercial plazas and architectural facades.",
};

export const dynamic = "force-static";

export default function ProjectsPage() {
  return (
    <section className="section-shell">
      <div className="page-container space-y-10">
        <LocalizedPageHeader
          eyebrowKey="pageHeader.projectsEyebrow"
          titleKey="pageHeader.projectsTitle"
          descriptionKey="pageHeader.projectsDescription"
          actionHref="/contact"
          actionLabelKey="pageHeader.projectsAction"
        />
        <LocalizedProjectsGrid />
      </div>
    </section>
  );
}
