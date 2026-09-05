"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { almatyMuseumProject } from "@/data/projects/almaty-museum";
import { getAlmatyImage, type ProjectImageRecord } from "@/data/projects/almaty-museum-images";
import { ArrowRightIcon } from "@/components/Icons";
import { ProjectImagePlaceholder } from "./ProjectImagePlaceholder";

type EventPayload = Record<string, string | number | boolean | undefined>;

function trackEvent(name: string, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("zomei_project_event", { detail: { name, payload } }));
}

const zhTags = ["哈萨克斯坦", "艺术博物馆", "1150W LED 切割投影", "深化设计到现场调试"];
const zhLabels = ["文化地标", "建筑艺术表达", "中亚项目创新"];
const zhDesignFlow = ["建筑分析", "视觉节奏", "图案构图", "灯位定位", "投影拼接", "最终灯光场景"];
const zhCollaborationValues = ["资料清晰", "快速技术响应", "现场问题处理", "共同交付目标"];
const zhComparisonText: Record<string, { feature: string; limitation: string }> = {
  "洗墙灯": {
    feature: "形成均匀立面亮化",
    limitation: "适用于建筑轮廓与材质表现，但难以承载复杂图案内容。",
  },
  "泛光灯": {
    feature: "提供基础环境照明",
    limitation: "增强整体亮度与空间层次，图案表现和视觉叙事能力有限。",
  },
  "精准 LED 切割灯": {
    feature: "实现高精度图案投影",
    limitation: "图案清晰、边界锐利，支持静态与动态场景切换。",
  },
};
const zhTimelineText: Record<string, { title: string; text: string }> = {
  "Design Development": { title: "深化设计", text: "从建筑图纸转化为可施工的投影分区。" },
  "Fixture Layout": { title: "灯位布置", text: "协调灯具位置、投射范围和安装条件。" },
  "Installation": { title: "现场安装", text: "与当地团队确认支架、线路和实际安装条件。" },
  "Initial Focusing": { title: "初步调焦", text: "首次亮灯确认投射方向、焦距和画面边界。" },
  "Pattern Stitching": { title: "图案拼接", text: "对相邻画面进行对位、边界修正和亮度匹配。" },
  "Dynamic Programming": { title: "动态编程", text: "完成静态图案与动态场景的程序测试。" },
  "Final Commissioning": { title: "最终调试", text: "在夜间环境中复核并确认最终灯光效果。" },
  "System Topology": { title: "系统拓扑", text: "梳理控制系统、信号链路与灯具分区关系，确保动态场景稳定运行。" },
};
const zhResourceText: Record<string, { title: string; version: string }> = {
  "Download Project Overview": { title: "下载项目概览", version: "整理中" },
  "Download Product Datasheet": { title: "下载产品资料", version: "整理中" },
  "Request Technical Drawing": { title: "申请技术图纸", version: "需提交项目需求" },
  "Watch Project Video": { title: "观看项目视频", version: "整理中" },
};
const zhResourceTypes: Record<string, string> = {
  pdf: "PDF",
  datasheet: "产品资料",
  cad: "技术图纸",
  video: "视频",
};
const zhFaq = [
  ["什么是 LED 切割投影灯？", "LED 切割投影灯是一类通过光学系统和图案片，将清晰图案、纹理或可控光形投射到建筑表面的专业灯具。"],
  ["为什么这个项目选择投影照明？", "项目目标不只是照亮建筑，而是在大面积外立面上形成可控的艺术图案和夜间识别度。相比传统洗墙，精准投影能提供更清晰的边界和更丰富的视觉表达。"],
  ["多台灯具如何完成大面积图案拼接？", "整体画面会被拆分成多个投射区域，每台灯具负责一个区域，并根据距离、角度和现场偏差进行校正，最后在夜间调试中完成亮度、焦点和边界对接。"],
  ["系统可以同时支持白光、静态图案和动态效果吗？", "可以。方案可根据项目需求设置白光模式、静态图案模式和动态视觉模式，最终效果由控制程序、图案内容和现场调试共同决定。"],
  ["为什么必须进行现场夜间调试？", "建筑材料、环境光和安装误差都会影响投影画面。夜间调试可以在真实观看条件下修正焦点、边界、亮度和拼接效果。"],
  ["每台灯具的 6 种场景切换有什么作用？", "每台灯具可配置多组图案或场景内容，便于在不同活动、节日或运营阶段切换画面，让建筑夜景保持可更新的表达能力。"],
  ["这种方案适合哪些项目？", "适合酒店、商业综合体、文化地标、展馆、城市更新和文旅夜游等项目，尤其适合需要夜间识别度、艺术表达和动态场景的建筑立面。"],
  ["图案内容是否可以按建筑主题定制？", "可以。图案可围绕建筑文化、品牌视觉、节日主题或艺术内容进行定制，并在深化阶段根据投射比例和材料反射特性进行调整。"],
  ["评估类似项目需要提供哪些资料？", "建议提供建筑图纸、立面尺寸、安装位置、观看距离、目标效果、控制需求和项目时间计划，便于进行初步技术判断。"],
];

const sectionClass = "py-12 sm:py-16 lg:py-20";
const containerClass = "mx-auto w-[min(100%-1.5rem,80rem)] sm:w-[min(100%-2rem,80rem)]";

function SectionTitle({
  eyebrow,
  title,
  titleZh,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  titleZh?: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className={`mb-3 text-[11px] font-bold uppercase tracking-[0.22em] ${light ? "text-brand-yellow" : "text-brand-blue"}`}>{eyebrow}</p> : null}
      <h2 className={`text-[clamp(1.9rem,3.35vw,3rem)] font-semibold leading-[1.05] tracking-tight text-balance ${light ? "text-white" : "text-brand-text"}`}>{title}</h2>
      {titleZh ? <p className={`mt-3 text-[20px] font-semibold ${light ? "text-white/76" : "text-[#344054]"}`}>{titleZh}</p> : null}
      {description ? <p className={`mt-5 text-base leading-8 ${light ? "text-white/68" : "text-brand-muted"}`}>{description}</p> : null}
    </div>
  );
}

function ImageTile({
  image,
  onOpen,
  className = "",
  aspectClassName,
  imageFit = "cover",
}: {
  image: ProjectImageRecord;
  onOpen: (image: ProjectImageRecord) => void;
  className?: string;
  aspectClassName?: string;
  imageFit?: "cover" | "contain";
}) {
  return <ProjectImagePlaceholder {...image} className={className} aspectClassName={aspectClassName} imageFit={imageFit} onClick={() => onOpen(image)} />;
}

function Lightbox({ image, onClose }: { image?: ProjectImageRecord; onClose: () => void }) {
  if (!image) return null;
  return (
    <div
      className="fixed inset-0 z-[90] grid place-items-center bg-[#020817]/88 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white" onClick={onClose}>
        关闭
      </button>
      {image.src ? (
        <div onClick={(event) => event.stopPropagation()}>
          <Image
            src={image.src}
            alt={image.alt}
            width={1800}
            height={1200}
            sizes="94vw"
            className="block h-auto max-h-[92vh] w-auto max-w-[94vw] rounded-[16px] object-contain shadow-2xl"
          />
        </div>
      ) : (
        <div className="w-[min(94vw,1320px)]" onClick={(event) => event.stopPropagation()}>
          <ProjectImagePlaceholder {...image} className="shadow-2xl" />
        </div>
      )}
    </div>
  );
}

function ProjectHero({ onOpen }: { onOpen: (image: ProjectImageRecord) => void }) {
  const hero = getAlmatyImage("P01");
  return (
    <section className="bg-[#071b33] text-white">
      <button
        type="button"
        onClick={() => onOpen(hero)}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-black text-left"
        aria-label={`查看${hero.title}`}
      >
        {hero.src ? (
          <Image
            src={hero.src}
            alt={hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        ) : (
          <ProjectImagePlaceholder {...hero} priority className="h-full rounded-none border-0" />
        )}
      </button>
      <div className={`${containerClass} py-8 sm:py-10 lg:py-12`}>
        <div className="max-w-6xl">
          <div className="mb-5 flex flex-wrap gap-3">
            {zhTags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/20 bg-white/8 px-4 py-2 text-[12px] font-bold uppercase tracking-[0.12em] text-white/88">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-[clamp(2.55rem,5.6vw,5rem)] font-semibold leading-[0.98] tracking-tight">
            {almatyMuseumProject.titleZh}
          </h1>
          <p className="mt-5 max-w-5xl text-[clamp(1.1rem,2vw,1.65rem)] font-semibold leading-tight text-white/88">
            {almatyMuseumProject.subtitleZh}
          </p>
          <a href="#project-glance" className="mt-7 inline-flex min-h-12 items-center gap-3 bg-brand-blue px-6 py-3 text-sm font-bold text-white shadow-card">
            查看项目详情 <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function ProjectOverview() {
  return (
    <section id="project-glance" className={`${sectionClass} bg-white`}>
      <div className={containerClass}>
        <SectionTitle  title="项目概览" />
        <dl className="mt-10 grid gap-px overflow-hidden rounded-[22px] border border-brand-line bg-brand-line md:grid-cols-2 lg:grid-cols-4">
          {almatyMuseumProject.facts.map((fact) => (
            <div key={fact.label} className="bg-white p-6">
              <dt className="text-[12px] font-bold uppercase tracking-[0.16em] text-brand-blue">{fact.labelZh}</dt>
              <dd className="mt-3 text-[18px] font-semibold leading-snug text-brand-text">{fact.valueZh || fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function ProjectTrustPath() {
  const items = [
    ["最终效果", "博物馆外立面形成清晰的夜间艺术图案与动态识别。"],
    ["项目背景", "中亚文化地标，需要兼顾建筑表达、远距离观看和运营场景。"],
    ["使用产品", "1150W LED 切割投影灯，配合定制图案与控制系统。"],
    ["技术难点", "大面积投影拼接、亮度一致、边界控制和现场安装偏差。"],
    ["解决方式", "图案分区、灯位深化、编号管理、夜间逐台调焦与联调。"],
    ["交付结果", "完成静态图案、动态场景和最终夜景验收支持。"],
  ];

  return (
    <section className={`${sectionClass} bg-white`}>
      <div className={containerClass}>
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <SectionTitle
            title="先看这个项目是否匹配你的需求"
            description="项目页先呈现客户最关心的判断点：最终效果、产品选择、技术难点和交付方式。"
          />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/contact" className="inline-flex min-h-12 items-center gap-3 bg-brand-blue px-5 py-3 text-sm font-bold text-white">
              获取类似项目方案 <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <a href="#project-glance" className="inline-flex min-h-12 items-center border border-brand-line px-5 py-3 text-sm font-bold text-brand-text">
              查看项目概览
            </a>
          </div>
        </div>
        <div className="mt-8 grid overflow-hidden border border-brand-line bg-brand-line sm:grid-cols-2 lg:grid-cols-3">
          {items.map(([title, text], index) => (
            <article key={title} className="bg-[#f8fbff] p-5 sm:p-6">
              <p className="text-[12px] font-bold tracking-[0.18em] text-brand-blue">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-3 text-xl font-semibold leading-tight text-brand-text">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Significance({ onOpen }: { onOpen: (image: ProjectImageRecord) => void }) {
  const image = getAlmatyImage("P02");
  return (
    <section className={`${sectionClass} bg-[#f5f7fa]`}>
      <div className={`${containerClass} grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch`}>
        <div className="flex h-full flex-col justify-center">
          <SectionTitle title={almatyMuseumProject.significance.titleZh} />
          <div className="mt-6 space-y-5 text-[16px] leading-8 text-brand-muted">
            <p>{almatyMuseumProject.significance.bodyZh}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {zhLabels.map((label) => (
              <span key={label} className="rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-bold text-brand-text">
                {label}
              </span>
            ))}
          </div>
        </div>
        <ImageTile image={image} onOpen={onOpen} imageFit="cover" aspectClassName="aspect-[14/9]" className="self-center bg-transparent" />
      </div>
    </section>
  );
}

function Highlights() {
  return (
    <section className={`${sectionClass} bg-[#071b33] text-white`}>
      <div className={containerClass}>
        <SectionTitle title="项目核心亮点" light />
        <div className="mt-10 grid gap-px overflow-hidden rounded-[22px] border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-5">
          {almatyMuseumProject.highlights.map((item) => (
            <article key={item.title} className="bg-white/5 p-5 backdrop-blur md:p-6">
              <p className="min-h-[4.5rem] text-[clamp(1.8rem,3vw,2.7rem)] font-extrabold leading-tight tracking-tight text-brand-yellow">{item.value}</p>
              <h3 className="mt-4 text-[16px] font-semibold leading-7 text-white/90">{item.titleZh}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BeforeAfter({ onOpen }: { onOpen: (image: ProjectImageRecord) => void }) {
  return (
    <section className={`${sectionClass} bg-white`}>
      <div className={containerClass}>
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <SectionTitle title="从建筑立面到夜间艺术" />
          <p className="text-base leading-8 text-brand-muted">
            白天，建筑通过体块关系和材料质感形成清晰的空间识别；夜晚，经过精准拼接的光影图案让建筑拥有节奏、动势和公共文化记忆。
          </p>
        </div>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {["P03", "P04"].map((code) => (
            <ImageTile key={code} image={getAlmatyImage(code)} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LightingMethodComparison({ onOpen }: { onOpen: (image: ProjectImageRecord) => void }) {
  return (
    <section className={`${sectionClass} bg-[#f5f7fa]`}>
      <div className={containerClass}>
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
          <div className="flex h-full flex-col justify-center">
            <SectionTitle
              title="为什么选择图案投影？"
              description="项目目标不只是照亮建筑，而是把建筑外立面转化为可控制、可表达的夜间艺术界面。"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {almatyMuseumProject.comparison.map((item, index) => (
                <article key={item.name} className={`rounded-[20px] border p-6 ${item.selected ? "border-brand-blue bg-[#071b33] text-white" : "border-brand-line bg-white"}`}>
                  <p className={`text-[12px] font-bold tracking-[0.18em] ${item.selected ? "text-brand-yellow" : "text-brand-blue"}`}>{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-xl font-semibold">{item.nameZh}</h3>
                  <p className="mt-5 text-sm font-bold">{zhComparisonText[item.nameZh]?.feature}</p>
                  <p className={`mt-3 text-sm leading-7 ${item.selected ? "text-white/72" : "text-brand-muted"}`}>{zhComparisonText[item.nameZh]?.limitation}</p>
                </article>
              ))}
            </div>
          </div>
          {(() => {
            const comparisonImage = getAlmatyImage("P05");
            return (
              <button
                type="button"
                onClick={() => onOpen(comparisonImage)}
                className="group relative h-full min-h-[420px] overflow-hidden rounded-[24px] bg-white text-left shadow-card"
                aria-label={`查看${comparisonImage.title}`}
              >
                {comparisonImage.src ? (
                  <Image
                    src={comparisonImage.src}
                    alt={comparisonImage.altZh || comparisonImage.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="grid h-full min-h-[420px] place-items-center bg-[#eef3f8] text-brand-muted">图片整理中</div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/76 via-black/26 to-transparent p-5 text-white">
                  <p className="text-sm font-semibold">{comparisonImage.title}</p>
                </div>
              </button>
            );
          })()}
        </div>
      </div>
    </section>
  );
}

function DesignDevelopmentGallery({ onOpen }: { onOpen: (image: ProjectImageRecord) => void }) {
  const images = ["P06", "P07", "P08", "P09", "P10", "P11"].map(getAlmatyImage);
  return (
    <section className={`${sectionClass} bg-white`}>
      <div className={containerClass}>
        <SectionTitle title="从建筑分析到投影构图" />
        <div className="mt-8 flex flex-wrap gap-2">
          {zhDesignFlow.map((step, index) => (
            <span key={step} className="inline-flex items-center gap-2 rounded-full border border-brand-line bg-[#f8fbff] px-4 py-2 text-sm font-semibold text-brand-text">
              {step}{index < zhDesignFlow.length - 1 ? <span className="text-brand-blue">→</span> : null}
            </span>
          ))}
        </div>
        <p className="mt-8 max-w-4xl text-base leading-8 text-brand-muted">
          深化设计从建筑比例、结构节奏、观看方向和核心视觉面入手，将整体图案拆分为可执行的投射区域，并通过灯位、角度、距离和边界控制形成连续完整的光影构图。
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <ImageTile
              key={image.code}
              image={image}
              onOpen={onOpen}
              aspectClassName="aspect-[16/10]"
              imageFit="cover"
              className="bg-[#eef3f8]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function EngineeringChallenges({ onOpen }: { onOpen: (image: ProjectImageRecord) => void }) {
  return (
    <section className={`${sectionClass} bg-[#071b33] text-white`}>
      <div className={containerClass}>
        <SectionTitle title="核心工程难点" light />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {almatyMuseumProject.challenges.map((item) => (
            <article key={item.number} className="grid gap-5 rounded-[22px] border border-white/10 bg-white/5 p-5 lg:grid-cols-[0.9fr_1.1fr]">
              <ImageTile image={getAlmatyImage(item.imageCode || "P12")} onOpen={onOpen} />
              <div className="p-2">
                <p className="text-[12px] font-bold tracking-[0.2em] text-brand-yellow">难点 {item.number}</p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight">{item.titleZh}</h3>
                <p className="mt-5 text-sm leading-7 text-white/70">{item.descriptionZh}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GlobalCollaboration({ onOpen }: { onOpen: (image: ProjectImageRecord) => void }) {
  const collaborationImages = ["P16", "P17", "P18", "P19"].map(getAlmatyImage);

  return (
    <section className={`${sectionClass} bg-[#f5f7fa]`}>
      <div className={containerClass}>
        <SectionTitle
          title="跨国协作，让复杂方案真正落地"
          description="复杂的国际照明项目不能只依靠设备完成，还需要清晰图纸、快速技术反馈、现场配合和持续沟通。"
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-7">
          {almatyMuseumProject.collaborationSteps.map((step, index) => (
            <article key={step.title} className="rounded-[18px] border border-brand-line bg-white p-5">
              <span className="text-[12px] font-bold tracking-[0.18em] text-brand-blue">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-[17px] font-semibold leading-tight text-brand-text">{step.titleZh}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{step.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {zhCollaborationValues.map((label) => (
            <div key={label} className="border border-brand-line bg-white p-5 text-sm font-bold text-brand-text">{label}</div>
          ))}
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {collaborationImages.map((image) => (
            <ImageTile key={image.code} image={image} onOpen={onOpen} className="h-full" />
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientValue() {
  return (
    <section className={`${sectionClass} bg-white`}>
      <div className={containerClass}>
        <SectionTitle title="客户最终获得的，不只是一批灯具" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {almatyMuseumProject.clientValues.map(([en, zh], index) => (
            <article key={en} className="rounded-[20px] border border-brand-line bg-[#f8fbff] p-6">
              <span className="text-[12px] font-bold tracking-[0.18em] text-brand-blue">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-xl font-semibold leading-tight text-brand-text">{zh}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EngineeringTimeline({ onOpen }: { onOpen: (image: ProjectImageRecord) => void }) {
  const timeline = [
    { title: "需求沟通", code: "P16", text: "明确项目目标、建筑条件、视觉方向和交付节奏。" },
    { title: "技术确认", code: "P17", text: "通过图纸批注和技术资料确认灯具位置与投射条件。" },
    { title: "深化图纸", code: "P20", text: "将建筑图纸转化为可施工的投影分区与安装依据。" },
    { title: "灯位布置", code: "P08", text: "协调灯具编号、投射范围、分区关系和安装条件。" },
    { title: "系统拓扑", code: "P37", text: "梳理控制系统、信号链路与灯具分区关系，确保动态场景稳定运行。" },
    { title: "现场协作", code: "P18", text: "与当地团队确认支架、线路和实际安装条件。" },
    { title: "现场安装", code: "P22", text: "按照深化资料完成灯具安装与基础定位。" },
    { title: "第一次亮灯", code: "P23", text: "首次亮灯确认投射方向、焦距和画面边界。" },
    { title: "图案拼接", code: "P24", text: "对相邻画面进行对位、边界修正和亮度匹配。" },
    { title: "动态编程", code: "P25", text: "完成静态图案与动态场景的程序测试。" },
    { title: "夜间联调", code: "P19", text: "在真实夜间环境中复核整体画面与动态节奏。" },
    { title: "最终验收", code: "P26", text: "与客户和现场团队共同确认最终灯光效果。" },
  ];
  return (
    <section className={`${sectionClass} bg-[#f5f7fa]`}>
      <div className={containerClass}>
        <SectionTitle
          title="从跨国协作到最终亮灯"
          description="项目从前期沟通、图纸深化、系统拓扑到现场安装和夜间联调，都需要围绕同一套技术逻辑持续推进，确保复杂投影效果最终能够稳定落地。"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {timeline.map(({ title, code, text }) => (
            <article key={title} className="rounded-[20px] border border-brand-line bg-white p-4">
              <ImageTile
                image={getAlmatyImage(code)}
                onOpen={onOpen}
                aspectClassName="aspect-[16/10]"
                imageFit="cover"
                className="bg-[#eef3f8]"
              />
              <h3 className="mt-4 text-lg font-semibold text-brand-text">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalResultGallery({ onOpen }: { onOpen: (image: ProjectImageRecord) => void }) {
  const gallery = ["P04", "P27", "P28", "P29", "P30", "P32", "P33", "P34", "P35"].map(getAlmatyImage);
  return (
    <section className={`${sectionClass} bg-white`}>
      <div className={containerClass}>
        <SectionTitle title="最终光影效果" />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {gallery.map((image, index) => <ImageTile key={image.code} image={image} onOpen={onOpen} className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""} />)}
        </div>
      </div>
    </section>
  );
}

function TechnicalInsights() {
  return (
    <section className={`${sectionClass} bg-[#071b33] text-white`}>
      <div className={containerClass}>
        <SectionTitle title="技术解析" light />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {almatyMuseumProject.technicalInsights.map((item) => (
            <article key={item.title} className="rounded-[22px] border border-white/10 bg-white/5 p-6">
              <h3 className="text-2xl font-semibold leading-tight">{item.titleZh}</h3>
              <p className="mt-5 text-sm leading-7 text-white/70">{item.bodyZh}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function LessonsLearned() {
  return (
    <section className={`${sectionClass} bg-[#f5f7fa]`}>
      <div className={containerClass}>
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.45fr] lg:items-start">
          <div>
            <SectionTitle title="项目经验" />
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-muted">
              这类跨国博物馆项目的难点，不在于单台灯具能否点亮，而在于图纸深化、灯位拆分、投射距离、现场安装和夜间调试能否形成闭环。ZOMEI 将设计图纸、灯具编号、图案分区、支架角度和现场反馈统一到同一套项目资料中，让客户、设计方和施工团队围绕同一目标协同推进。
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {almatyMuseumProject.lessons.map(([en, zh], index) => {
              const [title, ...bodyParts] = zh.split("：");
              const body = bodyParts.join("：");

              return (
                <article key={en} className="rounded-[20px] border border-brand-line bg-white p-5 shadow-sm">
                  <p className="text-[12px] font-bold tracking-[0.18em] text-brand-blue">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-xl font-semibold leading-tight text-brand-text">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-brand-muted">{body}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectFAQ() {
  return (
    <section className={`${sectionClass} bg-[#f5f7fa]`}>
      <div className={containerClass}>
        <SectionTitle title="常见问题" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {zhFaq.map(([q, a], index) => (
            <article key={q} className="rounded-[22px] border border-brand-line bg-white p-6 shadow-sm">
              <p className="text-[12px] font-bold tracking-[0.18em] text-brand-blue">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-lg font-semibold leading-tight text-brand-text">{q}</h3>
              <p className="mt-4 text-sm leading-7 text-brand-muted">{a}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectSummary() {
  return (
    <section id="project-summary" aria-labelledby="project-summary-title" className={`${sectionClass} bg-white`}>
      <div className={containerClass}>
        <SectionTitle title="项目总结" />
        <div className="mt-10 grid gap-8">
          <ul className="space-y-4">
            {almatyMuseumProject.summaryZh.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-7 text-brand-muted"><span className="mt-2 h-2 w-2 shrink-0 bg-brand-yellow" />{item}</li>
            ))}
          </ul>
        </div>
        <p className="mt-10 border-t border-brand-line pt-6 text-xs leading-6 text-brand-muted">{almatyMuseumProject.confidentialityZh}</p>
      </div>
    </section>
  );
}

function FoldedProjectProcess({ onOpen }: { onOpen: (image: ProjectImageRecord) => void }) {
  return (
    <section className="bg-[#f5f7fa] py-10">
      <div className={containerClass}>
        <details className="group border border-brand-line bg-white">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-5 p-5 text-lg font-semibold text-brand-text sm:p-6">
            更多深化过程与技术资料
            <span className="text-sm font-bold text-brand-blue group-open:hidden">展开</span>
            <span className="hidden text-sm font-bold text-brand-blue group-open:inline">收起</span>
          </summary>
          <div className="border-t border-brand-line">
            <Significance onOpen={onOpen} />
            <DesignDevelopmentGallery onOpen={onOpen} />
            <GlobalCollaboration onOpen={onOpen} />
            <ClientValue />
            <EngineeringTimeline onOpen={onOpen} />
            <TechnicalInsights />
            <LessonsLearned />
          </div>
        </details>
      </div>
    </section>
  );
}

function ProjectCTA() {
  const [started, setStarted] = useState(false);
  const onFocus = () => {
    if (!started) {
      setStarted(true);
      trackEvent("project_form_start", { project: almatyMuseumProject.slug });
    }
  };
  return (
    <section className={`${sectionClass} bg-[#071b33] text-white`}>
      <div className={`${containerClass} grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start`}>
        <div>
          <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-brand-yellow">项目沟通</p>
          <h2 className="mt-4 text-[clamp(2.2rem,4vw,4rem)] font-semibold leading-[1.02] tracking-tight">正在规划具有代表性的建筑外立面灯光项目？</h2>
          <p className="mt-6 text-base leading-8 text-white/68">
            你可以把建筑图纸、立面尺寸、安装条件和目标效果发给我们。ZOMEI 可协助进行概念评估、灯具选型、投影分析、深化设计和现场调试支持。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex min-h-12 items-center bg-brand-blue px-5 py-3 text-sm font-bold text-white">沟通项目需求</Link>
            <a href="mailto:shine@zomeiled.com" onClick={() => trackEvent("project_email_click", {})} className="inline-flex min-h-12 items-center border border-white/18 px-5 py-3 text-sm font-bold text-white">联系技术团队</a>
          </div>
        </div>
        <form
          className="grid gap-4 rounded-[24px] border border-white/10 bg-white p-5 text-brand-text shadow-card sm:grid-cols-2"
          onSubmit={(event) => {
            event.preventDefault();
            trackEvent("project_form_submit", { project: almatyMuseumProject.slug });
          }}
        >
          {["姓名", "公司", "国家 / 地区", "邮箱", "WhatsApp", "项目位置"].map((field) => (
            <label key={field} className="grid gap-2 text-[13px] font-semibold">
              {field}
              <input onFocus={onFocus} className="input-field rounded-[12px]" placeholder={field} />
            </label>
          ))}
          <label className="grid gap-2 text-[13px] font-semibold sm:col-span-2">
            项目阶段
            <select onFocus={onFocus} className="input-field rounded-[12px]">
              {["概念设计", "深化设计", "招投标阶段", "施工阶段", "改造项目", "暂不确定"].map((stage) => <option key={stage}>{stage}</option>)}
            </select>
          </label>
          <label className="grid gap-2 text-[13px] font-semibold sm:col-span-2">
            项目需求
            <textarea onFocus={onFocus} className="input-field min-h-28 rounded-[12px]" placeholder="可填写立面尺寸、目标效果、安装条件、项目时间等信息..." />
          </label>
          <label className="grid gap-2 text-[13px] font-semibold sm:col-span-2">
            上传项目资料
            <input onFocus={onFocus} className="input-field rounded-[12px]" type="file" />
          </label>
          <button className="min-h-12 bg-brand-blue px-5 py-3 text-sm font-bold text-white sm:col-span-2">提交项目需求</button>
        </form>
      </div>
    </section>
  );
}

export function AlmatyMuseumProjectPage() {
  const [lightbox, setLightbox] = useState<ProjectImageRecord | undefined>();
  const openLightbox = (image: ProjectImageRecord) => {
    setLightbox(image);
    trackEvent("project_gallery_open", { code: image.code });
  };

  useEffect(() => {
    trackEvent("project_page_view", { project: almatyMuseumProject.slug });
    const marks = new Set<number>();
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.round((window.scrollY / max) * 100) : 0;
      if (progress >= 50 && !marks.has(50)) {
        marks.add(50);
        trackEvent("project_scroll_50", { project: almatyMuseumProject.slug });
      }
      if (progress >= 90 && !marks.has(90)) {
        marks.add(90);
        trackEvent("project_scroll_90", { project: almatyMuseumProject.slug });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(undefined);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  const allImages = useMemo(() => Object.values(almatyMuseumProject.images), []);

  return (
    <>
      <ProjectHero onOpen={openLightbox} />
      <ProjectTrustPath />
      <ProjectOverview />
      <Highlights />
      <BeforeAfter onOpen={openLightbox} />
      <LightingMethodComparison onOpen={openLightbox} />
      <EngineeringChallenges onOpen={openLightbox} />
      <FinalResultGallery onOpen={openLightbox} />
      <FoldedProjectProcess onOpen={openLightbox} />
      <ProjectFAQ />
      <ProjectSummary />
      <Lightbox image={lightbox} onClose={() => setLightbox(undefined)} />
      <div className="sr-only">
        {allImages.map((image) => (
          <span key={image.code}>{image.code}: {image.alt}</span>
        ))}
      </div>
    </>
  );
}
