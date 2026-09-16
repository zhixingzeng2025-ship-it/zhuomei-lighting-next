import type { Metadata } from "next";
import { LocalizedPageHeader } from "@/components/LocalizedPageHeader";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "关于我们 | ZOMEI Lighting",
  description: "了解深圳市卓美灯具有限公司（ZOMEI Lighting）的户外建筑照明产品、定制制造、测试验证和工程项目交付配合能力。",
};

export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <section className="bg-gradient-to-b from-white to-[#eef4fb] py-14">
      <div className="page-container space-y-10">
        <LocalizedPageHeader
          eyebrowKey="pageHeader.aboutEyebrow"
          titleKey="pageHeader.aboutTitle"
          descriptionKey="pageHeader.aboutDescription"
          actionHref="/contact"
          actionLabelKey="pageHeader.aboutAction"
          image="https://img.zomeiled.com/images/company/website-assets/reception-room.jpg"
        />

        <AboutContent />
      </div>
    </section>
  );
}
