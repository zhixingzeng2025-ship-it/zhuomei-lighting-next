import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailView } from "@/components/DetailView";
import { AlmatyMuseumProjectPage } from "@/components/project/AlmatyMuseumProjectPage";
import { GuangzhouDigitalCultureValleyProjectPage } from "@/components/project/GuangzhouDigitalCultureValleyProjectPage";
import { almatyMuseumProject } from "@/data/projects/almaty-museum";
import { guangzhouDigitalCultureValleyProject } from "@/data/projects/guangzhou-digital-culture-valley";
import { projectKeyForSlug, projects } from "@/data/projects";

export const dynamic = "force-static";

const almatyMuseumOgImage =
  "https://img.zomeiled.com/images/projects/almaty-museum/social/zomei-almaty-museum-facade-lighting-social-p01-final-night-hero.jpg";
const guangzhouDigitalCultureValleyOgImage =
  "https://img.zomeiled.com/images/projects/guangzhou-digital-culture-valley/web/social-cover.jpg";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  if (params.slug === almatyMuseumProject.slug) {
    const canonical = `/projects/${almatyMuseumProject.slug}`;
    return {
      title: almatyMuseumProject.seo.titleZh,
      description: almatyMuseumProject.seo.descriptionZh,
      keywords: almatyMuseumProject.tags,
      alternates: {
        canonical,
        languages: {
          en: canonical,
          "zh-CN": canonical,
          ru: canonical,
          "x-default": canonical,
        },
      },
      openGraph: {
        title: almatyMuseumProject.seo.titleZh,
        description: almatyMuseumProject.seo.descriptionZh,
        type: "article",
        url: canonical,
        images: [
          {
            url: almatyMuseumOgImage,
            width: 1200,
            height: 630,
            alt: "阿拉木图艺术博物馆外立面灯光项目｜Almaty Museum of Arts facade lighting project",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: almatyMuseumProject.seo.titleZh,
        description: almatyMuseumProject.seo.descriptionZh,
        images: [almatyMuseumOgImage],
      },
    };
  }

  if (params.slug === guangzhouDigitalCultureValleyProject.slug) {
    const canonical = `/projects/${guangzhouDigitalCultureValleyProject.slug}`;
    return {
      title: guangzhouDigitalCultureValleyProject.seo.titleZh,
      description: guangzhouDigitalCultureValleyProject.seo.descriptionZh,
      keywords: guangzhouDigitalCultureValleyProject.tags,
      alternates: {
        canonical,
        languages: {
          en: canonical,
          "zh-CN": canonical,
          ru: canonical,
          "x-default": canonical,
        },
      },
      openGraph: {
        title: guangzhouDigitalCultureValleyProject.seo.titleZh,
        description: guangzhouDigitalCultureValleyProject.seo.descriptionZh,
        type: "article",
        url: canonical,
        images: [
          {
            url: guangzhouDigitalCultureValleyOgImage,
            width: 1200,
            height: 630,
            alt: "广东数字文化谷泛光照明更新改造项目",
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: guangzhouDigitalCultureValleyProject.seo.titleZh,
        description: guangzhouDigitalCultureValleyProject.seo.descriptionZh,
        images: [guangzhouDigitalCultureValleyOgImage],
      },
    };
  }

  const project = projects.find((item) => item.slug === params.slug);
  return {
    title: project?.name ? `${project.name} | ZOMEI` : "Project | ZOMEI",
    description: project?.overview,
  };
}

function JsonLdScript({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function AlmatyMuseumStructuredData() {
  const url = `https://www.zomeiled.com/projects/${almatyMuseumProject.slug}`;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首页", item: "https://www.zomeiled.com/" },
      { "@type": "ListItem", position: 2, name: "项目", item: "https://www.zomeiled.com/projects" },
      { "@type": "ListItem", position: 3, name: almatyMuseumProject.seo.titleZh, item: url },
    ],
  };
  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: almatyMuseumProject.seo.titleZh,
    headline: almatyMuseumProject.seo.titleZh,
    description: almatyMuseumProject.seo.descriptionZh,
    inLanguage: "zh-CN",
    datePublished: almatyMuseumProject.publishedAt,
    dateModified: almatyMuseumProject.updatedAt,
    author: {
      "@type": "Organization",
      name: almatyMuseumProject.author,
    },
    publisher: {
      "@type": "Organization",
      name: "ZOMEILED LIGHTING",
    },
    about: almatyMuseumProject.tags,
    locationCreated: {
      "@type": "Place",
      name: "哈萨克斯坦，阿拉木图",
    },
    url,
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: almatyMuseumProject.faq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
  const images = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "阿拉木图艺术博物馆外立面灯光图片规划",
    image: Object.values(almatyMuseumProject.images).map((image) => ({
      "@type": "ImageObject",
      contentUrl: image.src,
      name: image.title,
      caption: image.caption || image.title,
      description: image.alt,
      creditText: "ZOMEI Lighting",
      creator: {
        "@type": "Organization",
        name: "ZOMEI Lighting",
      },
      copyrightNotice: "Copyright © 2026 ZOMEI Lighting. All rights reserved.",
    })),
  };

  return (
    <>
      <JsonLdScript data={breadcrumb} />
      <JsonLdScript data={creativeWork} />
      <JsonLdScript data={faq} />
      <JsonLdScript data={images} />
    </>
  );
}

function GuangzhouDigitalCultureValleyStructuredData() {
  const url = `https://www.zomeiled.com/projects/${guangzhouDigitalCultureValleyProject.slug}`;
  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "首页", item: "https://www.zomeiled.com/" },
      { "@type": "ListItem", position: 2, name: "项目", item: "https://www.zomeiled.com/projects" },
      { "@type": "ListItem", position: 3, name: guangzhouDigitalCultureValleyProject.seo.titleZh, item: url },
    ],
  };
  const creativeWork = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: guangzhouDigitalCultureValleyProject.seo.titleZh,
    headline: guangzhouDigitalCultureValleyProject.seo.titleZh,
    description: guangzhouDigitalCultureValleyProject.seo.descriptionZh,
    inLanguage: "zh-CN",
    datePublished: guangzhouDigitalCultureValleyProject.publishedAt,
    dateModified: guangzhouDigitalCultureValleyProject.updatedAt,
    author: {
      "@type": "Organization",
      name: guangzhouDigitalCultureValleyProject.author,
    },
    publisher: {
      "@type": "Organization",
      name: "ZOMEILED LIGHTING",
    },
    about: guangzhouDigitalCultureValleyProject.tags,
    locationCreated: {
      "@type": "Place",
      name: "中国，广州",
    },
    url,
  };
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guangzhouDigitalCultureValleyProject.faq.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
  const images = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "广东数字文化谷泛光照明更新改造项目图片",
    image: Object.values(guangzhouDigitalCultureValleyProject.images).map((image) => ({
      "@type": "ImageObject",
      contentUrl: image.src,
      name: image.title,
      caption: image.caption || image.title,
      description: image.alt,
      creditText: "ZOMEI Lighting",
      creator: {
        "@type": "Organization",
        name: "ZOMEI Lighting",
      },
      copyrightNotice: "Copyright © 2026 ZOMEI Lighting. All rights reserved.",
    })),
  };

  return (
    <>
      <JsonLdScript data={breadcrumb} />
      <JsonLdScript data={creativeWork} />
      <JsonLdScript data={faq} />
      <JsonLdScript data={images} />
    </>
  );
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  if (params.slug === almatyMuseumProject.slug) {
    return (
      <>
        <AlmatyMuseumStructuredData />
        <AlmatyMuseumProjectPage />
      </>
    );
  }

  if (params.slug === guangzhouDigitalCultureValleyProject.slug) {
    return (
      <>
        <GuangzhouDigitalCultureValleyStructuredData />
        <GuangzhouDigitalCultureValleyProjectPage />
      </>
    );
  }

  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  const projectKey = projectKeyForSlug(project.slug);

  return (
    <DetailView
      backHref="/projects"
      backLabelKey="common.backToProjects"
      eyebrowKey="sections.projectsEyebrow"
      titleKey={`projects.${projectKey}`}
      description={project.products}
      image={project.image}
      facts={[
        { labelKey: "common.location", value: project.location },
        { labelKey: "common.usedProducts", value: project.products },
      ]}
      sections={[
        {
          titleKey: "detail.overview",
          description: project.overview,
        },
        {
          titleKey: "detail.projectHighlights",
          items: project.highlights,
        },
        {
          titleKey: "detail.projectScope",
          description: "Commercial streets, plazas, parks and architectural facade environments.",
        },
      ]}
      ctaHref="/contact"
      ctaLabelKey="common.sendInquiry"
    />
  );
}
