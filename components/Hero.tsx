"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";
import { ArrowRightIcon } from "./Icons";

type HeroSlide = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imagePosition?: string;
  primary: string;
  href: string;
  secondary: string;
  secondaryHref: string;
  panelEyebrow: string;
  panelTitle: string;
  panelLead: string;
  bullets: string[];
  focus: Array<{
    value: string;
    label: string;
  }>;
};

export function Hero() {
  const { locale, t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = useMemo(() => {
    const copy: Record<string, HeroSlide[]> = {
      en: [
        {
          eyebrow: "Lighting Solutions · Project Delivery",
          title: "Outdoor Lighting Solutions Built Around Real Projects",
          description: "We connect lighting design, product selection, supply and commissioning for facades, landscapes, roads and commercial outdoor spaces.",
          image: "/images/projects/almaty-museum/web/zomei-almaty-museum-facade-lighting-p01-final-night-hero.jpg",
          imagePosition: "center",
          primary: "Explore Solutions",
          href: "/solutions",
          secondary: "View Projects",
          secondaryHref: "/projects",
          panelEyebrow: "Project Capability",
          panelTitle: "From concept to controllable night scenes",
          panelLead: "A project is planned as a complete lighting system, not a single fixture list.",
          bullets: [
            "Facade, landscape, road and public-space lighting",
            "DMX512 scenes, zoning and commissioning logic",
            "Supply coordination for international project timelines",
          ],
          focus: [
            { value: "01", label: "Solution Strategy" },
            { value: "02", label: "Product Matching" },
            { value: "03", label: "Site Follow-up" },
          ],
        },
        {
          eyebrow: "Design Development · Mock-up · Control",
          title: "Lighting Design Refined Through Details",
          description: "From visual hierarchy and beam control to mounting nodes and on-site aiming, every design decision is checked against the building surface.",
          image: "/images/projects/guangzhou-digital-culture-valley/web/rendering-concept.jpg",
          imagePosition: "center",
          primary: "View Design Cases",
          href: "/projects",
          secondary: "Contact Team",
          secondaryHref: "/contact",
          panelEyebrow: "Design Capability",
          panelTitle: "Rhythm, glare control and installation depth",
          panelLead: "Design work continues into samples, accessories, aiming angles and control scenes.",
          bullets: [
            "Facade rhythm and night-time visual hierarchy",
            "Baffles, brackets, angle control and installation nodes",
            "Mock-up testing before batch supply and final tuning",
          ],
          focus: [
            { value: "CAD", label: "Node Deepening" },
            { value: "RGBW", label: "Color & Scene" },
            { value: "DMX", label: "Control Logic" },
          ],
        },
        {
          eyebrow: "Product Data · Series Selection",
          title: "Product Information Ready for Project Selection",
          description: "Enter by category, compare model data and match power, beam angle, size, material and accessories to the project requirement.",
          image: "/images/generated/products-overview.png",
          imagePosition: "center",
          primary: "Browse Products",
          href: "/products",
          secondary: "Request Data",
          secondaryHref: "/contact",
          panelEyebrow: "Product Capability",
          panelTitle: "Clear model data for faster decisions",
          panelLead: "The product system is organized around selection, specification and stable delivery.",
          bullets: [
            "Wall washer, linear, projector, flood and point-light series",
            "Power, CCT, beam angle, IP rating, material and accessories",
            "OEM/ODM, certification documents and warranty support",
          ],
          focus: [
            { value: "IP65+", label: "Outdoor Protection" },
            { value: "CE", label: "Certified Supply" },
            { value: "OEM", label: "Customization" },
          ],
        },
      ],
      zh: [
        {
          eyebrow: "照明解决方案 · 项目交付",
          title: "面向真实项目的户外照明解决方案",
          description: "把照明设计、产品选型、供货与调试连接起来，服务建筑立面、景观、道路和商业户外空间。",
          image: "/images/projects/almaty-museum/web/zomei-almaty-museum-facade-lighting-p01-final-night-hero.jpg",
          imagePosition: "center",
          primary: "查看解决方案",
          href: "/solutions",
          secondary: "查看项目",
          secondaryHref: "/projects",
          panelEyebrow: "PROJECT CAPABILITY",
          panelTitle: "从设计概念到可控夜景系统",
          panelLead: "项目不是简单堆叠灯具，而是建立一套能被设计、产品和现场共同验证的照明系统。",
          bullets: [
            "建筑立面、景观、道路与公共空间照明",
            "DMX512 场景、分区与调试逻辑",
            "匹配国际项目节奏的供货与现场协同",
          ],
          focus: [
            { value: "01", label: "方案规划" },
            { value: "02", label: "产品匹配" },
            { value: "03", label: "现场跟进" },
          ],
        },
        {
          eyebrow: "设计深化 · 样板试灯 · 控制系统",
          title: "让照明设计落到结构与节点",
          description: "从视觉层次、配光控制，到安装节点、挡光配件和现场投射角度，让每一次设计判断都回到建筑表面。",
          image: "/images/projects/guangzhou-digital-culture-valley/web/rendering-concept.jpg",
          imagePosition: "center",
          primary: "查看设计案例",
          href: "/projects",
          secondary: "联系团队",
          secondaryHref: "/contact",
          panelEyebrow: "DESIGN CAPABILITY",
          panelTitle: "韵律、控光与安装深化",
          panelLead: "设计能力体现在效果图之外，也体现在样板、配件、角度和控制场景的持续校准。",
          bullets: [
            "建筑立面节奏与夜间视觉层次",
            "挡板、支架、角度控制与安装节点",
            "批量供货前的样板测试和最终调试",
          ],
          focus: [
            { value: "CAD", label: "节点深化" },
            { value: "RGBW", label: "光色场景" },
            { value: "DMX", label: "控制逻辑" },
          ],
        },
        {
          eyebrow: "产品数据 · 系列选型",
          title: "从产品分类进入项目选型资料",
          description: "按系列进入型号数据，快速比较功率、角度、尺寸、材质、配件与控制方式，让产品信息真正服务项目决策。",
          image: "/images/generated/products-overview.png",
          imagePosition: "center",
          primary: "浏览产品",
          href: "/products",
          secondary: "获取资料",
          secondaryHref: "/contact",
          panelEyebrow: "PRODUCT CAPABILITY",
          panelTitle: "清晰型号资料，提升选型效率",
          panelLead: "产品体系围绕选型、参数确认和稳定交付组织，减少沟通成本。",
          bullets: [
            "洗墙灯、线条灯、投光灯、泛光灯与点光源系列",
            "功率、色温、角度、防护、材质与配件数据",
            "OEM/ODM、认证文件与质保支持",
          ],
          focus: [
            { value: "IP65+", label: "户外防护" },
            { value: "CE", label: "认证供货" },
            { value: "OEM", label: "定制能力" },
          ],
        },
      ],
      ru: [
        {
          eyebrow: "Световые решения · Проектная поставка",
          title: "Наружное освещение для реальных проектов",
          description: "Мы объединяем световой дизайн, подбор продукции, поставку и пусконаладку для фасадов, ландшафтов, дорог и коммерческих пространств.",
          image: "/images/projects/almaty-museum/web/zomei-almaty-museum-facade-lighting-p01-final-night-hero.jpg",
          imagePosition: "center",
          primary: "Смотреть решения",
          href: "/solutions",
          secondary: "Смотреть проекты",
          secondaryHref: "/projects",
          panelEyebrow: "Проектные возможности",
          panelTitle: "От концепции к управляемой ночной среде",
          panelLead: "Проект рассматривается как единая система освещения, а не как простой перечень светильников.",
          bullets: [
            "Фасады, ландшафты, дороги и общественные пространства",
            "Сцены DMX512, зонирование и логика настройки",
            "Поставка и координация для международных графиков",
          ],
          focus: [
            { value: "01", label: "Стратегия" },
            { value: "02", label: "Подбор" },
            { value: "03", label: "Объект" },
          ],
        },
        {
          eyebrow: "Проработка · Макетирование · Управление",
          title: "Световой дизайн, доведенный до узлов",
          description: "От визуальной иерархии и оптики до монтажных узлов и настройки угла светильника на объекте.",
          image: "/images/projects/guangzhou-digital-culture-valley/web/rendering-concept.jpg",
          imagePosition: "center",
          primary: "Смотреть кейсы",
          href: "/projects",
          secondary: "Связаться",
          secondaryHref: "/contact",
          panelEyebrow: "Дизайн",
          panelTitle: "Ритм, контроль света и монтажные детали",
          panelLead: "Дизайн продолжается в образцах, аксессуарах, углах наведения и сценариях управления.",
          bullets: [
            "Ритм фасада и ночная визуальная иерархия",
            "Экраны, кронштейны, углы и монтажные узлы",
            "Тестирование образцов до серийной поставки",
          ],
          focus: [
            { value: "CAD", label: "Узлы" },
            { value: "RGBW", label: "Сцены" },
            { value: "DMX", label: "Управление" },
          ],
        },
        {
          eyebrow: "Данные продукции · Подбор серий",
          title: "Информация о продукции для проектного подбора",
          description: "Переходите по категориям, сравнивайте модели и подбирайте мощность, угол, размер, материал и аксессуары под задачу проекта.",
          image: "/images/generated/products-overview.png",
          imagePosition: "center",
          primary: "Смотреть продукцию",
          href: "/products",
          secondary: "Запросить данные",
          secondaryHref: "/contact",
          panelEyebrow: "Продукция",
          panelTitle: "Четкие данные моделей для быстрых решений",
          panelLead: "Система продукции организована вокруг подбора, спецификации и стабильной поставки.",
          bullets: [
            "Wall washer, linear, projector, flood и point-light серии",
            "Мощность, CCT, угол, IP, материал и аксессуары",
            "OEM/ODM, сертификаты и гарантийная поддержка",
          ],
          focus: [
            { value: "IP65+", label: "Защита" },
            { value: "CE", label: "Документы" },
            { value: "OEM", label: "Кастомизация" },
          ],
        },
      ],
    };
    return copy[locale] || copy.en;
  }, [locale]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((value) => (value + 1) % slides.length);
    }, 9500);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const slide = slides[activeSlide] || slides[0];

  return (
    <section className="relative -mt-[92px] min-h-[720px] overflow-hidden bg-brand-navy text-white">
      {slides.map((item, index) => (
        <div
          key={item.title}
          className={[
            "absolute inset-0 bg-cover bg-center transition-opacity duration-700",
            index === activeSlide ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{
            backgroundImage: `url('${item.image}')`,
            backgroundPosition: item.imagePosition || "center",
          }}
          aria-hidden="true"
        />
      ))}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,12,27,0.98)_0%,rgba(4,16,37,0.88)_42%,rgba(4,16,37,0.58)_68%,rgba(4,16,37,0.22)_100%)]" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-brand-navy to-transparent" aria-hidden="true" />

      <div className="page-container relative flex min-h-[calc(100svh-76px)] flex-col justify-center pb-10 pt-24 md:min-h-[720px] md:pb-12 md:pt-[132px]">
        <div className="grid items-end gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,420px)] xl:gap-12">
          <div className="pb-4">
            <p className="eyebrow eyebrow-light">{slide.eyebrow}</p>
            <h1 className="max-w-[900px] text-[clamp(2.35rem,5.4vw,4.75rem)] font-semibold leading-[1.02]">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-[760px] text-[clamp(1rem,1.25vw,1.18rem)] leading-8 text-white/78">
              {slide.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={slide.href}
                className="action-pill bg-brand-blue text-white shadow-[0_16px_34px_rgba(37,99,255,0.28)] hover:bg-brand-deep"
              >
                {slide.primary}
              </Link>
              <Link
                href={slide.secondaryHref}
                className="action-pill border border-white/35 bg-transparent text-white backdrop-blur-xl hover:bg-white/12"
              >
                {slide.secondary}
              </Link>
            </div>

            <div className="mt-8 grid max-w-3xl grid-cols-1 gap-2 sm:grid-cols-3">
              {slide.focus.map((item) => (
                <span
                  key={`${item.value}-${item.label}`}
                  className="border border-white/12 bg-white/[0.07] px-4 py-3 backdrop-blur-xl"
                >
                  <strong className="block text-sm font-semibold tracking-[0.16em] text-brand-gold">{item.value}</strong>
                  <span className="mt-1 block text-[13px] font-semibold text-white/82">{item.label}</span>
                </span>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-3">
              {slides.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Show banner ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className={[
                    "h-1.5 transition-all",
                    index === activeSlide ? "w-12 bg-brand-gold" : "w-7 bg-white/35 hover:bg-white/60",
                  ].join(" ")}
                />
              ))}
              <span className="ml-2 text-[12px] font-semibold tracking-[0.18em] text-white/70">
                0{activeSlide + 1} / 03
              </span>
            </div>

            <div className="mt-7 grid max-w-4xl grid-cols-2 gap-px overflow-hidden border border-white/14 bg-white/12 sm:grid-cols-5">
              {siteConfig.stats.map((item) => (
                <span
                  key={item.label}
                  className="grid min-h-[74px] content-center bg-black/26 px-4 text-[12px] uppercase tracking-[0.06em] text-white/66 backdrop-blur-xl"
                >
                  <strong className="mb-1 block text-[16px] font-semibold normal-case tracking-normal text-white">{item.value}</strong>
                  {t(item.labelKey || item.label)}
                </span>
              ))}
            </div>
          </div>

          <aside className="border border-white/14 bg-[#111827]/74 p-6 shadow-glass backdrop-blur-xl lg:self-end">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-white/70">
              {slide.panelEyebrow}
            </p>
            <h2 className="mt-3 text-[clamp(1.42rem,2vw,2rem)] font-semibold leading-tight text-white">
              {slide.panelTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/68">
              {slide.panelLead}
            </p>
            <ul className="mt-5 grid gap-3 text-sm leading-6 text-white/80">
              {slide.bullets.map((item) => (
                <li
                  key={item}
                  className="relative pl-6 before:absolute before:left-0 before:top-[0.62em] before:h-2 before:w-2 before:bg-brand-gold"
                >
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white"
            >
              {t("hero.requestSolution")} <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
