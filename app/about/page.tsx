import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { whyChooseUs } from "@/data/site";
import { FeatureIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About Us",
};

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <section className="section-shell bg-gradient-to-b from-white to-[#eef4fb]">
      <div className="page-container space-y-10">
        <PageHeader
          eyebrow="About Us"
          title="A Lighting Brand Built for Project Workflows"
          description="This page can later expand into factory, certifications, team and manufacturing capability sections."
          actionHref="/contact"
          actionLabel="Talk to Us"
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {whyChooseUs.slice(0, 4).map((item) => (
            <article key={item.title} className="soft-card p-6">
              <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-[16px] bg-brand-background text-brand-deep">
                <FeatureIcon name={item.icon} />
              </span>
              <h2 className="text-[20px] leading-[1.2] tracking-tighter3 font-semibold text-brand-text">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-brand-muted">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="soft-card p-6 sm:p-8">
            <p className="eyebrow">Brand Story</p>
            <h2 className="text-[clamp(1.9rem,3vw,3rem)] leading-[1.05] tracking-tighter2 font-semibold text-brand-text">
              Professional outdoor lighting, designed for global project buyers.
            </h2>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-brand-muted sm:text-base">
              Replace this section later with your brand story, manufacturing capabilities, quality system and
              international certifications.
            </p>
          </article>

          <article className="soft-card overflow-hidden">
            <img
              src="/images/hero.svg"
              alt="ZHUOMEI LIGHTING brand visual"
              className="h-full w-full object-cover"
            />
          </article>
        </div>
      </div>
    </section>
  );
}
