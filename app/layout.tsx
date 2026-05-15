import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: {
    default: "ZHUOMEI LIGHTING",
    template: "%s | ZHUOMEI LIGHTING",
  },
  description:
    "Professional outdoor lighting solutions for roads, landscapes, buildings and industrial spaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-brand-background text-brand-text">
        <Header />
        <main className="relative pt-[92px]">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
