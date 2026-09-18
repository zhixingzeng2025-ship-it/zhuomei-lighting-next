import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { LanguageProvider } from "@/context/LanguageContext";
import { Analytics } from "@/components/Analytics";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zomeiled.com"),
  title: {
    default: "ZOMEI Lighting | Architectural & Outdoor LED Lighting",
    template: "%s | ZOMEI",
  },
  description:
    "ZOMEI Lighting provides architectural facade lighting, landscape lighting, outdoor LED products, OEM/ODM manufacturing and project inquiry support for global buyers.",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
    },
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.zomeiled.com/#organization",
  name: "ZOMEI Lighting",
  alternateName: "ZOMEILED",
  url: "https://www.zomeiled.com",
  logo: "https://img.zomeiled.com/images/brand/zomei-logo-2026.png",
  description:
    "Outdoor architectural lighting products, custom manufacturing and project delivery support for global engineering buyers.",
  email: "shine@zomeiled.com",
  telephone: "+86 17779667635",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: "+86 17779667635",
    email: "shine@zomeiled.com",
    availableLanguage: ["English", "Chinese", "Russian"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.zomeiled.com/#website",
  url: "https://www.zomeiled.com",
  name: "ZOMEI Lighting",
  publisher: { "@id": "https://www.zomeiled.com/#organization" },
  inLanguage: ["en", "zh-CN", "ru"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="bg-brand-background text-brand-text">
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c") }}
        />
        <LanguageProvider>
          <Header />
          <main className="relative pt-16 md:pt-[92px]">{children}</main>
          <Footer />
          <FloatingContact />
        </LanguageProvider>
      </body>
    </html>
  );
}
