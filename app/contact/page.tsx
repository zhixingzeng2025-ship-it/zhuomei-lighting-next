import type { Metadata } from "next";
import { InquirySection } from "@/components/InquirySection";
import { LocalizedPageHeader } from "@/components/LocalizedPageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ZHUOMEI LIGHTING for outdoor lighting inquiries, project quotations and product information.",
};

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <section className="py-10 sm:py-12">
      <div className="page-container space-y-10">
        <LocalizedPageHeader
          eyebrowKey="pageHeader.contactEyebrow"
          titleKey="pageHeader.contactTitle"
          descriptionKey="pageHeader.contactDescription"
          actionHref="/contact#inquiry-form"
          actionLabelKey="pageHeader.contactAction"
        />
        <div id="inquiry-form">
          <InquirySection />
        </div>
      </div>
    </section>
  );
}
