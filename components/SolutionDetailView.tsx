"use client";

import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";
import { useLanguage } from "@/context/LanguageContext";
import type { SolutionItem } from "@/data/solutions";

const sectionClass = "py-12 sm:py-16 lg:py-20";
const containerClass = "mx-auto w-[min(100%-1.5rem,80rem)] sm:w-[min(100%-2rem,80rem)]";

type SolutionDetailViewProps = {
  solution: SolutionItem;
  titleKey: string;
};

function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      <p className={`mb-3 text-[11px] font-bold uppercase tracking-[0.22em] ${light ? "text-brand-yellow" : "text-brand-blue"}`}>
        {eyebrow}
      </p>
      <h2 className={`text-[clamp(1.9rem,3.35vw,3rem)] font-semibold leading-[1.05] tracking-tight text-balance ${light ? "text-white" : "text-brand-text"}`}>
        {title}
      </h2>
      {description ? <p className={`mt-5 text-base leading-8 ${light ? "text-white/70" : "text-brand-muted"}`}>{description}</p> : null}
    </div>
  );
}

function NumberedCard({ number, title, text, dark = false }: { number: string; title: string; text: string; dark?: boolean }) {
  return (
    <article className={`flex h-full flex-col border p-6 ${dark ? "border-white/12 bg-white/5 text-white" : "border-brand-line bg-white text-brand-text shadow-sm"}`}>
      <p className={`text-[12px] font-bold tracking-[0.18em] ${dark ? "text-brand-yellow" : "text-brand-blue"}`}>{number}</p>
      <h3 className={`mt-4 text-xl font-semibold leading-tight ${dark ? "text-white" : "text-brand-text"}`}>{title}</h3>
      <p className={`mt-4 text-sm leading-7 ${dark ? "text-white/70" : "text-brand-muted"}`}>{text}</p>
    </article>
  );
}

function ImagePanel({ src, alt, caption }: { src: string; alt: string; caption: string }) {
  return (
    <figure className="overflow-hidden border border-brand-line bg-white shadow-sm">
      <div className="aspect-[16/10] bg-[#eef4fb]">
        <img src={src} alt={alt} className="h-full w-full object-cover" />
      </div>
      <figcaption className="p-5 text-sm leading-7 text-brand-muted">{caption}</figcaption>
    </figure>
  );
}

export function SolutionDetailView({ solution, titleKey }: SolutionDetailViewProps) {
  const { t } = useLanguage();
  const title = t(titleKey) as string;
  const facts = [
    ["方案类型", title],
    ["应用场景", `${solution.applications.length} 类`],
    ["推荐组合", `${solution.recommendedProducts.length} 类产品`],
    ["交付支持", "选型 / 资料 / 调试"],
  ];
  const tags = [solution.applications[0], solution.applications[1], solution.recommendedProducts[0], "工程深化"].filter(Boolean);

  return (
    <>
      <section className="bg-white">
        <div className="relative aspect-[21/8] min-h-[240px] w-full overflow-hidden bg-black">
          <img src={solution.image} alt={title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061229]/75 via-[#061229]/18 to-transparent" />
          <Link href="/solutions" className="absolute left-4 top-4 inline-flex min-h-10 items-center gap-2 bg-white/92 px-4 py-2 text-sm font-bold text-brand-text backdrop-blur sm:left-8 sm:top-8">
            <ArrowRightIcon className="h-4 w-4 rotate-180" />
            {t("common.backToSolutions")}
          </Link>
        </div>
        <div className="bg-[#071b33] text-white">
          <div className={`${containerClass} py-8 sm:py-10 lg:py-12`}>
            <div className="max-w-6xl">
              <div className="mb-5 flex flex-wrap gap-3">
                {tags.map((tag) => (
                  <span key={tag} className="border border-white/18 bg-white/8 px-4 py-2 text-[12px] font-bold tracking-[0.12em] text-white/90">
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="max-w-5xl text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-[0.98] tracking-tight text-white">{title}</h1>
              <p className="mt-5 max-w-4xl text-[clamp(1.05rem,2vw,1.55rem)] font-semibold leading-tight text-white/72">{solution.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-white`}>
        <div className={containerClass}>
          <SectionTitle eyebrow="Solution Summary" title="方案概览" description={solution.overview} />
          <dl className="mt-10 grid gap-px overflow-hidden border border-brand-line bg-brand-line md:grid-cols-2 lg:grid-cols-4">
            {facts.map(([label, value]) => (
              <div key={label} className="bg-white p-6">
                <dt className="text-[12px] font-bold uppercase tracking-[0.16em] text-brand-blue">{label}</dt>
                <dd className="mt-3 text-[18px] font-semibold leading-snug text-brand-text">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#f5f7fa]`}>
        <div className={`${containerClass} grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch`}>
          <div>
            <SectionTitle
              eyebrow="Planning Logic"
              title="先判断项目条件，再进入灯具选型"
              description="解决方案页不只展示适用场景，更要说明项目为什么这样配置。ZOMEI 会把场地尺度、安装界面、光学目标、控制方式和维护条件放在同一套判断里，帮助客户更快形成可报价、可施工、可验收的方案方向。"
            />
            <div className="mt-7 space-y-5 text-base leading-8 text-brand-muted">
              {solution.designFocus.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
          <div className="grid h-full gap-5 sm:grid-cols-2">
            <ImagePanel src={solution.image} alt={title} caption="方案图片用于表达主要应用场景，后续可替换为真实项目现场或深化效果图。" />
            <div className="grid gap-5">
              {solution.applications.slice(0, 3).map((item, index) => (
                <NumberedCard key={item} number={String(index + 1).padStart(2, "0")} title={item} text={`适合在${item}中结合现场安装条件、目标亮度、视觉舒适度和维护方式进行深化配置。`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#071b33] text-white`}>
        <div className={containerClass}>
          <SectionTitle
            eyebrow="Product & Control"
            title="用产品组合，而不是单一灯具，完成完整照明效果"
            description="同一个项目通常需要功能照明、重点照明、氛围照明和控制系统协同工作。推荐产品组合会根据场地条件继续细化到功率、光束角、色温、控制协议、防护等级和安装附件。"
            light
          />
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solution.recommendedProducts.map((item, index) => (
              <NumberedCard
                key={item}
                number={String(index + 1).padStart(2, "0")}
                title={item}
                text="可根据项目尺寸、安装位置、目标照度和控制需求进一步匹配具体型号、功率、光学角度和结构附件。"
                dark
              />
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-white`}>
        <div className={`${containerClass} grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-start`}>
          <div className="border border-brand-line bg-[#f8fbff] p-7 sm:p-8">
            <SectionTitle
              eyebrow="Engineering Support"
              title="让方案更容易进入报价、深化和落地"
              description="客户沟通解决方案时，最需要的不只是几张产品图，而是能够支撑判断的项目资料。ZOMEI 可以围绕应用场景提供选型、规格、控制和交付相关支持。"
            />
            <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center gap-3 bg-brand-blue px-6 py-3 text-sm font-bold text-white">
              获取定制方案 <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-px overflow-hidden border border-brand-line bg-brand-line sm:grid-cols-2">
            {solution.deliverables.map((item, index) => (
              <article key={item} className="bg-white p-6">
                <p className="text-[12px] font-bold tracking-[0.18em] text-brand-blue">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-xl font-semibold leading-tight text-brand-text">{item}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-muted">用于前期沟通、工程报审、产品报价、现场安装或后续维护，让方案从概念更顺畅地进入项目执行。</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#f5f7fa]`}>
        <div className={containerClass}>
          <SectionTitle eyebrow="Key Features" title="核心特点" description="这些要点会随项目条件继续细化，最终形成更贴合现场的灯具配置、安装方式和控制策略。" />
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {solution.highlights.map((item, index) => (
              <NumberedCard key={item} number={String(index + 1).padStart(2, "0")} title={index === 0 ? "方案重点" : `方案细节 ${index + 1}`} text={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
