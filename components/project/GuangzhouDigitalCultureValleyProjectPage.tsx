"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRightIcon } from "@/components/Icons";
import { ProjectImagePlaceholder } from "@/components/project/ProjectImagePlaceholder";
import { ProjectBriefPage } from "@/components/project/ProjectBriefPage";
import { guangzhouDigitalCultureValleyProject as project } from "@/data/projects/guangzhou-digital-culture-valley";
import { getGuangzhouDigitalCultureValleyImage as getImage } from "@/data/projects/guangzhou-digital-culture-valley-images";
import type { ProjectImageRecord } from "@/data/projects/almaty-museum-images";

const sectionClass = "py-12 sm:py-16 lg:py-20";
const containerClass = "mx-auto w-[min(100%-1.5rem,80rem)] sm:w-[min(100%-2rem,80rem)]";

function trackEvent(name: string, payload: Record<string, string | number | boolean | undefined> = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("zomei_project_event", { detail: { name, payload } }));
}

function aspectFor(image: ProjectImageRecord) {
  if (image.ratio === "3:4") return "aspect-[3/4]";
  if (image.ratio === "16:9") return "aspect-video";
  if (image.ratio === "16:10") return "aspect-[16/10]";
  return undefined;
}

function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className={`mb-3 text-[11px] font-bold uppercase tracking-[0.22em] ${light ? "text-brand-yellow" : "text-brand-blue"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-[clamp(1.9rem,3.35vw,3rem)] font-semibold leading-[1.05] tracking-tight text-balance ${light ? "text-white" : "text-brand-text"}`}>
        {title}
      </h2>
      {description ? <p className={`mt-5 text-base leading-8 ${light ? "text-white/70" : "text-brand-muted"}`}>{description}</p> : null}
    </div>
  );
}

function ImageTile({
  image,
  onOpen,
  className = "",
  fit = "cover",
  aspectClassName,
  showCaption = false,
}: {
  image: ProjectImageRecord;
  onOpen: (image: ProjectImageRecord) => void;
  className?: string;
  fit?: "cover" | "contain";
  aspectClassName?: string;
  showCaption?: boolean;
}) {
  return (
    <ProjectImagePlaceholder
      {...image}
      className={className}
      aspectClassName={aspectClassName || aspectFor(image)}
      imageFit={fit}
      showCaption={showCaption}
      onClick={() => onOpen(image)}
    />
  );
}

function FigureCard({
  image,
  onOpen,
  title,
  text,
  fit = "cover",
  aspectClassName = "aspect-[16/10]",
  dark = false,
  className = "",
}: {
  image: ProjectImageRecord;
  onOpen: (image: ProjectImageRecord) => void;
  title?: string;
  text?: string;
  fit?: "cover" | "contain";
  aspectClassName?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-[22px] border ${
        dark ? "border-white/12 bg-white/5 text-white" : "border-brand-line bg-white text-brand-text shadow-sm"
      } ${className}`}
    >
      <ImageTile
        image={image}
        onOpen={onOpen}
        fit={fit}
        aspectClassName={aspectClassName}
        className="rounded-none border-0 shadow-none"
      />
      <div className="flex flex-1 flex-col justify-start p-5">
        <h3 className={`text-xl font-semibold leading-tight ${dark ? "text-white" : "text-brand-text"}`}>{title || image.title}</h3>
        <p className={`mt-3 text-sm leading-7 ${dark ? "text-white/70" : "text-brand-muted"}`}>{text || image.caption}</p>
      </div>
    </article>
  );
}

function Lightbox({ image, onClose }: { image?: ProjectImageRecord; onClose: () => void }) {
  if (!image) return null;
  return (
    <div className="fixed inset-0 z-[90] grid place-items-center bg-[#020817]/88 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" onClick={onClose}>
      <button className="absolute right-5 top-5 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white" onClick={onClose}>
        关闭
      </button>
      <div onClick={(event) => event.stopPropagation()}>
        {image.src ? (
          <Image
            src={image.src}
            alt={image.alt}
            width={1800}
            height={1200}
            sizes="94vw"
            className="block h-auto max-h-[92vh] w-auto max-w-[94vw] rounded-[16px] object-contain shadow-2xl"
          />
        ) : null}
      </div>
    </div>
  );
}

function Hero({ onOpen }: { onOpen: (image: ProjectImageRecord) => void }) {
  const hero = getImage("P01");
  return (
    <section className="bg-white">
      <button type="button" onClick={() => onOpen(hero)} className="relative block aspect-[21/8] w-full overflow-hidden bg-black text-left">
        <Image src={hero.src || ""} alt={hero.alt} fill priority sizes="100vw" className="object-cover" />
      </button>
      <div className="bg-[#071b33] text-white">
        <div className={`${containerClass} py-8 sm:py-10 lg:py-12`}>
          <div className="max-w-6xl">
            <div className="mb-5 flex flex-wrap gap-3">
              {["广州", "商业综合体更新", "RGBW立面照明", "深化到调试"].map((tag) => (
                <span key={tag} className="border border-white/18 bg-white/8 px-4 py-2 text-[12px] font-bold tracking-[0.12em] text-white/90">
                  {tag}
                </span>
              ))}
            </div>
            <h1 className="max-w-5xl text-[clamp(2.4rem,5vw,5rem)] font-semibold leading-[0.98] tracking-tight text-white">{project.titleZh}</h1>
            <p className="mt-5 max-w-4xl text-[clamp(1.05rem,2vw,1.55rem)] font-semibold leading-tight text-white/72">{project.subtitleZh}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Facts() {
  return (
    <section id="project-summary" className={`${sectionClass} bg-white`}>
      <div className={containerClass}>
        <SectionTitle
          eyebrow="Project Summary"
          title="项目总结"
          description="本项目的核心不是提高亮度，而是重新组织建筑在夜间被观看的方式：顶部曲线、垂直结构、冲孔铝板和水面倒影共同构成一套清晰的光影秩序。"
        />
        <dl className="mt-10 grid gap-px overflow-hidden rounded-[22px] border border-brand-line bg-brand-line md:grid-cols-2 lg:grid-cols-4">
          {project.facts.map(([label, value]) => (
            <div key={label} className="bg-white p-6">
              <dt className="text-[12px] font-bold uppercase tracking-[0.16em] text-brand-blue">{label}</dt>
              <dd className="mt-3 text-[18px] font-semibold leading-snug text-brand-text">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function ProjectTrustPath() {
  const items = [
    ["最终效果", "顶部轮廓、立面光带与水面倒影形成完整夜景识别。"],
    ["项目背景", "商业综合体更新，需要让建筑夜间更清晰、更有传播力。"],
    ["使用产品", "RGBW 线性洗墙灯、线条灯与 DMX512 控制系统。"],
    ["技术难点", "控眩、遮挡、亮度层次、控制分区和安装节点协调。"],
    ["解决方式", "现场试灯、挡板验证、节点深化、分区控制与夜间调试。"],
    ["交付结果", "形成平日、节日和深夜模式，支持后续运营维护。"],
  ];

  return (
    <section className={`${sectionClass} bg-white`}>
      <div className={containerClass}>
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <SectionTitle
            title="先看这个项目是否匹配你的需求"
            description="客户最关心的不是长篇介绍，而是这个项目用了什么产品、解决了什么问题、最后交付了什么效果。"
          />
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link href="/contact" className="inline-flex min-h-12 items-center gap-3 bg-brand-blue px-5 py-3 text-sm font-bold text-white">
              获取类似项目方案 <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <a href="#project-summary" className="inline-flex min-h-12 items-center border border-brand-line px-5 py-3 text-sm font-bold text-brand-text">
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

function DesignNarrative({ onOpen }: { onOpen: (image: ProjectImageRecord) => void }) {
  return (
    <section className={`${sectionClass} bg-[#f5f7fa]`}>
      <div className={`${containerClass} grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch`}>
        <div>
          <SectionTitle
            eyebrow="Design Concept"
            title="设计的起点，是尊重建筑本身的节奏"
            description="广东数字文化谷由多个不规则矩形体块斜向堆叠而成，层与层之间的错动和悬挑让建筑天然具有动态感。照明策略并不追求满铺式明亮，而是让光顺着建筑的水平层叠、顶部曲线与垂直结构展开。"
          />
          <div className="mt-7 space-y-5 text-base leading-8 text-brand-muted">
            <p>
              <strong className="font-semibold text-brand-text">从商业建筑更新，到城市夜间界面的重塑：</strong>本项目的核心不是提高亮度，而是重新组织建筑在夜间被观看的方式：顶部曲线、垂直结构、冲孔铝板和水面倒影共同构成一套清晰的光影秩序。
            </p>
            <p>
              顶部线条灯负责建立远距离识别，如同建筑的“皇冠”；隐藏式线性洗墙灯负责把垂直结构从夜色中提取出来；冲孔铝板和横向装饰带则承担视觉连接，让立面不只是被照亮，而是被重新编排。
            </p>
            <p>
              从设计师视角看，项目最有价值的地方在于克制。灯光没有覆盖建筑，而是选择真正值得表达的部位，形成清晰的明暗层次和可运营的动态节奏。
            </p>
            <p>
              因此，前期效果图不是最终目的，而是用于确认建筑轮廓、色彩层次和动态方向的设计工具；日景与鸟瞰图则帮助团队判断哪些结构值得被保留，哪些亮度需要被压低。
            </p>
          </div>
        </div>
        <div className="grid h-full gap-5 sm:grid-cols-2">
          <FigureCard image={getImage("P02")} onOpen={onOpen} text="白天建筑的层叠体块、悬挑边界和水平流线，是夜景设计的结构依据。" />
          <FigureCard image={getImage("P03")} onOpen={onOpen} text="俯瞰视角中的流动轮廓，是顶部线性光需要放大的独特识别。" />
          <FigureCard image={getImage("P17")} onOpen={onOpen} className="sm:col-span-2" fit="contain" aspectClassName="aspect-[21/9]" text="效果图用于前期统一建筑轮廓、光色层次和动态方向，帮助设计进入可沟通、可深化的状态。" />
        </div>
      </div>
    </section>
  );
}

function BeforeAfter({ onOpen }: { onOpen: (image: ProjectImageRecord) => void }) {
  return (
    <section className={`${sectionClass} bg-white`}>
      <div className={containerClass}>
        <SectionTitle
          eyebrow="Before / After"
          title="从分散的夜间亮度，到完整的建筑表情"
          description="改造前夜景缺少统一主线；改造后，顶部轮廓、立面光带与横向层次形成连续叙事，建筑从普通商业体变成更具传播力的夜间地标。"
        />
        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-2">
          <FigureCard image={getImage("P14")} onOpen={onOpen} aspectClassName="aspect-[16/9]" text="改造前夜景缺少完整的结构表达和统一视觉节奏，亮度存在但建筑性不足。" />
          <FigureCard image={getImage("P01")} onOpen={onOpen} aspectClassName="aspect-[16/9]" text="更新后以顶部线性轮廓和立面节奏建立远距离识别，形成更完整的夜间建筑表情。" />
        </div>
      </div>
    </section>
  );
}

function VisualSystem({ onOpen }: { onOpen: (image: ProjectImageRecord) => void }) {
  const cards = [
    ["P04", "顶部皇冠", "顶部曲线以120度线条灯连续表达，建立远距离视觉识别。"],
    ["P05", "垂直光带", "线性洗墙灯隐藏安装，将光精准投向立面檐板。"],
    ["P06", "横向连接", "冲孔铝板和横向装饰带让建筑层次更完整。"],
    ["P08", "城市视角", "水面和远距离视角检验光影是否形成整体记忆。"],
  ];
  return (
    <section className={`${sectionClass} bg-[#071b33] text-white`}>
      <div className={containerClass}>
        <SectionTitle
          eyebrow="Lighting Composition"
          title="用三组光，组织建筑的夜间秩序"
          description="顶部、垂直和横向不是三个孤立做法，而是一套完整的视觉系统。每一处灯具都服务于建筑阅读，而不是单纯追求亮度。"
          light
        />
        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2">
          {cards.map(([code, title, text]) => (
            <FigureCard key={code} image={getImage(code)} onOpen={onOpen} title={title} text={text} dark aspectClassName="aspect-[16/10]" />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductControl({ onOpen }: { onOpen: (image: ProjectImageRecord) => void }) {
  return (
    <section className={`${sectionClass} bg-white`}>
      <div className={containerClass}>
        <SectionTitle
          eyebrow="Product & Control"
          title="产品控制，不只是选灯具，而是控制光的边界"
          description="本项目的产品策略围绕两个核心：一是用线条灯建立顶部轮廓，二是用RGBW线性洗墙灯控制立面光带。两类灯具都采用DC24V与DMX512控制，为分区场景和后期调试留下足够精度。"
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[18px] border border-brand-line bg-[#f8fbff] p-5">
            <h3 className="text-xl font-semibold text-brand-text">36W RGBW线性洗墙灯</h3>
            <div className="mt-4 grid gap-px overflow-hidden rounded-[14px] border border-brand-line bg-brand-line sm:grid-cols-2 xl:grid-cols-3">
              {project.wallWasherSpec.map(([label, value]) => (
                <div key={label} className="bg-white px-3 py-3">
                  <p className="text-[11px] font-bold leading-none text-brand-blue">{label}</p>
                  <p className="mt-2 text-[13px] font-semibold leading-5 text-brand-text">{value}</p>
                </div>
              ))}
            </div>
          </article>
          <article className="rounded-[18px] border border-brand-line bg-[#f8fbff] p-5">
            <h3 className="text-xl font-semibold text-brand-text">10W RGBW线条灯</h3>
            <div className="mt-4 grid gap-px overflow-hidden rounded-[14px] border border-brand-line bg-brand-line sm:grid-cols-2 xl:grid-cols-3">
              {project.linearSpec.map(([label, value]) => (
                <div key={label} className="bg-white px-3 py-3">
                  <p className="text-[11px] font-bold leading-none text-brand-blue">{label}</p>
                  <p className="mt-2 text-[13px] font-semibold leading-5 text-brand-text">{value}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
        <div className="mt-8 grid items-stretch gap-5 lg:grid-cols-2">
          <FigureCard image={getImage("P07")} onOpen={onOpen} aspectClassName="aspect-[16/9]" text="控制系统支持平日、节日与深夜模式，在运营场景中保持亮度和氛围的平衡。" />
          <FigureCard image={getImage("P16")} onOpen={onOpen} fit="contain" aspectClassName="aspect-[16/9]" text="工程主机、交换机、光纤收发器、分控器与灯具回路形成清晰控制链路。" />
        </div>
      </div>
    </section>
  );
}

function Verification({ onOpen }: { onOpen: (image: ProjectImageRecord) => void }) {
  const steps = [
    ["06", "控制联调", "把分区地址、动态场景和现场回路记录合并校验，确保后期运营稳定。", "P09B"],
    ["05", "积分球测试", "用实验室数据确认白光色温、显色、发光效率和RGBW输出。", "P13"],
    ["03", "节点深化", "把灯具安装位置、投光角度、遮光板和检修空间落实到节点界面。", "P15"],
    ["01", "现场试灯", "验证25度光束角、RGBW色彩、动态表现和现场安装距离。", "P10"],
    ["02", "挡板防眩", "比较双折弯挡板、单挡板和L型挡板，控制溢光与裸露光源。", "P11"],
    ["04", "亮度校准", "通过0-255亮度测试确认80与255状态下的视觉差异。", "P12"],
  ];
  return (
    <section className={`${sectionClass} bg-[#f5f7fa]`}>
      <div className={containerClass}>
        <SectionTitle
          eyebrow="Mock-up & Testing"
          title="谨慎的试灯，是项目少返工的前提"
          description="现场试灯并不是简单确认灯亮，而是提前发现角度、挡板、亮度、溢光和控制逻辑之间的冲突。真正专业的项目管理，是把问题尽量前置到量产和大面积安装之前。"
        />
        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map(([number, title, text, code]) => (
            <article key={number} className="flex h-full flex-col rounded-[22px] border border-brand-line bg-white p-4 shadow-sm">
              <ImageTile image={getImage(code)} onOpen={onOpen} aspectClassName="aspect-[4/3]" />
              <p className="mt-5 text-[12px] font-bold tracking-[0.18em] text-brand-blue">{number}</p>
              <h3 className="mt-3 text-xl font-semibold text-brand-text">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-brand-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DeliveryThinking({ onOpen }: { onOpen: (image: ProjectImageRecord) => void }) {
  const followUpNotes = [
    ["深化校核", "把灯具位置、挡板角度、检修空间和立面材料关系提前确认。"],
    ["现场闭环", "安装、接线、控制地址和亮灯效果均以现场照片和记录追踪。"],
    ["交付判断", "以最终夜景、运营模式和视觉舒适度作为统一验收标准。"],
  ];

  return (
    <section className={`${sectionClass} bg-white`}>
      <div className={`${containerClass} grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch`}>
        <div className="flex h-full flex-col justify-between border border-brand-line bg-[#f8fbff] p-7 sm:p-8">
          <SectionTitle
            eyebrow="Project Follow-up"
            title="项目跟进的重点，是让设计、产品和现场保持同一判断标准"
            description="ZOMEI在本项目中承担深化、供货、安装支持、调试和项目拍照记录。真正的项目交付不是把灯具送到现场，而是持续跟进从样灯到量产、从节点到控制、从初亮到最终拍摄的每一个判断。"
          />
          <div className="mt-8 grid gap-px overflow-hidden rounded-[18px] border border-brand-line bg-brand-line">
            {followUpNotes.map(([title, text]) => (
              <article key={title} className="bg-white p-5">
                <h3 className="text-base font-semibold text-brand-text">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-brand-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
        <div>
          <div className="grid items-stretch gap-5 sm:grid-cols-2">
            <FigureCard image={getImage("P09")} onOpen={onOpen} aspectClassName="aspect-[4/5]" text="安装节点的稳定性、遮挡关系和检修空间直接影响最终光效。" />
            <FigureCard image={getImage("P09B")} onOpen={onOpen} aspectClassName="aspect-[4/5]" text="从节点安装到控制调试，项目需要持续记录并闭环确认。" />
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {project.highlights.map(([value, title, text]) => (
              <article key={title} className="flex h-full flex-col border border-brand-line bg-[#f8fbff] p-5">
                <p className="text-[clamp(1.45rem,2vw,2rem)] font-extrabold leading-none text-brand-blue">{value}</p>
                <h3 className="mt-3 text-base font-semibold leading-snug text-brand-text">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CompleteGallery({ onOpen }: { onOpen: (image: ProjectImageRecord) => void }) {
  const images = useMemo(
    () =>
      [
        "P01",
        "P04",
        "P08",
        "P05",
        "P06",
        "P07",
        "P03",
        "P14",
        "Social",
      ]
        .map((code) => project.images[code])
        .filter(Boolean),
    [],
  );
  return (
    <section className={`${sectionClass} bg-[#f5f7fa]`}>
      <div className={containerClass}>
        <SectionTitle
          eyebrow="Project Gallery"
          title="项目实拍效果精选"
          description="图库重点展示改造后的夜景效果、立面细节和城市视角。封面图、拓扑图、测试报告和安装节点已放在对应章节，不在图库中重复展示。"
        />
        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
          {images.map((image) => (
            <FigureCard
              key={image.code}
              image={image}
              onOpen={onOpen}
              fit={image.code === "P13" || image.code === "P15" || image.code === "P16" || image.code === "P17" ? "contain" : "cover"}
              aspectClassName="aspect-[16/10]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className={`${sectionClass} bg-white`}>
      <div className={containerClass}>
        <SectionTitle eyebrow="FAQ" title="项目技术问答" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {project.faq.map(([question, answer], index) => (
            <article key={question} className="rounded-[22px] border border-brand-line bg-[#f8fbff] p-6">
              <p className="text-[12px] font-bold tracking-[0.18em] text-brand-blue">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="mt-4 text-xl font-semibold text-brand-text">{question}</h3>
              <p className="mt-4 text-sm leading-7 text-brand-muted">{answer}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 border-t border-brand-line pt-8">
          <Link href="/contact" className="inline-flex min-h-12 items-center gap-3 bg-brand-blue px-6 py-3 text-sm font-bold text-white">
            沟通类似项目 <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
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
            <DesignNarrative onOpen={onOpen} />
            <VisualSystem onOpen={onOpen} />
            <Verification onOpen={onOpen} />
            <DeliveryThinking onOpen={onOpen} />
          </div>
        </details>
      </div>
    </section>
  );
}

export function GuangzhouDigitalCultureValleyProjectPage() {
  const { locale } = useLanguage();
  const [lightbox, setLightbox] = useState<ProjectImageRecord | undefined>();
  const openLightbox = (image: ProjectImageRecord) => {
    setLightbox(image);
    trackEvent("project_gallery_open", { project: project.slug, code: image.code });
  };

  useEffect(() => {
    trackEvent("project_page_view", { project: project.slug });
  }, []);

  useEffect(() => {
    if (!lightbox) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(undefined);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [lightbox]);

  if (locale === "en" || locale === "ru") {
    const gallery = ["P01", "P04", "P10"]
      .map((code) => getImage(code))
      .filter((image): image is ProjectImageRecord => Boolean(image?.src))
      .map((image) => ({ src: image.src as string, alt: image.alt }));
    return (
      <ProjectBriefPage
        locale={locale}
        title={locale === "en" ? "Guangzhou Digital Culture Valley Lighting Upgrade" : "Освещение Guangzhou Digital Culture Valley"}
        subtitle={
          locale === "en"
            ? "Facade lighting upgrade for a commercial complex, using RGBW wall washers, linear lights and DMX512 control."
            : "Модернизация фасадного освещения коммерческого комплекса с RGBW wall washer, линейными светильниками и DMX512."
        }
        image={getImage("P01").src || "https://img.zomeiled.com/images/projects/guangzhou-digital-culture-valley/web/p01-final-night-hero.jpg"}
        tags={
          locale === "en"
            ? ["Commercial Facade", "RGBW Wall Washer", "Design + Supply + Control"]
            : ["Коммерческий фасад", "RGBW wall washer", "Дизайн + поставка + управление"]
        }
        facts={
          locale === "en"
            ? [
                ["Final Effect", "A cleaner nighttime identity built by linear outline lighting and RGBW facade rhythm."],
                ["Project Background", "A commercial complex needed stronger visibility, rhythm and operational lighting scenes."],
                ["Products Used", "36W RGBW linear wall washer, 10W RGBW linear light and DMX512 control system."],
                ["Technical Challenge", "Glare control, facade obstruction, brightness hierarchy, control zoning and mounting details."],
                ["Solution", "On-site mockup, anti-glare baffle testing, node development, zone control and night commissioning."],
                ["Delivery Result", "Daily, festival and late-night modes were created for operation and maintenance."],
              ]
            : [
                ["Итоговый эффект", "Более цельный ночной образ через линейный контур и RGBW-ритм фасада."],
                ["Фон проекта", "Коммерческому комплексу требовались узнаваемость, ритм и рабочие световые сцены."],
                ["Использованные продукты", "36W RGBW линейный wall washer, 10W RGBW линейный светильник и DMX512 управление."],
                ["Техническая задача", "Контроль бликов, препятствия фасада, уровни яркости, зоны управления и монтажные узлы."],
                ["Решение", "Полевые тесты, проверка антибликовых экранов, узлы монтажа, зонирование и ночная настройка."],
                ["Результат", "Режимы для обычных дней, праздников и поздней ночи с учетом эксплуатации."],
              ]
        }
        gallery={gallery}
      />
    );
  }

  return (
    <>
      <Hero onOpen={openLightbox} />
      <ProjectTrustPath />
      <Facts />
      <BeforeAfter onOpen={openLightbox} />
      <ProductControl onOpen={openLightbox} />
      <CompleteGallery onOpen={openLightbox} />
      <FoldedProjectProcess onOpen={openLightbox} />
      <FAQ />
      <Lightbox image={lightbox} onClose={() => setLightbox(undefined)} />
    </>
  );
}
