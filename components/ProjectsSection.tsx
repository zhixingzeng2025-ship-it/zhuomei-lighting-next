import Link from "next/link";
import { projects } from "@/data/projects";
import { ArrowRightIcon } from "./Icons";

export function ProjectsSection() {
  return (
    <section className="section-shell bg-gradient-to-b from-[#f6f9fd] to-[#eef4fb]" id="projects">
      <div className="page-container">
        <div className="section-title">
          <p className="eyebrow">Projects</p>
          <h2>Inspiring Outdoor Lighting Projects Worldwide</h2>
          <p>
            Use this section to show project credibility, application context, and the visual value of the brand.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projects.map((project) => (
            <article key={project.slug} className="soft-card">
              <div className="relative aspect-[4/3] overflow-hidden bg-[#eef4fb]">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
                />
              </div>
              <div className="grid gap-3 p-6">
                <h3 className="text-[22px] leading-[1.15] tracking-tighter3 font-semibold text-brand-text">
                  {project.name}
                </h3>
                <div className="grid gap-1 text-sm text-brand-muted">
                  <span>
                    <strong className="text-brand-text">Location:</strong> {project.location}
                  </span>
                  <span>
                    <strong className="text-brand-text">Used Products:</strong> {project.products}
                  </span>
                </div>
                <Link href="/projects" className="action-pill w-fit border border-brand-blue/15 bg-brand-blue/8 text-brand-deep hover:bg-brand-blue/12">
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
