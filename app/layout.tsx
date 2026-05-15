import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { LanguageProvider } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: {
    default: "ZHUOMEI LIGHTING",
    template: "%s | ZHUOMEI LIGHTING",
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-brand-background text-brand-text">
        <LanguageProvider>
          <Header />
          <main className="relative pt-[92px]">{children}</main>
          <Footer />
          <FloatingContact />
        </LanguageProvider>
      </body>
    </html>
  );
}
