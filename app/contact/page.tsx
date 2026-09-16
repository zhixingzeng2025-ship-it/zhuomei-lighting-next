import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "联系我们 | ZOMEI Lighting",
  description: "联系 ZOMEI Lighting，获取户外建筑照明产品选型、工程报价、技术资料和项目交付配合支持。",
};

export const dynamic = "force-static";

export default function ContactPage() {
  return <ContactPageContent />;
}
