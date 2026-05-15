import type { Metadata } from "next";
import { InquirySection } from "@/components/InquirySection";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
};

export const dynamic = "force-static";

export default function ContactPage() {
  return (
    <section className="py-10 sm:py-12">
      <div className="page-container space-y-10">
        <PageHeader
          eyebrow="Contact"
          title="Inquiry and Contact"
          description="Use this page for direct contact details, inquiry form integration, and future quote requests."
          actionHref="/contact#inquiry-form"
          actionLabel="Jump to Inquiry"
        />
        <div id="inquiry-form">
          <InquirySection />
        </div>
      </div>
    </section>
  );
}
