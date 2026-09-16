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

const pageCopy = {
  en: {
    facts: ["Solution Type", "Applications", "Product Mix", "Project Support"],
    factsUnits: ["scenes", "product types"],
    supportValue: "Selection / Documents / Commissioning",
    engineeringTag: "Engineering development",
    summaryEyebrow: "Solution Summary",
    summaryTitle: "Solution overview",
    overview:
      "This solution helps project buyers quickly understand the application scene, product direction, control needs and delivery support before entering detailed model selection.",
    planningEyebrow: "Planning Logic",
    planningTitle: "Confirm project conditions before choosing fixtures",
    planningDescription:
      "A project solution should explain why the configuration works. ZOMEI reviews site scale, mounting surface, optical target, control method and maintenance conditions together.",
    imageCaption: "The image represents the main application scene. It can be replaced with real project photos or design visuals later.",
    applicationText: "Suitable for project refinement based on mounting conditions, target brightness, visual comfort and maintenance method.",
    productEyebrow: "Product & Control",
    productTitle: "Use a product combination, not a single fixture",
    productDescription:
      "Most projects need functional lighting, accent lighting, ambience lighting and control systems working together.",
    productText:
      "Specific model, wattage, optics, IP rating and accessories can be matched after project conditions are confirmed.",
    supportEyebrow: "Engineering Support",
    supportTitle: "Make the solution easier to quote, develop and deliver",
    supportDescription:
      "ZOMEI can provide product selection, specifications, control advice and delivery coordination around the application scene.",
    cta: "Get Custom Solution",
    deliverableText: "Used for early communication, tender support, quotation, site installation or later maintenance.",
    featuresEyebrow: "Key Features",
    featuresTitle: "Key points",
    featuresDescription: "These points can be refined into fixture selection, installation method and control strategy.",
    featureTitle: "Solution Point",
    featureDetail: "Solution Detail",
    applications: ["Project scene", "Installation area", "Outdoor environment"],
    recommendedProducts: ["Main fixture", "Supporting fixture", "Control system"],
    deliverables: ["Product selection", "Technical documents", "Control suggestion", "Quotation support"],
    designFocus: [
      "Confirm the site scale, viewing distance and mounting conditions first.",
      "Match power, beam angle, color temperature, voltage and control method after the scene is clear.",
      "Keep documents, samples and delivery schedule aligned with the project process.",
    ],
    highlights: [
      "Clear scene-based product direction",
      "Practical configuration for quotation and delivery",
      "Technical support for documents, control and installation",
    ],
  },
  zh: {
    facts: ["方案类型", "应用场景", "推荐组合", "交付支持"],
    factsUnits: ["类", "类产品"],
    supportValue: "选型 / 资料 / 调试",
    engineeringTag: "工程深化",
    summaryEyebrow: "Solution Summary",
    summaryTitle: "方案概览",
    overview: "",
    planningEyebrow: "Planning Logic",
    planningTitle: "先判断项目条件，再进入灯具选型",
    planningDescription:
      "解决方案页不只展示适用场景，更要说明项目为什么这样配置。ZOMEI 会把场地尺度、安装界面、光学目标、控制方式和维护条件放在同一套判断里，帮助客户更快形成可报价、可施工、可验收的方案方向。",
    imageCaption: "方案图片用于表达主要应用场景，后续可替换为真实项目现场或深化效果图。",
    applicationText: "适合结合现场安装条件、目标亮度、视觉舒适度和维护方式进行深化配置。",
    productEyebrow: "Product & Control",
    productTitle: "用产品组合，而不是单一灯具，完成完整照明效果",
    productDescription:
      "同一个项目通常需要功能照明、重点照明、氛围照明和控制系统协同工作。推荐产品组合会根据场地条件继续细化到功率、光束角、色温、控制协议、防护等级和安装附件。",
    productText: "可根据项目尺寸、安装位置、目标照度和控制需求进一步匹配具体型号、功率、光学角度和结构附件。",
    supportEyebrow: "Engineering Support",
    supportTitle: "让方案更容易进入报价、深化和落地",
    supportDescription:
      "客户沟通解决方案时，最需要的不只是几张产品图，而是能够支撑判断的项目资料。ZOMEI 可以围绕应用场景提供选型、规格、控制和交付相关支持。",
    cta: "获取定制方案",
    deliverableText: "用于前期沟通、工程报审、产品报价、现场安装或后续维护，让方案从概念更顺畅地进入项目执行。",
    featuresEyebrow: "Key Features",
    featuresTitle: "核心特点",
    featuresDescription: "这些要点会随项目条件继续细化，最终形成更贴合现场的灯具配置、安装方式和控制策略。",
    featureTitle: "方案重点",
    featureDetail: "方案细节",
    applications: [],
    recommendedProducts: [],
    deliverables: [],
    designFocus: [],
    highlights: [],
  },
  ru: {
    facts: ["Тип решения", "Применение", "Комбинация продуктов", "Поддержка проекта"],
    factsUnits: ["сцены", "типов продукции"],
    supportValue: "Подбор / Документы / Настройка",
    engineeringTag: "Инженерная проработка",
    summaryEyebrow: "Кратко о решении",
    summaryTitle: "Обзор решения",
    overview:
      "Это решение помогает быстро понять сцену применения, направление продукции, требования к управлению и поддержку поставки до детального подбора моделей.",
    planningEyebrow: "Логика планирования",
    planningTitle: "Сначала условия проекта, затем выбор светильников",
    planningDescription:
      "Решение должно объяснять, почему такая конфигурация подходит. ZOMEI вместе рассматривает масштаб объекта, монтажную поверхность, оптическую цель, управление и обслуживание.",
    imageCaption: "Изображение показывает основную сцену применения. Позже его можно заменить реальными фото проекта или визуализацией.",
    applicationText: "Подходит для уточнения с учетом монтажа, целевой яркости, зрительного комфорта и обслуживания.",
    productEyebrow: "Продукция и управление",
    productTitle: "Нужна комбинация продуктов, а не один светильник",
    productDescription:
      "Большинство проектов требует совместной работы функционального, акцентного, атмосферного освещения и систем управления.",
    productText:
      "Модель, мощность, оптика, IP-рейтинг и аксессуары подбираются после подтверждения условий проекта.",
    supportEyebrow: "Инженерная поддержка",
    supportTitle: "Проще перейти к расчету, проработке и поставке",
    supportDescription:
      "ZOMEI может поддержать подбор продукции, спецификации, рекомендации по управлению и координацию поставки.",
    cta: "Получить индивидуальное решение",
    deliverableText: "Используется для первичного общения, тендера, расчета, монтажа или обслуживания.",
    featuresEyebrow: "Ключевые особенности",
    featuresTitle: "Ключевые моменты",
    featuresDescription: "Эти пункты уточняются в подбор светильников, монтаж и стратегию управления.",
    featureTitle: "Фокус решения",
    featureDetail: "Деталь решения",
    applications: ["Сцена проекта", "Зона монтажа", "Наружная среда"],
    recommendedProducts: ["Основной светильник", "Дополнительный светильник", "Система управления"],
    deliverables: ["Подбор продукции", "Технические документы", "Рекомендации по управлению", "Поддержка расчета"],
    designFocus: [
      "Сначала подтвердите масштаб объекта, дистанцию просмотра и монтажные условия.",
      "После этого подбираются мощность, угол, цветовая температура, напряжение и управление.",
      "Документы, образцы и сроки поставки должны соответствовать процессу проекта.",
    ],
    highlights: [
      "Понятное направление продукции по сцене",
      "Практичная конфигурация для расчета и поставки",
      "Техническая поддержка по документам, управлению и монтажу",
    ],
  },
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
  const { locale, t } = useLanguage();
  const copy = pageCopy[locale as "en" | "zh" | "ru"] || pageCopy.zh;
  const title = t(titleKey) as string;
  const applications = locale === "zh" ? solution.applications : copy.applications;
  const recommendedProducts = locale === "zh" ? solution.recommendedProducts : copy.recommendedProducts;
  const deliverables = locale === "zh" ? solution.deliverables : copy.deliverables;
  const designFocus = locale === "zh" ? solution.designFocus : copy.designFocus;
  const highlights = locale === "zh" ? solution.highlights : copy.highlights;
  const overview = locale === "zh" ? solution.overview : copy.overview;
  const description = locale === "zh" ? solution.description : overview;
  const facts = [
    [copy.facts[0], title],
    [copy.facts[1], `${applications.length} ${copy.factsUnits[0]}`],
    [copy.facts[2], `${recommendedProducts.length} ${copy.factsUnits[1]}`],
    [copy.facts[3], copy.supportValue],
  ];
  const tags = [applications[0], applications[1], recommendedProducts[0], copy.engineeringTag].filter(Boolean);

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
              <p className="mt-5 max-w-4xl text-[clamp(1.05rem,2vw,1.55rem)] font-semibold leading-tight text-white/72">{description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-white`}>
        <div className={containerClass}>
          <SectionTitle eyebrow={copy.summaryEyebrow} title={copy.summaryTitle} description={overview} />
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
              eyebrow={copy.planningEyebrow}
              title={copy.planningTitle}
              description={copy.planningDescription}
            />
            <div className="mt-7 space-y-5 text-base leading-8 text-brand-muted">
              {designFocus.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>
          <div className="grid h-full gap-5 sm:grid-cols-2">
            <ImagePanel src={solution.image} alt={title} caption={copy.imageCaption} />
            <div className="grid gap-5">
              {applications.slice(0, 3).map((item, index) => (
                <NumberedCard key={item} number={String(index + 1).padStart(2, "0")} title={item} text={copy.applicationText} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#071b33] text-white`}>
        <div className={containerClass}>
          <SectionTitle
            eyebrow={copy.productEyebrow}
            title={copy.productTitle}
            description={copy.productDescription}
            light
          />
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {recommendedProducts.map((item, index) => (
              <NumberedCard
                key={item}
                number={String(index + 1).padStart(2, "0")}
                title={item}
                text={copy.productText}
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
              eyebrow={copy.supportEyebrow}
              title={copy.supportTitle}
              description={copy.supportDescription}
            />
            <Link href="/contact" className="mt-8 inline-flex min-h-12 items-center gap-3 bg-brand-blue px-6 py-3 text-sm font-bold text-white">
              {copy.cta} <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-px overflow-hidden border border-brand-line bg-brand-line sm:grid-cols-2">
            {deliverables.map((item, index) => (
              <article key={item} className="bg-white p-6">
                <p className="text-[12px] font-bold tracking-[0.18em] text-brand-blue">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-xl font-semibold leading-tight text-brand-text">{item}</h3>
                <p className="mt-4 text-sm leading-7 text-brand-muted">{copy.deliverableText}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={`${sectionClass} bg-[#f5f7fa]`}>
        <div className={containerClass}>
          <SectionTitle eyebrow={copy.featuresEyebrow} title={copy.featuresTitle} description={copy.featuresDescription} />
          <div className="mt-10 grid items-stretch gap-5 md:grid-cols-2 lg:grid-cols-3">
            {highlights.map((item, index) => (
              <NumberedCard key={item} number={String(index + 1).padStart(2, "0")} title={index === 0 ? copy.featureTitle : `${copy.featureDetail} ${index + 1}`} text={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
