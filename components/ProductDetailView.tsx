"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import type { ProductItem } from "@/data/products";
import type { ProjectItem } from "@/data/projects";
import { ArrowRightIcon, DocIcon, FeatureIcon } from "./Icons";

type ProductDetailViewProps = {
  product: ProductItem;
  titleKey: string;
  relatedProjects: ProjectItem[];
};

const heroStats = [
  { value: "140", unit: "lm/W", label: "High Efficiency", icon: "efficiency" },
  { value: "IP66", unit: "", label: "Waterproof", icon: "waterproof" },
  { value: "IK08", unit: "", label: "Impact Resistant", icon: "impact" },
  { value: "5", unit: "Years", label: "Warranty", icon: "warranty" },
  { value: "CE", unit: "CB", label: "Certification", icon: "cert" },
];

const detailCards = [
  {
    title: "High Efficiency LEDs",
    text: "High-performance LED chips with strong luminous efficacy and low light decay.",
  },
  {
    title: "Efficient Heat Dissipation",
    text: "Fin-type heat sink design supports stable operation in demanding projects.",
  },
  {
    title: "Tool-free Maintenance",
    text: "Open housing structure helps speed up inspection, service and replacement.",
  },
  {
    title: "Professional Optics",
    text: "Multiple lens options support different road widths and mounting heights.",
  },
  {
    title: "Flexible Mounting",
    text: "Adjustable bracket options make installation easier across project sites.",
  },
];

const applications = [
  "Roads & Highways",
  "Urban Streets",
  "Residential Areas",
  "Parking Lots",
  "Industrial Areas",
  "Parks & Pathways",
];

const extendedSpecs = [
  { label: "Model No.", value: "ZM-SL-100W" },
  { label: "Power", value: "100W" },
  { label: "Luminous Flux", value: "14000lm ±5%" },
  { label: "Luminous Efficacy", value: "140lm/W" },
  { label: "LED Chip", value: "Lumileds 3030" },
  { label: "Input Voltage", value: "AC100-277V 50/60Hz" },
  { label: "Power Factor", value: ">0.95" },
  { label: "THD", value: "<10%" },
  { label: "Surge Protection", value: "10kV" },
  { label: "CCT", value: "3000K / 4000K / 5000K / 5700K" },
  { label: "CRI", value: "Ra >70" },
  { label: "Beam Angle", value: "Type II / Type III / Type IV / Type V" },
  { label: "IP Rating", value: "IP66" },
  { label: "IK Rating", value: "IK08" },
  { label: "Working Temperature", value: "-40°C ~ +50°C" },
  { label: "Housing Material", value: "Die-cast Aluminum" },
  { label: "Housing Color", value: "Dark Grey / Black" },
  { label: "Mounting", value: "Ø60mm Pole / Adjustable Arm" },
  { label: "Lifespan", value: ">100,000 hours (L70)" },
  { label: "Warranty", value: "5 Years" },
  { label: "Certification", value: "CE, CB, RoHS, LM-79, LM-80" },
  { label: "Net Weight", value: "4.3kg" },
];

function MetricIcon({ name }: { name: string }) {
  if (name === "efficiency") {
    return <FeatureIcon name="global" className="h-7 w-7" />;
  }
  if (name === "waterproof") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <path d="M12 3.5s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11Z" stroke="currentColor" strokeWidth="1.7" />
        <path d="M9 14.8c.6 1.4 1.6 2.1 3 2.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "impact") {
    return (
      <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" />
        <path d="M17 7 7 17M8.5 6.8l8.7 8.7" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "warranty") {
    return <FeatureIcon name="cert" className="h-7 w-7" />;
  }
  return <FeatureIcon name="quality" className="h-7 w-7" />;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-5 border-l-4 border-brand-blue pl-3 text-[15px] font-extrabold uppercase tracking-tight text-brand-text">
      {children}
    </h2>
  );
}

export function ProductDetailView({ product, titleKey, relatedProjects }: ProductDetailViewProps) {
  const { t } = useLanguage();
  const displayName = t(titleKey);
  const specs = product.slug === "street-light" ? extendedSpecs : [...product.specs, ...extendedSpecs.slice(12, 18)];

  return (
    <article className="bg-brand-background">
      <section className="relative overflow-hidden bg-[#050914] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(45,140,255,0.28),transparent_34%),linear-gradient(90deg,rgba(8,26,59,0.88),rgba(5,9,20,0.74)_48%,#050914_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
        <div className="page-container relative grid min-h-[620px] gap-8 py-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(420px,0.85fr)] lg:items-center lg:py-14">
          <div>
            <nav className="mb-8 flex flex-wrap items-center gap-2 text-xs font-medium text-white/70">
              <Link href="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <Link href="/products" className="hover:text-white">Products</Link>
              <span>/</span>
              <span className="text-white">{displayName}</span>
            </nav>

            <div className="grid gap-4 md:grid-cols-[72px_minmax(0,1fr)]">
              <div className="hidden gap-3 md:grid">
                {[0, 1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className={["grid aspect-square place-items-center overflow-hidden rounded-md border bg-white/5 p-2", item === 0 ? "border-brand-blue" : "border-white/15"].join(" ")}
                  >
                    <img src={product.image} alt="" className="h-full w-full rounded object-cover" />
                  </div>
                ))}
              </div>

              <div className="relative min-h-[360px] overflow-hidden rounded-md border border-white/10 bg-[#081225]">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,26,59,0.05),rgba(5,9,20,0.74)),repeating-linear-gradient(90deg,rgba(255,255,255,0.06)_0_1px,transparent_1px_120px)]" />
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.08))]" />
                <div className="absolute bottom-16 left-6 right-6 h-px bg-white/20" />
                <img
                  src={product.image}
                  alt={displayName}
                  className="relative z-10 h-full min-h-[360px] w-full scale-105 object-contain p-8 drop-shadow-[0_28px_45px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          </div>

          <div className="pb-6 lg:pb-0">
            <p className="mb-3 text-[13px] font-bold uppercase tracking-[0.18em] text-brand-sky">
              LED Outdoor Lighting
            </p>
            <h1 className="text-[clamp(2.6rem,5vw,4.9rem)] font-extrabold leading-[0.95] tracking-tight text-white">
              {displayName}
            </h1>
            <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/78 sm:text-base">
              {product.overview}
            </p>

            <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {heroStats.map((stat) => (
                <div key={stat.label} className="grid min-h-[108px] place-items-center rounded-md border border-white/20 bg-white/[0.04] p-3 text-center">
                  <div className="text-white/86">
                    <MetricIcon name={stat.icon} />
                  </div>
                  <div>
                    <div className="text-[25px] font-extrabold leading-none">{stat.value}</div>
                    {stat.unit ? <div className="mt-1 text-[12px] font-semibold text-white/90">{stat.unit}</div> : null}
                    <div className="mt-2 text-[10px] leading-4 text-white/64">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-brand-blue px-6 text-[13px] font-extrabold uppercase tracking-tight text-white shadow-[0_18px_36px_rgba(45,140,255,0.28)]"
              >
                Download Datasheet
                <DocIcon className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-md border border-white/24 px-6 text-[13px] font-extrabold uppercase tracking-tight text-white hover:bg-white/10"
              >
                IES Files
                <DocIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="page-container py-8 lg:py-10">
        <div className="grid gap-8 border-b border-brand-line pb-8 lg:grid-cols-[1fr_1.08fr_0.72fr]">
          <div>
            <SectionLabel>{t("detail.keyFeatures")}</SectionLabel>
            <ul className="space-y-2 text-sm leading-6 text-brand-text">
              {product.features.concat([
                "Built-in surge protection",
                "Multiple lens options for various applications",
                "Excellent thermal management",
                "IP66 waterproof, IK08 impact resistance",
                "5 years warranty",
              ]).slice(0, 8).map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-[0.65em] h-1.5 w-1.5 flex-none rounded-full bg-brand-blue" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-5 text-2xl font-extrabold tracking-tight text-brand-muted">
              <span>CE</span>
              <span>CB</span>
              <span>RoHS</span>
            </div>
          </div>

          <div className="grid content-center gap-6">
            <div className="relative mx-auto w-full max-w-[560px]">
              <div className="mb-2 flex items-center gap-3 text-[12px] font-semibold text-brand-muted">
                <span className="h-px flex-1 bg-brand-muted/50" />
                <span>506mm</span>
                <span className="h-px flex-1 bg-brand-muted/50" />
              </div>
              <div className="rounded-md border border-brand-line bg-white p-6 shadow-soft">
                <img src={product.image} alt="" className="mx-auto aspect-[16/7] w-full object-contain" />
              </div>
              <div className="mt-2 text-center text-[12px] font-semibold text-brand-muted">230mm</div>
            </div>
            <div className="mx-auto w-full max-w-[560px] rounded-md border border-brand-line bg-white px-5 py-4 shadow-soft">
              <img src={product.image} alt="" className="mx-auto h-16 w-full object-cover object-bottom opacity-80" />
              <div className="mt-2 text-right text-[12px] font-semibold text-brand-muted">86mm</div>
            </div>
          </div>

          <div>
            <SectionLabel>{t("detail.applications")}</SectionLabel>
            <div className="grid gap-4">
              {applications.map((item, index) => (
                <div key={item} className="flex items-center gap-4 text-sm font-semibold text-brand-text">
                  <span className="grid h-9 w-9 flex-none place-items-center rounded-md border border-brand-line bg-white text-brand-deep">
                    {index + 1}
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 border-b border-brand-line py-8 lg:grid-cols-[1fr_0.48fr]">
          <div>
            <SectionLabel>{t("detail.specifications")}</SectionLabel>
            <div className="grid gap-x-8 md:grid-cols-2">
              {specs.slice(0, 22).map((row) => (
                <div key={`${row.label}-${row.value}`} className="grid grid-cols-[minmax(120px,0.72fr)_1fr] border-b border-brand-line py-2 text-[13px]">
                  <span className="font-bold text-brand-text">{row.label}</span>
                  <span className="text-brand-muted">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[260px] overflow-hidden rounded-md bg-white shadow-soft">
            <img src={product.image} alt="" className="h-full min-h-[260px] w-full scale-125 object-contain p-8 opacity-95" />
          </div>
        </div>

        <div className="grid gap-5 border-b border-brand-line py-8 sm:grid-cols-2 lg:grid-cols-5">
          {detailCards.map((card, index) => (
            <article key={card.title} className="overflow-hidden rounded-md border border-brand-line bg-white shadow-soft">
              <div className="aspect-[4/2.4] bg-[#eef4fb] p-4">
                <img src={product.image} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-[13px] font-extrabold uppercase tracking-tight text-brand-text">{card.title}</h3>
                <p className="mt-2 text-[12px] leading-5 text-brand-muted">{card.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="py-8">
          <SectionLabel>Related Projects</SectionLabel>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedProjects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group block overflow-hidden rounded-md bg-white shadow-soft">
                <div className="aspect-[16/9] overflow-hidden bg-[#eef4fb]">
                  <img src={project.image} alt={project.name} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-brand-text">{project.name}</h3>
                  <p className="mt-1 text-[13px] text-brand-muted">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#050914] py-8 text-white">
        <div className="page-container grid gap-6 lg:grid-cols-[1fr_1.8fr] lg:items-center">
          <div>
            <h2 className="text-[24px] font-extrabold uppercase tracking-tight">Need a Custom Solution?</h2>
            <p className="mt-2 text-sm text-white/70">We provide professional lighting solutions for your projects.</p>
            <Link href="/contact" className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-md bg-brand-blue px-5 text-sm font-extrabold uppercase text-white">
              Contact Us
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["team", "Professional Team", "Project-ready lighting support"],
              ["quality", "Quality Assurance", "Strict quality control system"],
              ["delivery", "On-time Delivery", "Reliable production and fast delivery"],
              ["warranty", "After-sales Support", "5 years warranty and technical support"],
            ].map(([icon, title, text]) => (
              <div key={title} className="flex items-start gap-3">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-full border border-white/25 text-brand-sky">
                  <FeatureIcon name={icon} className="h-5 w-5" />
                </span>
                <span>
                  <strong className="text-sm">{title}</strong>
                  <span className="mt-1 block text-[12px] leading-5 text-white/64">{text}</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
