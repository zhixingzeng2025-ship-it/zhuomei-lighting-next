import Link from "next/link";
import { siteConfig } from "@/data/site";
import { ArrowRightIcon } from "./Icons";

export function Hero() {
  return (
    <section className="relative -mt-[92px] min-h-[100svh] overflow-hidden bg-brand-navy text-white">
      <div className="absolute inset-0 bg-hero-backdrop bg-cover bg-center" aria-hidden="true" />
      <div className="absolute inset-0 bg-hero-overlay" aria-hidden="true" />

      <div className="page-container relative flex min-h-[100svh] flex-col justify-end pb-8 pt-[92px]">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1.14fr)_360px] xl:gap-12">
          <div className="pb-2">
            <p className="eyebrow eyebrow-light">Outdoor Lighting Brand · Engineering Grade</p>
            <h1 className="max-w-[980px] text-[clamp(2.9rem,5.5vw,5.4rem)] leading-[0.96] tracking-tighter2 font-semibold">
              Professional Outdoor Lighting for Global Projects
            </h1>
            <p className="mt-5 max-w-[760px] text-[clamp(1.05rem,1.45vw,1.25rem)] leading-8 text-white/80">
              High-performance LED lighting solutions for roads, landscapes, buildings and industrial spaces.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="action-pill bg-gradient-to-r from-brand-blue to-[#77bfff] text-white shadow-[0_16px_34px_rgba(45,140,255,0.28)]">
                Explore Products
              </Link>
              <Link href="/projects" className="action-pill border border-white/15 bg-white/10 text-white backdrop-blur-xl hover:bg-white/15">
                View Projects
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {siteConfig.stats.map((item) => (
                <span
                  key={item.label}
                  className="inline-flex min-h-10 items-center rounded-full border border-white/10 bg-white/10 px-4 text-[13px] text-white/85 backdrop-blur-xl"
                >
                  <strong className="mr-2 font-semibold text-white">{item.value}</strong>
                  {item.label}
                </span>
              ))}
            </div>
          </div>

          <aside className="glass-panel rounded-[28px] p-7 shadow-glass">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">
              Built for international projects
            </p>
            <h2 className="mt-3 text-[clamp(1.5rem,2.3vw,2.15rem)] leading-[1.12] tracking-tighter3 font-semibold text-white">
              Reliable Supply. Clear Specs. Fast Response.
            </h2>
            <ul className="mt-5 grid gap-3.5 text-[15px] text-white/78">
              <li className="relative pl-6 before:absolute before:left-0 before:top-[0.62em] before:h-2.5 before:w-2.5 before:rounded-full before:bg-gradient-to-br before:from-brand-sky before:to-white">
                Road &amp; Street Lighting
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-[0.62em] before:h-2.5 before:w-2.5 before:rounded-full before:bg-gradient-to-br before:from-brand-sky before:to-white">
                Landscape &amp; Garden Lighting
              </li>
              <li className="relative pl-6 before:absolute before:left-0 before:top-[0.62em] before:h-2.5 before:w-2.5 before:rounded-full before:bg-gradient-to-br before:from-brand-sky before:to-white">
                Facade &amp; Industrial Lighting
              </li>
            </ul>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white">
              Request a tailored solution <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
