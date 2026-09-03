"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { type ProductGroup, getProductSeriesFamilies, productSeriesImage } from "@/data/productGroups";
import { ArrowRightIcon } from "./Icons";

type ProductCategoryListProps = {
  group: ProductGroup;
};

export function ProductCategoryList({ group }: ProductCategoryListProps) {
  const { locale, t } = useLanguage();
  const title = group.labels[locale as keyof typeof group.labels] || group.labels.en;
  const families = getProductSeriesFamilies(group);
  const copy = {
    en: {
      intro: "Browse by product series first, then choose specific models by wattage, size and optical parameters.",
      variants: "models",
      modelSelection: "Wattage & Size Selection",
      modelNote: "CCT, beam angle, voltage and material can be configured by series.",
      table: ["Model", "Power", "Size(mm)", "IP", "Luminous Flux", "Beam", "Material"],
      cta: "View Representative Model",
      rangeLabel: "Model Range",
    },
    zh: {
      intro: "先按产品系列查看，再通过功率、尺寸和光学参数选择具体型号。",
      variants: "个规格",
      modelSelection: "功率与尺寸选型",
      modelNote: "色温、角度、电压和材料可按系列统一配置",
      table: ["型号", "功率", "尺寸(mm)", "防护", "光通量", "角度", "材质"],
      cta: "查看系列代表型号",
      rangeLabel: "型号范围",
    },
    ru: {
      intro: "Сначала просмотрите серию, затем выбирайте модель по мощности, размеру и оптическим параметрам.",
      variants: "спецификаций",
      modelSelection: "Подбор мощности и размера",
      modelNote: "CCT, угол, напряжение и материал настраиваются в рамках серии.",
      table: ["Модель", "Мощность", "Размер(mm)", "IP", "Световой поток", "Угол", "Материал"],
      cta: "Открыть базовую модель серии",
      rangeLabel: "Диапазон моделей",
    },
  }[locale as "en" | "zh" | "ru"];

  return (
    <section className="bg-brand-deep py-14 text-white">
      <div className="page-container">
        <nav className="mb-3 text-[13px] font-medium text-white">
          <Link href="/" className="hover:text-white">{t("common.home")}</Link>
          <span className="mx-2">&gt;</span>
          <Link href="/products" className="hover:text-white">{t("common.productCenter")}</Link>
          <span className="mx-2">&gt;</span>
          <span>{title}</span>
        </nav>

        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h1 className="text-[clamp(2.2rem,4vw,4.3rem)] leading-none font-semibold tracking-tighter3">
            {title}
          </h1>
          <p className="max-w-lg text-sm leading-6 text-white/88">
            {copy.intro}
          </p>
        </div>

        <div className="grid gap-8">
          {families.map((family) => (
            <article key={family.key} className="overflow-hidden border border-white/15 bg-white text-brand-text shadow-[0_18px_42px_rgba(6,18,41,0.16)]">
              <div className="grid lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,1.28fr)]">
                <div className="border-b border-[#dbe7f3] bg-[#f8fbff] p-6 lg:border-b-0 lg:border-r">
                  <div className="flex min-h-[270px] items-center justify-center bg-white p-5">
                    <img
                      src={productSeriesImage(family.representative)}
                      alt={family.title}
                      className="max-h-[270px] w-full object-contain"
                      onError={(event) => {
                        event.currentTarget.src = group.heroImage;
                      }}
                    />
                  </div>
                  <div className="mt-5 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">Product Series</p>
                      <h2 className="mt-2 text-[28px] font-extrabold tracking-tight text-brand-text">{family.seriesCode}</h2>
                      <p className="mt-2 text-sm leading-6 text-brand-muted">
                        {copy.rangeLabel}: <span className="font-semibold text-brand-text">{family.modelRange || family.representative.model}</span>
                      </p>
                    </div>
                    <span className="shrink-0 text-xs font-bold text-brand-blue">{family.variants.length} {copy.variants}</span>
                  </div>
                </div>

                <div className="min-w-0 p-6 lg:p-8">
                  <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">Model Variants</p>
                      <h3 className="mt-1 text-[24px] font-extrabold tracking-tight text-brand-text">{copy.modelSelection}</h3>
                    </div>
                    <span className="text-sm text-brand-muted">{copy.modelNote}</span>
                  </div>
                  <div className="overflow-x-auto border border-[#d4e5f5]">
                    <table className="min-w-[760px] w-full border-collapse text-left text-[13px]">
                      <thead className="bg-[#355a43] text-white">
                        <tr>
                          {copy.table.map((label) => <th key={label} className="whitespace-nowrap px-3 py-3 font-bold">{label}</th>)}
                        </tr>
                      </thead>
                      <tbody>
                        {family.variants.map((variant) => (
                          <tr key={variant.id} className="border-t border-[#d4e5f5] hover:bg-[#f8fbff]">
                            <td className="px-3 py-3 font-bold text-brand-blue"><Link href={`/products/${group.slug}/${variant.id}`} className="hover:text-brand-gold">{variant.model || variant.code}</Link></td>
                            <td className="px-3 py-3 font-semibold">{variant.power || "-"}</td>
                            <td className="px-3 py-3">{variant.size || "-"}</td>
                            <td className="px-3 py-3">{variant.ip || "-"}</td>
                            <td className="px-3 py-3">{variant.flux || "-"}</td>
                            <td className="px-3 py-3">{variant.beam || "-"}</td>
                            <td className="px-3 py-3">{variant.material || "-"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <Link href={`/products/${group.slug}/${family.representative.id}`} className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-brand-blue hover:text-brand-gold">
                    {copy.cta} <ArrowRightIcon className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
