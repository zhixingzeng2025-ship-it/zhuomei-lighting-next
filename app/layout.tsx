import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zomeiled.com"),
  title: {
    default: "ZOMEI Lighting | Architectural & Outdoor LED Lighting",
    template: "%s | ZOMEI",
  },
  description:
    "ZOMEI Lighting provides architectural facade lighting, landscape lighting, outdoor LED products, OEM/ODM manufacturing and project inquiry support for global buyers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="bg-brand-background text-brand-text">
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
