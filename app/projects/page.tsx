import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { projects } from "@/data/projects";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Projects",
};

export const dynamic = "force-static";

export default function ProjectsPage() {
  return (
    <section className="section-shell">
      <div className="page-container space-y-10">
        <PageHeader
          eyebrow="Projects"
          title="Inspiring Outdoor Lighting Projects"
          description="Project pages should make credibility clear fast: location, application, and product fit."
          actionHref="/contact"
          actionLabel="Share Project"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <article key={project.slug} className="soft-card">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#eef4fb]">
                <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
              </div>
              <div className="grid gap-3 p-6">
                <h2 className="text-[22px] leading-[1.15] tracking-tighter3 font-semibold text-brand-text">
                  {project.name}
                </h2>
                <div className="grid gap-1 text-sm text-brand-muted">
                  <span>
                    <strong className="text-brand-text">Location:</strong> {project.location}
                  </span>
                  <span>
                    <strong className="text-brand-text">Used Products:</strong> {project.products}
                  </span>
                </div>
                <Link href="/contact" className="action-pill w-fit border border-brand-blue/15 bg-brand-blue/8 text-brand-deep hover:bg-brand-blue/12">
                  View Case
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
