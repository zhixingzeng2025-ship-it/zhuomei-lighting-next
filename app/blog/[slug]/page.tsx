import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogArticlePageContent } from "@/components/blog/BlogArticlePageContent";
import { LedOutdoorProductKnowledgeArticle } from "@/components/blog/LedOutdoorProductKnowledgeArticle";
import { blogArticles, getBlogArticle } from "@/data/blog";

export const dynamic = "force-static";

export function generateStaticParams() {
  return blogArticles.map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getBlogArticle(params.slug);
  return {
    title: article ? `${article.title} | ZOMEI 照明知识` : "照明知识 | ZOMEI",
    description: article?.description || "ZOMEI 户外照明知识文章。",
  };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const article = getBlogArticle(params.slug);
  if (!article) notFound();

  if (article.slug === "led-outdoor-lighting-technology") {
    return <LedOutdoorProductKnowledgeArticle />;
  }

  const relatedArticles = [
    ...blogArticles.filter((item) => item.slug !== article.slug),
    article,
  ].slice(0, 3);

  return <BlogArticlePageContent article={article} relatedArticles={relatedArticles} />;
}
