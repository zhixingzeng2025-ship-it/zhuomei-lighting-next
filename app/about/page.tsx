import type { Metadata } from "next";
import { LocalizedPageHeader } from "@/components/LocalizedPageHeader";
import { AboutContent } from "@/components/AboutContent";

export const metadata: Metadata = {
  title: "关于我们",
  description: "了解深圳卓美LED（ZOMEI Lighting）的建筑照明解决方案、多制造基地协同体系、品质保障、工程经验和国际项目服务能力。",
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
          image="/images/company/website-assets/reception-room.png"
        />

        <AboutContent />
      </div>
    </section>
  );
}
