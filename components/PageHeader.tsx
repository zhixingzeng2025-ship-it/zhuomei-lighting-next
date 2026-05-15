import Link from "next/link";
import { ArrowRightIcon } from "./Icons";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  actionHref?: string;
  actionLabel?: string;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  actionHref = "/contact",
  actionLabel = "Send Inquiry",
}: PageHeaderProps) {
  return (
    <div className="rounded-[32px] border border-brand-line bg-white px-6 py-8 shadow-soft sm:px-8 sm:py-10">
      <div className="max-w-4xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="text-[clamp(2.1rem,4vw,4rem)] leading-[0.98] tracking-tighter2 font-semibold text-brand-text">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-[15px] leading-7 text-brand-muted sm:text-base">{description}</p>
        <div className="mt-6">
          <Link href={actionHref} className="action-pill bg-gradient-to-r from-brand-blue to-[#77bfff] text-white shadow-[0_16px_34px_rgba(45,140,255,0.28)]">
            {actionLabel}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
