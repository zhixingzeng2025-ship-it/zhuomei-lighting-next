import type { Metadata } from "next";
import { ContactPageContent } from "@/components/contact/ContactPageContent";

export const metadata: Metadata = {
  title: "联系我们",
  description: "联系 ZOMEI，获取户外照明询盘、项目报价与产品资料。",
};

export const dynamic = "force-static";

export default function ContactPage() {
  return <ContactPageContent />;
}
