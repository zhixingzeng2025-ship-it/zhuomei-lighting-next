"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getProductGroupItems, type ProductGroup } from "@/data/productGroups";
import { productDetailGalleries } from "@/data/productDetailGalleries";
import { productDetailImages } from "@/data/productDetailImages";
import type { ProductSeriesItem } from "@/data/productSeries";
import { ArrowRightIcon, DocIcon } from "@/components/Icons";
import { ProductGallery } from "@/components/ProductGallery";

type ProductSeriesDetailContentProps = {
  group: ProductGroup;
  item: ProductSeriesItem;
};

const copy = {
  en: {
    home: "Home",
    productCenter: "Product Center",
    overview:
      "An outdoor lighting product for architectural facades, landscape spaces and commercial projects. This page keeps the key specifications, applications and document request entry clear for project selection and inquiry.",
    specLabels: {
      model: "Model",
      category: "Category",
      power: "Power",
      cct: "CCT / Color",
      ip: "IP Rating",
      voltage: "Voltage",
      size: "Size",
      beam: "Beam Angle",
      material: "Material",
      status: "Document Status",
      updatedAt: "Updated",
    },
    statusDraft: "To be completed",
    topStats: [
      ["IP Rating", "ip"],
      ["Input Voltage", "voltage"],
      ["Power Range", "power"],
      ["Optics", "beam"],
    ],
    multiBeam: "Multiple beams",
    imagePlaceholder: "Image Placeholder",
    sectionSpec: "Technical Specifications",
    dataNote: "Specifications come from the current product library and can be completed later through local content updates.",
    sectionFeatures: "Key Features & Applications",
    features: [
      "Stable structure for outdoor engineering projects",
      "Beam options for different throw distances and surfaces",
      "Aluminum housing and thermal design for long-term operation",
      "Outdoor waterproof design for facade, landscape and commercial scenes",
      "Clear structure for installation and maintenance",
      "Suitable as a base model for selection, inquiry and project discussion",
    ],
    applications: ["Building facade", "Commercial plaza", "Landscape area", "Road & public space", "Hotel & urban project", "Outdoor decorative lighting"],
    applicationTitle: "Applications",
    detailTitle: "Product Details",
    detailCards: [
      ["Optical Control", "Beam configuration can be matched to mounting distance and target surface."],
      ["Outdoor Reliability", "Outdoor-rated structure for long-term installation and use."],
      ["Installation Fit", "Clear size information supports design coordination, installation and maintenance."],
    ],
    downloadTitle: "Request Product Documents",
    downloads: [
      ["Download Datasheet", "Request specifications, dimensions and installation information for this model."],
      ["IES / Photometric File", "Ask for the photometric file by model, beam angle and project application."],
      ["CE / RoHS / IP Test Report", "Confirm available certification and test documents before quotation or tender submission."],
    ],
    similarTitle: "Similar Products",
    ctaTitle: "Need a custom lighting solution?",
    ctaText: "Share your project scene, installation conditions and lighting requirements. We can help match a practical product solution.",
    contact: "Contact Us",
    requestQuote: "Request Quote",
    mobileDownloads: ["Request Datasheet", "Request IES File", "CE / RoHS / IP Test Report"],
  },
  zh: {
    home: "首页",
    productCenter: "产品中心",
    overview:
      "面向建筑立面、景观空间和商业项目的户外照明产品。页面保留核心规格、产品特点、应用场景和资料下载入口，方便项目选型与询盘沟通。",
    specLabels: {
      model: "型号",
      category: "产品分类",
      power: "功率",
      cct: "色温",
      ip: "防护等级",
      voltage: "电压",
      size: "尺寸",
      beam: "光束角",
      material: "材质",
      status: "资料状态",
      updatedAt: "更新日期",
    },
    statusDraft: "待完善",
    topStats: [
      ["防护等级", "ip"],
      ["输入电压", "voltage"],
      ["功率范围", "power"],
      ["光学角度", "beam"],
    ],
    multiBeam: "多角度",
    imagePlaceholder: "图片占位",
    sectionSpec: "技术规格",
    dataNote: "产品数据来源于当前产品资料库，缺失信息后续可通过本地内容管理后台继续补齐。",
    sectionFeatures: "核心特点与应用场景",
    features: [
      "适用于户外工程项目的稳定结构",
      "支持多种光束角，匹配不同照射距离",
      "铝合金外壳与散热结构，适合长期运行",
      "户外防水设计，适合立面、景观与商业空间",
      "结构清晰，便于项目安装与后期维护",
      "可作为工程选型、询盘和方案沟通基础资料",
    ],
    applications: ["建筑立面", "商业广场", "景观区域", "道路与公共空间", "酒店与城市项目", "户外装饰照明"],
    applicationTitle: "适用场景",
    detailTitle: "产品细节",
    detailCards: [
      ["光学控制", "支持多种光束角选择，可根据安装距离和目标照射面进行匹配。"],
      ["户外可靠性", "户外防护结构设计，适合户外项目长期安装与使用。"],
      ["安装适配", "保留清晰尺寸信息，方便深化设计、施工协调与现场安装。"],
    ],
    downloadTitle: "申请产品资料",
    downloads: [
      ["产品规格书", "申请该型号的规格参数、尺寸和安装资料。"],
      ["IES / 光度文件", "可按型号、角度和项目应用申请光度文件。"],
      ["CE / RoHS / IP 检测报告", "报价或报审前可确认可提供的认证与检测资料。"],
    ],
    similarTitle: "类似产品",
    ctaTitle: "需要定制照明方案？",
    ctaText: "告诉我们项目场景、安装条件与照明需求，我们可以协助匹配合适的产品方案。",
    contact: "联系我们",
    requestQuote: "获取报价",
    mobileDownloads: ["申请规格书", "申请 IES 文件", "CE / RoHS / IP 检测报告"],
  },
  ru: {
    home: "Главная",
    productCenter: "Центр продукции",
    overview:
      "Продукт наружного освещения для фасадов, ландшафтных пространств и коммерческих проектов. На странице собраны ключевые характеристики, применение и запрос документов для быстрого подбора.",
    specLabels: {
      model: "Модель",
      category: "Категория",
      power: "Мощность",
      cct: "CCT / Цвет",
      ip: "Степень защиты",
      voltage: "Напряжение",
      size: "Размер",
      beam: "Угол луча",
      material: "Материал",
      status: "Статус документов",
      updatedAt: "Обновлено",
    },
    statusDraft: "Будет дополнено",
    topStats: [
      ["IP", "ip"],
      ["Напряжение", "voltage"],
      ["Мощность", "power"],
      ["Оптика", "beam"],
    ],
    multiBeam: "Несколько углов",
    imagePlaceholder: "Место для изображения",
    sectionSpec: "Технические характеристики",
    dataNote: "Характеристики взяты из текущей базы продукции и могут быть дополнены позже.",
    sectionFeatures: "Особенности и применение",
    features: [
      "Надежная конструкция для наружных инженерных проектов",
      "Варианты угла луча для разных дистанций и поверхностей",
      "Алюминиевый корпус и тепловой дизайн для долгой работы",
      "Влагозащищенная конструкция для фасадов, ландшафта и коммерческих объектов",
      "Понятная конструкция для монтажа и обслуживания",
      "Подходит как базовая модель для подбора, запроса и обсуждения проекта",
    ],
    applications: ["Фасад здания", "Коммерческая площадь", "Ландшафтная зона", "Дорога и общественное пространство", "Отель и городской проект", "Декоративное наружное освещение"],
    applicationTitle: "Применение",
    detailTitle: "Детали продукта",
    detailCards: [
      ["Оптический контроль", "Оптика подбирается по монтажной дистанции и целевой поверхности."],
      ["Надежность снаружи", "Конструкция для долгосрочной наружной установки и эксплуатации."],
      ["Адаптация монтажа", "Размеры помогают при проектной координации, установке и обслуживании."],
    ],
    downloadTitle: "Запросить документы по продукту",
    downloads: [
      ["Datasheet", "Запросите спецификации, размеры и монтажную информацию по этой модели."],
      ["IES / фотометрия", "Запросите фотометрический файл по модели, углу луча и применению."],
      ["CE / RoHS / IP", "Уточните доступные сертификаты и протоколы испытаний перед расчетом."],
    ],
    similarTitle: "Похожие продукты",
    ctaTitle: "Нужно индивидуальное световое решение?",
    ctaText: "Отправьте сцену проекта, условия монтажа и требования к свету. Мы поможем подобрать практичное решение.",
    contact: "Связаться с нами",
    requestQuote: "Запросить расчет",
    mobileDownloads: ["Запросить datasheet", "Запросить IES", "CE / RoHS / IP протокол"],
  },
};

const categoryLabels = {
  en: {
    "linear-lighting": "Linear Lighting",
    "projector-light": "Projector Light",
    "point-light-source": "Point Light Source",
    "wall-lamp": "Wall Lamp",
    "general-lighting": "General Lighting",
    "specialty-lighting": "Specialty Lighting",
  },
  zh: {},
  ru: {
    "linear-lighting": "Линейное освещение",
    "projector-light": "Проекторный светильник",
    "point-light-source": "Точечный источник",
    "wall-lamp": "Настенный светильник",
    "general-lighting": "Общее освещение",
    "specialty-lighting": "Специальное освещение",
  },
};

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-7">
      <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-blue">{eyebrow}</p>
      <h2 className="mt-2 border-l-4 border-brand-gold pl-3 text-[26px] font-semibold tracking-tighter3 text-brand-text">
        {title}
      </h2>
    </div>
  );
}

export function ProductSeriesDetailContent({ group, item }: ProductSeriesDetailContentProps) {
  const { locale } = useLanguage();
  const pageCopy = copy[locale as keyof typeof copy] || copy.en;
  const groupLabel =
    locale === "zh"
      ? group.labels.zh
      : categoryLabels[locale as "en" | "ru"]?.[group.slug as keyof typeof categoryLabels.en] || group.labels.en;
  const productName = locale === "zh" ? item.name : `${item.code} ${groupLabel}`;

  const specs = [
    [pageCopy.specLabels.model, item.model],
    [pageCopy.specLabels.category, groupLabel],
    [pageCopy.specLabels.power, item.power],
    [pageCopy.specLabels.cct, item.cct],
    [pageCopy.specLabels.ip, item.ip],
    [pageCopy.specLabels.voltage, item.voltage],
    [pageCopy.specLabels.size, item.size],
    [pageCopy.specLabels.beam, item.beam],
    [pageCopy.specLabels.material, item.material],
    [pageCopy.specLabels.status, item.status === "待完善" ? pageCopy.statusDraft : item.status],
    [pageCopy.specLabels.updatedAt, item.updatedAt],
  ];

  const detailCards = pageCopy.detailCards.map(([title, text], index) => ({
    title,
    text:
      index === 0 && item.beam
        ? item.beam
        : index === 1 && item.ip
          ? `${item.ip} ${text}`
          : index === 2 && item.size
            ? item.size
            : text,
  }));

  const groupItems = getProductGroupItems(group);
  const similarProducts = groupItems.filter((entry) => entry.id !== item.id).slice(0, 4);
  const detailImage = productDetailImages[item.code];
  const galleryImages = productDetailGalleries[item.code]?.length
    ? productDetailGalleries[item.code]
    : detailImage
      ? [detailImage, detailImage, detailImage, detailImage]
      : [];

  const lightImage = detailImage ? (
    <img src={detailImage} alt={productName} className="mx-auto h-full max-h-full w-full max-w-[82%] object-contain" />
  ) : (
    <div className="grid h-full min-h-[150px] place-items-center border border-dashed border-[#bccde0] bg-[#f8fbff] text-center text-brand-muted">
      <span className="text-xs font-semibold uppercase tracking-[0.12em]">{pageCopy.imagePlaceholder}</span>
    </div>
  );

  return (
    <article className="bg-white pb-20 text-brand-text">
      <section className="relative overflow-hidden bg-[#050914] pt-10 text-white md:pt-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(37,99,255,0.24),transparent_34%),linear-gradient(90deg,rgba(5,9,20,0.98),rgba(5,9,20,0.84)_48%,rgba(5,9,20,0.98))]" />
        <div className="page-container relative">
          <nav className="mb-6 text-[13px] text-white/68">
            <Link href="/" className="hover:text-white">{pageCopy.home}</Link>
            <span className="mx-2">&gt;</span>
            <Link href="/products" className="hover:text-white">{pageCopy.productCenter}</Link>
            <span className="mx-2">&gt;</span>
            <Link href={`/products/${group.slug}`} className="hover:text-white">{groupLabel}</Link>
            <span className="mx-2">&gt;</span>
            <span>{item.code}</span>
          </nav>

          <div className="grid min-h-[500px] gap-7 pb-10 lg:grid-cols-[minmax(0,1.06fr)_minmax(400px,0.94fr)] lg:items-start lg:gap-10">
            <ProductGallery images={galleryImages} alt={productName} />
            <div className="pb-4 lg:pb-0 lg:pt-0">
              <h1 className="text-[clamp(2.05rem,10vw,4.45rem)] leading-[1.02] font-extrabold tracking-tighter3 md:leading-[0.98]">
                {item.code}
              </h1>
              <p className="mt-3 text-[clamp(1.1rem,1.55vw,1.55rem)] font-semibold tracking-tight text-white/92">
                {productName}
              </p>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/76">{pageCopy.overview}</p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {pageCopy.topStats.map(([label, key]) => {
                  const value = key === "beam" ? (item.beam ? pageCopy.multiBeam : "-") : String(item[key as keyof ProductSeriesItem] || "-");
                  return (
                    <div key={label} className="min-w-0 overflow-hidden border border-white/20 bg-white/[0.04] p-3.5">
                      <div className="text-[12px] text-white/54">{label}</div>
                      <div className="mt-2 min-w-0 break-words text-[14px] font-extrabold leading-snug text-white xl:text-[15px]">{value}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-container py-6 lg:hidden">
        <div className="grid gap-3">
          <details open className="border border-brand-line bg-white">
            <summary className="cursor-pointer list-none p-4 text-[15px] font-extrabold text-brand-text">Overview</summary>
            <div className="border-t border-brand-line p-4">
              <p className="text-sm leading-7 text-brand-muted">{productName}</p>
            </div>
          </details>
          <details className="border border-brand-line bg-white">
            <summary className="cursor-pointer list-none p-4 text-[15px] font-extrabold text-brand-text">Specs</summary>
            <div className="border-t border-brand-line p-4">
              {specs.slice(0, 10).map(([label, value]) => (
                <div key={`${label}-${value}`} className="grid grid-cols-[92px_minmax(0,1fr)] gap-3 border-b border-brand-line py-2 text-[13px] leading-6">
                  <span className="font-bold text-brand-text">{label}</span>
                  <span className="min-w-0 break-words text-brand-muted">{value || "-"}</span>
                </div>
              ))}
            </div>
          </details>
          <details className="border border-brand-line bg-white">
            <summary className="cursor-pointer list-none p-4 text-[15px] font-extrabold text-brand-text">Downloads</summary>
            <div className="grid gap-3 border-t border-brand-line p-4">
              {pageCopy.mobileDownloads.map((label) => (
                <Link key={label} href="/contact" className="flex min-h-12 items-center justify-between border border-brand-line bg-[#f8fbff] px-4 text-sm font-semibold text-brand-text">
                  {label}
                  <DocIcon className="h-4 w-4 text-brand-blue" />
                </Link>
              ))}
            </div>
          </details>
        </div>
      </section>

      <div className="page-container hidden lg:block">
        <section className="py-14">
          <SectionTitle eyebrow="Specification" title={pageCopy.sectionSpec} />
          <div className="grid overflow-hidden border border-[#d4e5f5] bg-white shadow-[0_24px_80px_rgba(17,58,141,0.1)] lg:grid-cols-[380px_minmax(0,1fr)]">
            <div className="border-b border-[#d4e5f5] bg-[linear-gradient(180deg,#f8fbff,#eef6ff)] p-8 lg:border-b-0 lg:border-r">
              <div className="h-72 bg-white p-6 shadow-inner">{lightImage}</div>
              <p className="mt-5 text-sm leading-7 text-brand-muted">{pageCopy.dataNote}</p>
            </div>
            <div className="p-8">
              <div className="grid gap-x-8 gap-y-4 xl:grid-cols-2">
                {specs.map(([label, value]) => (
                  <div key={`${label}-${value}`} className="grid min-w-0 grid-cols-[110px_minmax(0,1fr)] gap-5 border-b border-[#dbe7f3] pb-4 text-[15px] leading-7">
                    <span className="font-extrabold text-brand-text">{label}</span>
                    <span className="min-w-0 whitespace-pre-wrap break-words text-brand-muted">{value || "-"}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-brand-line py-12">
          <SectionTitle eyebrow="Features / Applications" title={pageCopy.sectionFeatures} />
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_0.72fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {pageCopy.features.map((feature) => (
                <div key={feature} className="flex gap-4 border border-[#dcebf8] bg-[#f8fbff] p-4 text-[15px] leading-7 text-brand-text">
                  <span className="mt-2.5 h-2 w-2 flex-none bg-brand-blue" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div className="border border-[#d4e5f5] bg-white p-6 shadow-soft">
              <h3 className="text-[18px] font-semibold tracking-tighter3 text-brand-text">{pageCopy.applicationTitle}</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {pageCopy.applications.map((application) => (
                  <div key={application} className="flex items-center gap-3 bg-[#f8fbff] px-4 py-3 text-[14px] font-semibold text-brand-text">
                    <span className="h-1.5 w-1.5 flex-none bg-brand-gold" />
                    {application}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-brand-line py-12">
          <SectionTitle eyebrow="Details" title={pageCopy.detailTitle} />
          <div className="grid gap-5 md:grid-cols-3">
            {detailCards.map((card) => (
              <div key={card.title} className="border border-[#d4e5f5] bg-[#f8fbff] p-6 shadow-soft">
                <div className="mb-5 h-36 bg-gradient-to-b from-white to-[#d6eafa] p-4">{lightImage}</div>
                <h3 className="text-[18px] font-semibold tracking-tighter3 text-brand-text">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-brand-line py-12">
          <SectionTitle eyebrow="Download" title={pageCopy.downloadTitle} />
          <div className="grid gap-5 md:grid-cols-3">
            {pageCopy.downloads.map(([title, text]) => (
              <Link key={title} href="/contact" className="group border border-[#d4e5f5] bg-[#f8fbff] p-6 shadow-soft transition hover:border-brand-gold hover:bg-white">
                <div className="mb-5 grid h-24 place-items-center bg-gradient-to-b from-white to-[#d6eafa] text-brand-blue">
                  <DocIcon className="h-9 w-9 transition group-hover:text-brand-gold" />
                </div>
                <h3 className="text-[18px] font-semibold tracking-tighter3 text-brand-text">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{text}</p>
              </Link>
            ))}
          </div>
        </section>

        {similarProducts.length > 0 ? (
          <section className="border-t border-brand-line py-12">
            <SectionTitle eyebrow="Similar Products" title={pageCopy.similarTitle} />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {similarProducts.map((similar) => {
                const similarImage = productDetailImages[similar.code] || detailImage;
                return (
                  <Link key={similar.id} href={`/products/${group.slug}/${similar.id}`} className="group border border-[#d4e5f5] bg-white shadow-soft transition hover:-translate-y-1 hover:border-brand-gold">
                    <div className="h-40 bg-[#f8fbff] p-5">
                      {similarImage ? (
                        <img src={similarImage} alt={similar.name} className="h-full w-full object-contain transition group-hover:scale-[1.04]" />
                      ) : (
                        lightImage
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-brand-text">{similar.code}</h3>
                      <p className="mt-1 line-clamp-2 text-xs leading-5 text-brand-muted">{locale === "zh" ? similar.name : `${similar.code} ${groupLabel}`}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ) : null}

        <section className="grid gap-6 bg-[#061229] p-7 text-white md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-[28px] font-semibold tracking-tighter3">{pageCopy.ctaTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-white/70">{pageCopy.ctaText}</p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand-gold px-6 py-4 text-sm font-semibold text-[#061229]">
            {pageCopy.contact} <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </article>
  );
}
