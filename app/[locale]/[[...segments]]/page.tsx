import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "@/app/page";
import AboutPage from "@/app/about/page";
import BlogPage from "@/app/blog/page";
import BlogArticlePage from "@/app/blog/[slug]/page";
import ContactPage from "@/app/contact/page";
import ProductsPage from "@/app/products/page";
import ProductCategoryPage from "@/app/products/[slug]/page";
import ProductSeriesDetailPage from "@/app/products/[slug]/[itemId]/page";
import ProjectsPage from "@/app/projects/page";
import ProjectDetailPage from "@/app/projects/[slug]/page";
import SolutionsPage from "@/app/solutions/page";
import SolutionDetailPage from "@/app/solutions/[slug]/page";
import { type Locale, locales } from "@/lib/i18n";
import { blogArticles, getBlogArticle, localizeBlogArticle } from "@/data/blog";
import { getProductGroup, getProductGroupItems, productGroups } from "@/data/productGroups";
import { getRepresentativeProductProfile } from "@/data/representativeProducts";
import { productSeries } from "@/data/productSeries";
import { projects } from "@/data/projects";
import { solutions } from "@/data/solutions";
import { productDetailGalleries } from "@/data/productDetailGalleries";

type PageParams = { locale: string; segments?: string[] };

const localeNames: Record<Locale, string> = {
  en: "English",
  zh: "简体中文",
  ru: "Русский",
};

const staticMetadata: Record<Locale, Record<string, [string, string]>> = {
  en: {
    home: ["Architectural & Outdoor Lighting for Real Projects", "Outdoor LED lighting products, facade lighting solutions, OEM/ODM manufacturing and delivery support for global engineering buyers."],
    products: ["Outdoor LED Lighting Products", "Explore ZOMEI architectural and outdoor LED lighting product series, specifications and project inquiry support."],
    solutions: ["Outdoor Lighting Solutions", "Outdoor lighting solutions for facades, landscapes, roads, parks, industrial areas and public spaces."],
    projects: ["Outdoor Lighting Project Cases", "Real outdoor lighting projects with products used, technical challenges, service scope and delivery results."],
    blog: ["Lighting Knowledge and Project Insights", "Product selection guides, lighting engineering knowledge and project experience for global buyers."],
    about: ["About ZOMEI Lighting", "Outdoor lighting manufacturing, testing, customization and project delivery support for global engineering clients."],
    contact: ["Contact ZOMEI Lighting", "Request product selection, quotation, technical documents and outdoor lighting project support."],
  },
  zh: {
    home: ["面向工程项目的户外建筑照明解决方案", "卓美照明提供户外照明产品、建筑立面照明方案、定制生产和工程交付支持。"],
    products: ["户外 LED 照明产品", "查看卓美户外建筑、景观、道路和工程照明产品系列、规格与询盘支持。"],
    solutions: ["户外照明解决方案", "建筑立面、景观、道路、公园、工业与公共空间照明解决方案。"],
    projects: ["户外照明项目案例", "通过真实效果、使用产品、技术难点和交付结果了解卓美照明项目经验。"],
    blog: ["照明知识与项目洞察", "面向工程客户的产品选型指南、照明技术知识和项目经验。"],
    about: ["关于卓美照明", "了解卓美照明的户外灯具制造、测试验证、定制与工程交付能力。"],
    contact: ["联系卓美照明", "获取产品选型、工程报价、技术资料和项目交付支持。"],
  },
  ru: {
    home: ["Архитектурное и наружное освещение для реальных проектов", "Наружные LED-светильники, фасадные решения, OEM/ODM и поддержка инженерных проектов."],
    products: ["Наружное светодиодное освещение", "Линейки наружных и архитектурных LED-светильников ZOMEI, характеристики и поддержка проекта."],
    solutions: ["Решения для наружного освещения", "Освещение фасадов, ландшафтов, дорог, парков, промышленных и общественных пространств."],
    projects: ["Проекты наружного освещения", "Реальные проекты с применёнными светильниками, техническими задачами и результатами поставки."],
    blog: ["Знания об освещении и опыт проектов", "Руководства по выбору продукции, инженерные знания и опыт проектов наружного освещения."],
    about: ["О компании ZOMEI Lighting", "Производство, испытания, кастомизация и поддержка поставок наружного освещения."],
    contact: ["Связаться с ZOMEI Lighting", "Запросите подбор продукции, предложение, технические документы и поддержку проекта."],
  },
};

const solutionSeoNames: Record<string, Record<Locale, string>> = {
  "road-street-lighting": { en: "Road and Street Lighting", zh: "道路与街道照明", ru: "Дорожное и уличное освещение" },
  "solar-lighting": { en: "Solar Lighting Solution", zh: "太阳能照明方案", ru: "Решения для солнечного освещения" },
  "landscape-lighting": { en: "Landscape Lighting", zh: "景观照明", ru: "Ландшафтное освещение" },
  "building-facade-lighting": { en: "Building Facade Lighting", zh: "建筑立面照明", ru: "Архитектурное освещение фасадов" },
  "industrial-lighting": { en: "Industrial Lighting", zh: "工业照明", ru: "Промышленное освещение" },
  "garden-park-lighting": { en: "Garden and Park Lighting", zh: "花园与公园照明", ru: "Освещение садов и парков" },
  "stadium-area-lighting": { en: "Stadium and Area Lighting", zh: "体育场与广场照明", ru: "Освещение стадионов и площадей" },
  "urban-public-lighting": { en: "Urban Public Lighting", zh: "城市公共照明", ru: "Городское общественное освещение" },
};

const projectSeo: Record<string, Record<Locale, [string, string]>> = {
  "almaty-museum-of-arts-facade-lighting": {
    en: ["Almaty Museum of Arts Facade Lighting", "Facade lighting project using high-power gobo projection, cross-border engineering coordination and on-site commissioning."],
    zh: ["阿拉木图艺术博物馆外立面灯光", "采用大功率图案投影、跨国工程配合与现场调试的博物馆外立面照明项目。"],
    ru: ["Фасадное освещение Almaty Museum of Arts", "Проект фасадного освещения с мощной гобо-проекцией, международной координацией и пусконаладкой."],
  },
  "guangzhou-digital-culture-valley-lighting-design": {
    en: ["Guangzhou Digital Culture Valley Lighting Upgrade", "Commercial facade lighting upgrade using RGBW wall washers with design, supply and control coordination."],
    zh: ["广东数字文化谷泛光照明更新改造项目", "采用 RGBW 洗墙灯并提供设计、供货与控制配合的商业立面照明更新项目。"],
    ru: ["Модернизация освещения Guangzhou Digital Culture Valley", "Модернизация коммерческого фасада с RGBW wall washer, проектированием, поставкой и координацией управления."],
  },
};

function validLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

function pathKey(segments: string[]) {
  return segments[0] || "home";
}

function localizedPath(locale: Locale, segments: string[]) {
  return `/${locale}${segments.length ? `/${segments.join("/")}` : ""}`;
}

function alternates(segments: string[]) {
  return {
    en: localizedPath("en", segments),
    "zh-CN": localizedPath("zh", segments),
    ru: localizedPath("ru", segments),
    "x-default": localizedPath("en", segments),
  };
}

function productName(locale: Locale, itemId: string) {
  const item = productSeries.find((entry) => entry.id === itemId);
  if (!item) return null;
  if (locale === "zh") return item.name;
  const group = productGroups.find((entry) => entry.productSlugs.includes(item.categorySlug));
  const groupName = group?.labels[locale] || group?.labels.en || "Outdoor LED Light";
  return `${item.code} ${groupName}`;
}

export function generateStaticParams(): PageParams[] {
  const routes: string[][] = [
    [], ["products"], ["solutions"], ["projects"], ["blog"], ["about"], ["contact"],
    ...productGroups.map((group) => ["products", group.slug]),
    ...productGroups.flatMap((group) => getProductGroupItems(group).map((item) => ["products", group.slug, item.id])),
    ...solutions.map((solution) => ["solutions", solution.slug]),
    ...projects.map((project) => ["projects", project.slug]),
    ...blogArticles.map((article) => ["blog", article.slug]),
  ];
  return locales.flatMap((locale) => routes.map((segments) => ({ locale, segments })));
}

export function generateMetadata({ params }: { params: PageParams }): Metadata {
  if (!validLocale(params.locale)) return {};
  const locale = params.locale;
  const segments = params.segments || [];
  const canonical = localizedPath(locale, segments);
  let [title, description] = staticMetadata[locale][pathKey(segments)] || staticMetadata[locale].home;

  if (segments[0] === "products" && segments[1]) {
    const group = getProductGroup(segments[1]);
    const label = group?.labels[locale] || group?.labels.en;
    if (segments[2]) {
      title = productName(locale, segments[2]) || title;
      description = locale === "zh"
        ? `${title}的规格、应用场景、工程选型支持和技术资料。`
        : locale === "ru"
          ? `${title}: характеристики, применение, подбор для проекта и запрос технической документации.`
          : `${title}. Specifications, applications, project selection support and technical document request from ZOMEI Lighting.`;
    } else if (label) {
      title = label;
      description = locale === "zh"
        ? `${label}产品系列、型号规格与工程询盘支持。`
        : locale === "ru"
          ? `${label}: серии моделей, характеристики и поддержка инженерных запросов.`
          : `${label} product series for outdoor lighting projects, with model details, specifications and inquiry support.`;
    }
  }

  if (segments[0] === "solutions" && segments[1]) {
    const solution = solutions.find((item) => item.slug === segments[1]);
    if (solution) {
      title = solutionSeoNames[solution.slug]?.[locale] || solution.title;
      description = locale === "zh"
        ? solution.description
        : locale === "ru"
          ? `${title} для архитектурных, ландшафтных и инфраструктурных проектов с подбором продукции и поддержкой поставки.`
          : `${title} for architectural, landscape and infrastructure projects with product selection and delivery support.`;
    }
  }

  if (segments[0] === "projects" && segments[1]) {
    const project = projects.find((item) => item.slug === segments[1]);
    if (project) {
      [title, description] = projectSeo[project.slug]?.[locale] || [project.name, project.overview];
    }
  }

  if (segments[0] === "blog" && segments[1]) {
    const article = getBlogArticle(segments[1]);
    if (article) {
      const localized = localizeBlogArticle(article, locale);
      title = localized.title;
      description = localized.description;
    }
  }

  return {
    title,
    description,
    alternates: { canonical, languages: alternates(segments) },
    openGraph: { title, description, url: canonical, locale: locale === "zh" ? "zh_CN" : locale === "ru" ? "ru_RU" : "en_US" },
  };
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

function SeoStructuredData({ locale, segments }: { locale: Locale; segments: string[] }) {
  const url = `https://www.zomeiled.com${localizedPath(locale, segments)}`;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: segments.map((segment, index) => ({
      "@type": "ListItem",
      position: index + 2,
      name: segment.replace(/-/g, " "),
      item: `https://www.zomeiled.com${localizedPath(locale, segments.slice(0, index + 1))}`,
    })),
  };

  if (segments[0] === "products" && segments[2]) {
    const item = productSeries.find((entry) => entry.id === segments[2]);
    const group = getProductGroup(segments[1]);
    if (item && group) {
      const name = productName(locale, item.id) || item.code;
      const images = productDetailGalleries[item.code] || (item.image ? [item.image] : []);
      const properties = [
        ["Power", item.power],
        ["Ingress protection", item.ip],
        ["Voltage", item.voltage],
        ["Dimensions", item.size],
        ["Beam angle", item.beam],
        ["Material", item.material],
      ].filter((property): property is [string, string] => Boolean(property[1]));
      const product = {
        "@context": "https://schema.org",
        "@type": "Product",
        "@id": `${url}#product`,
        name,
        sku: item.code,
        image: images,
        description: locale === "zh" ? `${item.name}，适用于户外照明工程。` : `${name} for outdoor lighting projects.`,
        category: group.labels[locale] || group.labels.en,
        brand: { "@type": "Brand", name: "ZOMEI" },
        manufacturer: { "@id": "https://www.zomeiled.com/#organization" },
        url,
        additionalProperty: properties.map(([label, value]) => ({
          "@type": "PropertyValue",
          name: label,
          value,
        })),
      };
      const profile = getRepresentativeProductProfile(item.id);
      const faq = profile ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: profile.faq.map((entry) => ({
          "@type": "Question",
          name: entry.question[locale],
          acceptedAnswer: { "@type": "Answer", text: entry.answer[locale] },
        })),
      } : undefined;
      return <><JsonLd data={breadcrumb} /><JsonLd data={product} />{faq ? <JsonLd data={faq} /> : null}</>;
    }
  }

  return segments.length ? <JsonLd data={breadcrumb} /> : null;
}

export default function LocalizedCatchAllPage({ params }: { params: PageParams }) {
  if (!validLocale(params.locale)) notFound();
  const segments = params.segments || [];
  let page: React.ReactNode;

  if (segments.length === 0) page = <HomePage />;
  else if (segments.length === 1 && segments[0] === "products") page = <ProductsPage />;
  else if (segments.length === 2 && segments[0] === "products") page = <ProductCategoryPage params={{ slug: segments[1] }} />;
  else if (segments.length === 3 && segments[0] === "products") page = <ProductSeriesDetailPage params={{ slug: segments[1], itemId: segments[2] }} />;
  else if (segments.length === 1 && segments[0] === "solutions") page = <SolutionsPage />;
  else if (segments.length === 2 && segments[0] === "solutions") page = <SolutionDetailPage params={{ slug: segments[1] }} />;
  else if (segments.length === 1 && segments[0] === "projects") page = <ProjectsPage />;
  else if (segments.length === 2 && segments[0] === "projects") page = <ProjectDetailPage params={{ slug: segments[1] }} />;
  else if (segments.length === 1 && segments[0] === "blog") page = <BlogPage />;
  else if (segments.length === 2 && segments[0] === "blog") page = <BlogArticlePage params={{ slug: segments[1] }} />;
  else if (segments.length === 1 && segments[0] === "about") page = <AboutPage />;
  else if (segments.length === 1 && segments[0] === "contact") page = <ContactPage />;
  else notFound();

  return <><SeoStructuredData locale={params.locale} segments={segments} />{page}</>;
}
