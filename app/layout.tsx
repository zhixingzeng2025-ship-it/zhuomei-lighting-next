import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { LanguageProvider } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: "ZOMEI",
    template: "%s | ZOMEI",
  },
  description: siteConfig.description,
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
          <main className="relative pt-[76px] md:pt-[92px]">{children}</main>
          <Footer />
          <FloatingContact />
        </LanguageProvider>
      </body>
    </html>
  );
}
