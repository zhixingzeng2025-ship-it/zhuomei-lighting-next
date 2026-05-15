import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { solutions } from "@/data/solutions";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Solutions",
};

export const dynamic = "force-static";

export default function SolutionsPage() {
  return (
    <section className="section-shell bg-gradient-to-b from-[#f6f9fd] to-[#eef4fb]">
      <div className="page-container space-y-10">
        <PageHeader
          eyebrow="Solutions"
          title="Lighting Solutions for Outdoor Projects"
          description="Use solution pages to communicate engineering context, use cases, and the value of each lighting system."
          actionHref="/contact"
          actionLabel="Discuss Solution"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution) => (
            <article
              key={solution.slug}
              id={solution.slug}
              className="group relative min-h-[320px] overflow-hidden rounded-[28px] bg-brand-navy shadow-card"
            >
              <img src={solution.image} alt={solution.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-brand-navy/88 via-brand-navy/30 to-transparent p-6 text-white">
                <span className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-[16px] border border-white/10 bg-white/15 text-white backdrop-blur-md">
                  <span className="h-2.5 w-2.5 rounded-full bg-white" />
                </span>
                <h2 className="text-[22px] leading-[1.15] tracking-tighter3 font-semibold">{solution.title}</h2>
                <p className="mt-2 text-sm leading-7 text-white/78">{solution.description}</p>
                <Link href="/contact" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white/95">
                  Explore Solution
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
