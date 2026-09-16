"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRightIcon } from "./Icons";

const capabilityImages = [
  "https://img.zomeiled.com/images/company/website-assets/production-workshop-zomei-logo-clean.jpg",
  "https://img.zomeiled.com/images/company/website-assets/wall-washer-rd-test-area-hero.jpg",
  "https://img.zomeiled.com/images/company/website-assets/product-loading.jpg",
];

const copy = {
  en: {
    heroEyebrow: "ZOMEI Lighting",
    heroTitle: "Shenzhen ZOMEI,\nOutdoor Lighting for Project Delivery",
    heroDescription:
      "Shenzhen ZOMEI Lighting Co., Ltd. supports global project clients with outdoor architectural lighting products, solution coordination, custom manufacturing and delivery support.",
    stats: [
      ["2013", "Manufacturing experience"],
      ["Zhongshan", "Outdoor lighting base"],
      ["OEM/ODM", "Custom project support"],
      ["Global", "International projects"],
    ],
    focusEyebrow: "What We Focus On",
    focusTitle: "Not just fixtures, but practical lighting solutions that reach the site.",
    focusItems: ["Product Supply", "Solution Support", "Custom Manufacturing", "Project Delivery"],
    focusDescription:
      "Project buyers care about lighting effect, approval documents, lead time and follow-up. We keep the work clear and practical.",
    capabilityLabel: "Capability",
    capabilityTitle: "Three capabilities that support delivery",
    capabilityDescription: "Customers need to quickly confirm: we can supply, validate and coordinate.",
    capabilities: [
      {
        title: "Manufacturing & Customization",
        summary: "Outdoor project fixtures, parameter refinement and OEM/ODM customization from Henglan, Zhongshan.",
        points: ["Outdoor architectural lighting", "OEM / ODM", "Project orders"],
      },
      {
        title: "Testing & Validation",
        summary: "Basic checks for waterproofing, aging, optical-electrical data and reliability.",
        points: ["IP / aging test", "Optical data", "Reliability check"],
      },
      {
        title: "Project Coordination",
        summary: "Support selection, samples, documents, production and delivery communication by project schedule.",
        points: ["Selection support", "Documents", "Delivery support"],
      },
    ],
    documentsEyebrow: "Product & Documents",
    documentsTitle: "Products and documents prepared for project delivery",
    documentsDescription: "Start from the scene, then match fixtures, controls, certificates and project files.",
    productTitle: "Product Support",
    documentTitle: "Document Support",
    productSupport: ["Facade lighting", "Landscape & road lighting", "Wall washer / linear / projector", "Smart control system", "OEM / ODM customization", "Project supporting supply"],
    documentSupport: ["CE", "RoHS", "IP67", "IES files", "Test report", "Tender documents"],
    projectEyebrow: "Project Experience",
    projectTitle: "Real projects are the clearest proof",
    projectDescription: "Prepared project cases can be opened for details. More cases can be added gradually.",
    projectCases: [
      ["Almaty Museum of Arts Facade Lighting", "/projects/almaty-museum-of-arts-facade-lighting"],
      ["Zhengjue Temple Night Lighting", ""],
      ["Guangzhou Digital Culture Valley Lighting Upgrade", "/projects/guangzhou-digital-culture-valley-lighting-design"],
      ["Quanzhou Riverside Night Lighting Upgrade", ""],
      ["World Power Battery Conference, Yibin China", ""],
      ["Vietnam Standard Chartered Bank Landscape Lighting", ""],
    ],
    workflowEyebrow: "How We Work",
    workflowTitle: "From product preparation to delivery support, keep the process clear",
    workflowDescription:
      "A project usually starts with scene and requirement confirmation, then moves to selection, samples, documents, production and delivery.",
    workflowSteps: ["Requirement", "Selection", "Documents", "Delivery"],
    positioningEyebrow: "Positioning",
    positioningTitle: "ZOMEI Lighting\nOutdoor project lighting partner",
    positioningDescription:
      "For architecture, landscape, municipal and cultural tourism projects that need product supply, effect coordination, customization and delivery support.",
    projectsCta: "View Projects",
    contactCta: "Contact Us",
  },
  zh: {
    heroEyebrow: "ZOMEI Lighting",
    heroTitle: "深圳卓美，\n做工程户外照明落地",
    heroDescription:
      "深圳市卓美灯具有限公司面向国内外工程客户，提供户外建筑照明产品、照明方案配合、定制制造与项目交付支持。",
    stats: [
      ["2013", "制造体系积累"],
      ["中山横栏", "户外灯具制造基地"],
      ["OEM/ODM", "定制与项目配套"],
      ["Global", "国内外工程服务"],
    ],
    focusEyebrow: "What We Focus On",
    focusTitle: "不只提供灯具，更配合项目把照明方案落到现场。",
    focusItems: ["产品供应", "方案配合", "定制制造", "项目交付"],
    focusDescription:
      "客户关心的不是灯具列表，而是效果是否能实现、资料是否能报审、交期是否能配合、现场问题是否有人跟进。",
    capabilityLabel: "Capability",
    capabilityTitle: "用三项能力支撑工程交付",
    capabilityDescription: "关于我们不需要讲得复杂。客户只需要快速确认：能生产、能验证、能配合项目。",
    capabilities: [
      {
        title: "制造定制",
        summary: "中山横栏制造基地支持户外工程灯具供应、参数深化与 OEM/ODM 定制。",
        points: ["户外建筑照明", "OEM / ODM", "小批量与工程订单"],
      },
      {
        title: "测试验证",
        summary: "围绕防水、老化、光电参数和可靠性做基础验证，减少项目落地风险。",
        points: ["IP / 老化测试", "光电参数", "可靠性验证"],
      },
      {
        title: "项目配合",
        summary: "按项目节奏配合选型、样品、资料、生产和交付沟通。",
        points: ["选型建议", "资料配合", "交付支持"],
      },
    ],
    documentsEyebrow: "Product & Documents",
    documentsTitle: "产品和资料，\n都围绕项目交付准备",
    documentsDescription: "先看场景，再匹配灯具、控制方式、认证资料和项目文件，减少无效沟通。",
    productTitle: "产品支持",
    documentTitle: "资料支持",
    productSupport: ["建筑立面照明", "景观与道路照明", "洗墙 / 线形 / 投光", "智能控制系统", "OEM / ODM 定制", "工程项目配套"],
    documentSupport: ["CE", "RoHS", "IP67", "IES 文件", "检测报告", "项目报审资料"],
    projectEyebrow: "Project Experience",
    projectTitle: "项目经验是最直接的信任证明",
    projectDescription: "真实案例比长篇介绍更有说服力。已整理的项目可点击查看详情。",
    projectCases: [
      ["阿拉木图艺术博物馆外立面灯光", "/projects/almaty-museum-of-arts-facade-lighting"],
      ["圆明园正觉寺夜景照明工程", ""],
      ["广东数字文化谷照明提升项目", "/projects/guangzhou-digital-culture-valley-lighting-design"],
      ["泉州一江两岸夜景照明提升工程", ""],
      ["世界动力电池大会（中国·宜宾）", ""],
      ["越南渣打银行夜景照明工程", ""],
    ],
    workflowEyebrow: "How We Work",
    workflowTitle: "从产品准备到交付配合，流程尽量清楚",
    workflowDescription:
      "项目合作通常从场景和需求确认开始，再进入选型、样品、资料、生产与交付。我们尽量把复杂问题提前说清楚。",
    workflowSteps: ["需求确认", "产品选型", "资料配合", "生产交付"],
    positioningEyebrow: "Positioning",
    positioningTitle: "ZOMEI Lighting\n工程户外照明解决方案伙伴",
    positioningDescription:
      "适合需要灯具供应、效果沟通、定制配合和项目交付支持的建筑、景观、市政与文旅夜游项目。",
    projectsCta: "查看项目案例",
    contactCta: "联系我们",
  },
  ru: {
    heroEyebrow: "ZOMEI Lighting",
    heroTitle: "Shenzhen ZOMEI,\nнаружное освещение для проектов",
    heroDescription:
      "Shenzhen ZOMEI Lighting Co., Ltd. поддерживает международные проекты: продукция наружного архитектурного освещения, координация решений, кастомизация и поставка.",
    stats: [
      ["2013", "Опыт производства"],
      ["Zhongshan", "База наружного освещения"],
      ["OEM/ODM", "Кастомизация проектов"],
      ["Global", "Международные проекты"],
    ],
    focusEyebrow: "Наш фокус",
    focusTitle: "Не просто светильники, а решения, которые можно довести до объекта.",
    focusItems: ["Поставка", "Решения", "Кастомизация", "Поставка проекта"],
    focusDescription:
      "Для клиента важны эффект, документы, сроки и сопровождение. Мы делаем процесс понятным и практичным.",
    capabilityLabel: "Возможности",
    capabilityTitle: "Три возможности для поддержки поставки",
    capabilityDescription: "Клиенту нужно быстро понять: можем поставить, проверить и координировать проект.",
    capabilities: [
      {
        title: "Производство и кастомизация",
        summary: "Наружные проектные светильники, уточнение параметров и OEM/ODM кастомизация в Henglan, Zhongshan.",
        points: ["Архитектурное освещение", "OEM / ODM", "Проектные заказы"],
      },
      {
        title: "Испытания и проверка",
        summary: "Базовые проверки влагозащиты, старения, оптико-электрических данных и надежности.",
        points: ["IP / aging test", "Оптические данные", "Проверка надежности"],
      },
      {
        title: "Проектная координация",
        summary: "Подбор, образцы, документы, производство и коммуникация по поставке в рамках графика проекта.",
        points: ["Подбор", "Документы", "Поставка"],
      },
    ],
    documentsEyebrow: "Продукция и документы",
    documentsTitle: "Продукция и документы подготовлены под проект",
    documentsDescription: "Сначала сцена проекта, затем светильники, управление, сертификаты и проектные файлы.",
    productTitle: "Поддержка продукции",
    documentTitle: "Поддержка документов",
    productSupport: ["Фасадное освещение", "Ландшафт и дороги", "Wall washer / linear / projector", "Smart control system", "OEM / ODM", "Проектная поставка"],
    documentSupport: ["CE", "RoHS", "IP67", "IES файлы", "Протокол испытаний", "Документы для тендера"],
    projectEyebrow: "Опыт проектов",
    projectTitle: "Реальные проекты лучше всего подтверждают доверие",
    projectDescription: "Подготовленные кейсы можно открыть для деталей. Новые проекты можно добавлять постепенно.",
    projectCases: [
      ["Фасадное освещение Almaty Museum of Arts", "/projects/almaty-museum-of-arts-facade-lighting"],
      ["Ночное освещение Zhengjue Temple", ""],
      ["Освещение Guangzhou Digital Culture Valley", "/projects/guangzhou-digital-culture-valley-lighting-design"],
      ["Ночное освещение Quanzhou Riverside", ""],
      ["World Power Battery Conference, Yibin China", ""],
      ["Ландшафтное освещение Standard Chartered Bank Vietnam", ""],
    ],
    workflowEyebrow: "Как мы работаем",
    workflowTitle: "От подготовки продукции до поставки процесс должен быть ясным",
    workflowDescription:
      "Обычно проект начинается с подтверждения сцены и требований, затем переходят к подбору, образцам, документам, производству и поставке.",
    workflowSteps: ["Требования", "Подбор", "Документы", "Поставка"],
    positioningEyebrow: "Позиционирование",
    positioningTitle: "ZOMEI Lighting\nпартнер по наружному проектному освещению",
    positioningDescription:
      "Для архитектурных, ландшафтных, муниципальных и туристических проектов, где нужны поставка, согласование эффекта, кастомизация и поддержка поставки.",
    projectsCta: "Смотреть проекты",
    contactCta: "Связаться",
  },
};

function SectionTitle({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-7 max-w-3xl">
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">{label}</p>
      <h2 className="mt-3 whitespace-pre-line text-[clamp(1.8rem,3vw,2.8rem)] font-semibold leading-[1.08] tracking-tighter3 text-brand-text">
        {title}
      </h2>
      <p className="mt-4 text-[15px] leading-7 text-brand-muted">{description}</p>
    </div>
  );
}

export function AboutContent() {
  const { locale } = useLanguage();
  const pageCopy = copy[locale as "en" | "zh" | "ru"] || copy.zh;

  return (
    <>
      <section className="overflow-hidden border border-brand-line bg-white shadow-soft">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue">{pageCopy.heroEyebrow}</p>
              <h2 className="mt-4 whitespace-pre-line text-[clamp(2.1rem,4vw,4rem)] font-semibold leading-[0.98] tracking-tighter3 text-brand-text">
                {pageCopy.heroTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-[15px] leading-7 text-brand-muted sm:text-base">
                {pageCopy.heroDescription}
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-px border border-brand-line bg-brand-line sm:grid-cols-4">
              {pageCopy.stats.map(([value, label]) => (
                <div key={label} className="bg-[#f8fbff] p-4">
                  <div className="text-[20px] font-extrabold tracking-tight text-brand-blue">{value}</div>
                  <div className="mt-1 text-xs leading-5 text-brand-muted">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#071225] p-6 text-white sm:p-8 lg:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-yellow">{pageCopy.focusEyebrow}</p>
            <h3 className="mt-4 max-w-2xl text-[clamp(1.75rem,3vw,3rem)] font-semibold leading-[1.08] tracking-tighter3">
              {pageCopy.focusTitle}
            </h3>
            <div className="mt-8 grid gap-px bg-white/14 sm:grid-cols-2">
              {pageCopy.focusItems.map((item) => (
                <div key={item} className="min-h-[86px] bg-white/[0.06] p-5">
                  <span className="text-[18px] font-semibold">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-white/72">{pageCopy.focusDescription}</p>
          </div>
        </div>
      </section>

      <section>
        <SectionTitle
          label={pageCopy.capabilityLabel}
          title={pageCopy.capabilityTitle}
          description={pageCopy.capabilityDescription}
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {pageCopy.capabilities.map((item, index) => (
            <article key={item.title} className="overflow-hidden border border-brand-line bg-white shadow-soft">
              <img src={capabilityImages[index]} alt={item.title} className="h-52 w-full object-cover sm:h-60" />
              <div className="p-5 sm:p-6">
                <h3 className="text-[24px] font-semibold tracking-tighter3 text-brand-text">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-muted">{item.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.points.map((point) => (
                    <span key={point} className="border border-brand-line bg-[#f8fbff] px-3 py-2 text-xs font-semibold text-brand-text">
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border border-brand-line bg-white shadow-soft">
        <div className="grid lg:grid-cols-[0.48fr_0.52fr]">
          <div className="bg-[#071225] p-6 text-white sm:p-8 lg:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-yellow">{pageCopy.documentsEyebrow}</p>
            <h2 className="mt-4 whitespace-pre-line text-[clamp(1.8rem,3vw,2.9rem)] font-semibold leading-[1.08] tracking-tighter3">
              {pageCopy.documentsTitle}
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-white/72">{pageCopy.documentsDescription}</p>
          </div>

          <div className="grid gap-px bg-brand-line md:grid-cols-2">
            <article className="bg-white p-6 sm:p-8">
              <h3 className="text-[26px] font-semibold leading-tight tracking-tighter3 text-brand-text">{pageCopy.productTitle}</h3>
              <div className="mt-6 grid gap-2">
                {pageCopy.productSupport.map((item) => (
                  <div key={item} className="border-l-2 border-brand-blue bg-[#f8fbff] px-4 py-3 text-sm font-semibold text-brand-text">
                    {item}
                  </div>
                ))}
              </div>
            </article>
            <article className="bg-white p-6 sm:p-8">
              <h3 className="text-[26px] font-semibold leading-tight tracking-tighter3 text-brand-text">{pageCopy.documentTitle}</h3>
              <div className="mt-6 grid gap-2">
                {pageCopy.documentSupport.map((item) => (
                  <div key={item} className="border border-brand-line px-4 py-3 text-sm font-semibold text-brand-text">
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#071225] text-white shadow-soft">
        <div className="grid lg:grid-cols-[0.48fr_0.52fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-yellow">{pageCopy.projectEyebrow}</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.9rem)] font-semibold leading-[1.08] tracking-tighter3">
              {pageCopy.projectTitle}
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-white/72">{pageCopy.projectDescription}</p>
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {pageCopy.projectCases.map(([name, href], index) => (
              <div key={name} className="group bg-white/[0.04] p-5 transition hover:bg-white/[0.09]">
                <span className="text-xs font-bold tracking-[0.2em] text-brand-yellow">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {href ? (
                  <Link href={href} className="mt-3 block text-[16px] font-semibold leading-7 text-brand-yellow transition group-hover:text-white group-hover:underline group-hover:underline-offset-4">
                    {name}
                  </Link>
                ) : (
                  <h3 className="mt-3 text-[16px] font-semibold leading-7 text-white/84 transition group-hover:text-brand-yellow">
                    {name}
                  </h3>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border border-brand-line bg-white shadow-soft">
        <div className="grid gap-px bg-brand-line lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-white p-6 sm:p-8 lg:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-blue">{pageCopy.workflowEyebrow}</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,2.9rem)] font-semibold leading-[1.08] tracking-tighter3 text-brand-text">
              {pageCopy.workflowTitle}
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-brand-muted">{pageCopy.workflowDescription}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {pageCopy.workflowSteps.map((step, index) => (
                <span key={step} className="border border-brand-line bg-[#f8fbff] px-4 py-3 text-sm font-semibold text-brand-text">
                  {String(index + 1).padStart(2, "0")} / {step}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-[#071225] p-6 text-white sm:p-8 lg:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-yellow">{pageCopy.positioningEyebrow}</p>
            <h2 className="mt-4 whitespace-pre-line text-[clamp(1.8rem,3vw,2.9rem)] font-semibold leading-[1.08] tracking-tighter3">
              {pageCopy.positioningTitle}
            </h2>
            <p className="mt-5 text-[15px] leading-7 text-white/72">{pageCopy.positioningDescription}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/projects" className="action-pill bg-brand-blue text-white hover:bg-white hover:text-brand-text">
                {pageCopy.projectsCta}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="action-pill border border-white/18 bg-white/8 text-white hover:bg-white hover:text-brand-text">
                {pageCopy.contactCta}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
