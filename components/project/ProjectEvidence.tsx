"use client";

import { useLanguage } from "@/context/LanguageContext";

export type ProjectEvidenceItem = {
  metric: string;
  value: string;
  method: string;
  evidence: string;
};

const copy = {
  en: { eyebrow: "Verified Project Data", title: "Facts that can be checked and cited", metric: "Data point", method: "Verification method", evidence: "Evidence" },
  zh: { eyebrow: "Verified Project Data", title: "可核对、可引用的项目数据", metric: "数据项", method: "验证方式", evidence: "证据类型" },
  ru: { eyebrow: "Проверенные данные", title: "Факты, которые можно проверить и цитировать", metric: "Показатель", method: "Метод проверки", evidence: "Доказательство" },
};

export function ProjectEvidence({ items, locale: localeProp }: { items: ProjectEvidenceItem[]; locale?: "en" | "zh" | "ru" }) {
  const language = useLanguage();
  const locale = localeProp || language.locale;
  const text = copy[locale];
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="page-container">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">{text.eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-[clamp(1.9rem,3vw,3rem)] font-semibold leading-tight tracking-tighter3 text-brand-text">{text.title}</h2>
        <div className="mt-8 overflow-x-auto border border-brand-line">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead className="bg-[#061229] text-white">
              <tr><th className="p-4 text-sm">{text.metric}</th><th className="p-4 text-sm">{text.method}</th><th className="p-4 text-sm">{text.evidence}</th></tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={`${item.metric}-${item.value}`} className="border-t border-brand-line align-top">
                  <td className="p-4"><strong className="block text-lg text-brand-text">{item.value}</strong><span className="mt-1 block text-sm text-brand-muted">{item.metric}</span></td>
                  <td className="p-4 text-sm leading-7 text-brand-muted">{item.method}</td>
                  <td className="p-4 text-sm leading-7 text-brand-muted">{item.evidence}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
