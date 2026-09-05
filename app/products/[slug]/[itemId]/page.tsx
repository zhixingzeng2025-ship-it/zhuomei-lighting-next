import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductGroup, productGroups } from "@/data/productGroups";
import { productDetailGalleries } from "@/data/productDetailGalleries";
import { productDetailImages } from "@/data/productDetailImages";
import { productSeries } from "@/data/productSeries";
import { ArrowRightIcon, DocIcon } from "@/components/Icons";
import { ProductGallery } from "@/components/ProductGallery";

export const dynamic = "force-static";

export function generateStaticParams() {
  return productGroups.flatMap((group) =>
    productSeries
      .filter((item) => group.productSlugs.includes(item.categorySlug))
      .map((item) => ({ slug: group.slug, itemId: item.id }))
  );
}

export function generateMetadata({ params }: { params: { slug: string; itemId: string } }): Metadata {
  const item = productSeries.find((entry) => entry.id === params.itemId);
  return {
    title: item ? `${item.code} Outdoor LED Lighting | ZOMEI` : "Outdoor Lighting Product | ZOMEI",
    description: item
      ? `${item.name} for outdoor lighting projects. View core specifications, application scenes and request datasheet or IES files from ZOMEI Lighting.`
      : "ZOMEI outdoor lighting product details, specifications, datasheet and project inquiry support.",
  };
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-7">
      <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand-blue">{eyebrow}</p>
      <h2 className="mt-2 border-l-4 border-brand-gold pl-3 text-[26px] font-semibold tracking-tighter3 text-brand-text">
        {title}
      </h2>
    </div>
  );
}

export default function ProductSeriesDetailPage({ params }: { params: { slug: string; itemId: string } }) {
  const group = getProductGroup(params.slug);
  const item = productSeries.find((entry) => entry.id === params.itemId);
  if (!group || !item || !group.productSlugs.includes(item.categorySlug)) notFound();

  const specs = [
    ["型号", item.model],
    ["产品分类", group.labels.zh],
    ["功率", item.power],
    ["色温", item.cct],
    ["防护等级", item.ip],
    ["电压", item.voltage],
    ["尺寸", item.size],
    ["光束角", item.beam],
    ["材质", item.material],
    ["资料状态", item.status],
    ["更新日期", item.updatedAt],
  ];

  const features = [
    "适用于户外工程项目的稳定结构",
    "支持多种光束角，匹配不同照射距离",
    "铝合金外壳与散热结构，适合长期运行",
    "户外防水设计，适合立面、景观与商业空间",
    "结构清晰，便于项目安装与后期维护",
    "可作为工程选型、询盘和方案沟通基础资料",
  ];

  const applications = [
    "建筑立面",
    "商业广场",
    "景观区域",
    "道路与公共空间",
    "酒店与城市项目",
    "户外装饰照明",
  ];

  const detailCards = [
    {
      title: "光学控制",
      text: item.beam || "支持多种光束角选择，可根据安装距离和目标照射面进行匹配。",
    },
    {
      title: "户外可靠性",
      text: `${item.ip || "户外防护"} 结构设计，适合户外项目长期安装与使用。`,
    },
    {
      title: "安装适配",
      text: item.size || "保留清晰尺寸信息，方便深化设计、施工协调与现场安装。",
    },
  ];

  const similarProducts = productSeries
    .filter((entry) => entry.id !== item.id && group.productSlugs.includes(entry.categorySlug))
    .slice(0, 4);

  const detailImage = productDetailImages[item.code];
  const galleryImages = productDetailGalleries[item.code]?.length
    ? productDetailGalleries[item.code]
    : detailImage
      ? [detailImage, detailImage, detailImage, detailImage]
      : [];

  const lightImage = detailImage ? (
    <img
      src={detailImage}
      alt={item.name}
      className="mx-auto h-full max-h-full w-full max-w-[82%] object-contain"
    />
  ) : (
    <div className="grid h-full min-h-[150px] place-items-center border border-dashed border-[#bccde0] bg-[#f8fbff] text-center text-brand-muted">
      <span className="text-xs font-semibold uppercase tracking-[0.12em]">图片占位</span>
    </div>
  );

  return (
    <article className="bg-white pb-20 text-brand-text">
      <section className="relative overflow-hidden bg-[#050914] pt-10 text-white md:pt-14">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_18%,rgba(37,99,255,0.24),transparent_34%),linear-gradient(90deg,rgba(5,9,20,0.98),rgba(5,9,20,0.84)_48%,rgba(5,9,20,0.98))]" />
        <div className="page-container relative">
          <nav className="mb-6 text-[13px] text-white/68">
            <Link href="/" className="hover:text-white">首页</Link>
            <span className="mx-2">&gt;</span>
            <Link href="/products" className="hover:text-white">产品中心</Link>
            <span className="mx-2">&gt;</span>
            <Link href={`/products/${group.slug}`} className="hover:text-white">{group.labels.zh}</Link>
            <span className="mx-2">&gt;</span>
            <span>{item.code}</span>
          </nav>

          <div className="grid min-h-[500px] gap-7 pb-10 lg:grid-cols-[minmax(0,1.06fr)_minmax(400px,0.94fr)] lg:items-start lg:gap-10">
            <ProductGallery images={galleryImages} alt={item.name} />

            <div className="pb-4 lg:pb-0 lg:pt-0">
              <h1 className="text-[clamp(2.05rem,10vw,4.45rem)] leading-[1.02] font-extrabold tracking-tighter3 md:leading-[0.98]">
                {item.code}
              </h1>
              <p className="mt-3 text-[clamp(1.1rem,1.55vw,1.55rem)] font-semibold tracking-tight text-white/92">
                {item.name}
              </p>
              <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/76">
                面向建筑立面、景观空间和商业项目的户外照明产品。页面保留核心规格、产品特点、应用场景和资料下载入口，方便项目选型与询盘沟通。
              </p>

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["防护等级", item.ip || "-"],
                  ["输入电压", item.voltage || "-"],
                  ["功率范围", item.power || "-"],
                  ["光学角度", item.beam ? "多角度" : "-"],
                ].map(([label, value]) => (
                  <div key={label} className="min-w-0 overflow-hidden border border-white/20 bg-white/[0.04] p-3.5">
                    <div className="text-[12px] text-white/54">{label}</div>
                    <div className="mt-2 min-w-0 break-words text-[14px] font-extrabold leading-snug text-white xl:text-[15px]">{value}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="page-container py-6 lg:hidden">
        <div className="grid gap-3">
          <details open className="border border-brand-line bg-white">
            <summary className="cursor-pointer list-none p-4 text-[15px] font-extrabold text-brand-text">Overview</summary>
            <div className="border-t border-brand-line p-4">
              <p className="text-sm leading-7 text-brand-muted">{item.name}</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {detailCards.map((card) => (
                  <div key={card.title} className="border border-brand-line bg-[#f8fbff] p-3">
                    <h3 className="text-sm font-semibold text-brand-text">{card.title}</h3>
                    <p className="mt-1 line-clamp-3 text-[12px] leading-5 text-brand-muted">{card.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </details>

          <details className="border border-brand-line bg-white">
            <summary className="cursor-pointer list-none p-4 text-[15px] font-extrabold text-brand-text">Specs</summary>
            <div className="border-t border-brand-line p-4">
              <div className="grid gap-0">
                {specs.slice(0, 10).map(([label, value]) => (
                  <div key={`${label}-${value}`} className="grid grid-cols-[92px_minmax(0,1fr)] gap-3 border-b border-brand-line py-2 text-[13px] leading-6">
                    <span className="font-bold text-brand-text">{label}</span>
                    <span className="min-w-0 break-words text-brand-muted">{value || "-"}</span>
                  </div>
                ))}
              </div>
            </div>
          </details>

          <details className="border border-brand-line bg-white">
            <summary className="cursor-pointer list-none p-4 text-[15px] font-extrabold text-brand-text">Downloads</summary>
            <div className="grid gap-3 border-t border-brand-line p-4">
              {["Request Datasheet", "Request IES File", "CE / RoHS / IP Test Report"].map((label) => (
                <Link key={label} href="/contact" className="flex min-h-12 items-center justify-between border border-brand-line bg-[#f8fbff] px-4 text-sm font-semibold text-brand-text">
                  {label}
                  <DocIcon className="h-4 w-4 text-brand-blue" />
                </Link>
              ))}
            </div>
          </details>

          <details className="border border-brand-line bg-white">
            <summary className="cursor-pointer list-none p-4 text-[15px] font-extrabold text-brand-text">Inquiry</summary>
            <div className="border-t border-brand-line p-4">
              <p className="text-sm leading-7 text-brand-muted">
                Share your project type, quantity, voltage and installation condition. We will help confirm product selection and quotation.
              </p>
              <Link href="/contact" className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 bg-brand-blue px-5 text-sm font-bold text-white">
                Request Quote <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </details>
        </div>
      </section>

      <div className="page-container hidden lg:block">
        <section className="py-14">
          <SectionTitle eyebrow="Specification" title="技术规格" />
          <div className="grid overflow-hidden border border-[#d4e5f5] bg-white shadow-[0_24px_80px_rgba(17,58,141,0.1)] lg:grid-cols-[380px_minmax(0,1fr)]">
            <div className="border-b border-[#d4e5f5] bg-[linear-gradient(180deg,#f8fbff,#eef6ff)] p-8 lg:border-b-0 lg:border-r">
              <div className="h-72 bg-white p-6 shadow-inner">{lightImage}</div>
              <p className="mt-5 text-sm leading-7 text-brand-muted">
                产品数据来源于当前产品资料库，缺失信息后续可通过本地内容管理后台继续补齐。
              </p>
            </div>

            <div className="p-8">
              <div className="grid gap-x-8 gap-y-4 xl:grid-cols-2">
                {specs.map(([label, value]) => (
                  <div key={`${label}-${value}`} className="grid min-w-0 grid-cols-[110px_minmax(0,1fr)] gap-5 border-b border-[#dbe7f3] pb-4 text-[15px] leading-7">
                    <span className="font-extrabold text-brand-text">{label}</span>
                    <span className="min-w-0 whitespace-pre-wrap break-words text-brand-muted">{value || "-"}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-brand-line py-12">
          <SectionTitle eyebrow="Features / Applications" title="核心特点与应用场景" />
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_0.72fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature} className="flex gap-4 border border-[#dcebf8] bg-[#f8fbff] p-4 text-[15px] leading-7 text-brand-text">
                  <span className="mt-2.5 h-2 w-2 flex-none bg-brand-blue" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="border border-[#d4e5f5] bg-white p-6 shadow-soft">
              <h3 className="text-[18px] font-semibold tracking-tighter3 text-brand-text">适用场景</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {applications.map((application) => (
                  <div key={application} className="flex items-center gap-3 bg-[#f8fbff] px-4 py-3 text-[14px] font-semibold text-brand-text">
                    <span className="h-1.5 w-1.5 flex-none bg-brand-gold" />
                    {application}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-brand-line py-12">
          <SectionTitle eyebrow="Details" title="产品细节" />
          <div className="grid gap-5 md:grid-cols-3">
            {detailCards.map((card) => (
              <div key={card.title} className="border border-[#d4e5f5] bg-[#f8fbff] p-6 shadow-soft">
                <div className="mb-5 h-36 bg-gradient-to-b from-white to-[#d6eafa] p-4">{lightImage}</div>
                <h3 className="text-[18px] font-semibold tracking-tighter3 text-brand-text">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-brand-line py-12">
          <SectionTitle eyebrow="Download" title="Request Product Documents" />
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Download Datasheet",
                text: "Request product specifications, dimensions and installation information for this model.",
              },
              {
                title: "IES / Photometric File",
                text: "Ask for the photometric file by model, beam angle and project application.",
              },
              {
                title: "CE / RoHS / IP Test Report",
                text: "Confirm available certification and test documents before quotation or tender submission.",
              },
            ].map((card) => (
              <Link key={card.title} href="/contact" className="group border border-[#d4e5f5] bg-[#f8fbff] p-6 shadow-soft transition hover:border-brand-gold hover:bg-white">
                <div className="mb-5 grid h-24 place-items-center bg-gradient-to-b from-white to-[#d6eafa] text-brand-blue">
                  <DocIcon className="h-9 w-9 transition group-hover:text-brand-gold" />
                </div>
                <h3 className="text-[18px] font-semibold tracking-tighter3 text-brand-text">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{card.text}</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-brand-line py-12">
          <SectionTitle eyebrow="Similar Products" title="类似产品" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {similarProducts.map((similar) => {
              const similarImage = productDetailImages[similar.code] || detailImage;
              return (
                <Link key={similar.id} href={`/products/${group.slug}/${similar.id}`} className="group border border-[#d4e5f5] bg-white shadow-soft transition hover:-translate-y-1 hover:border-brand-gold">
                  <div className="h-40 bg-[#f8fbff] p-5">
                    {similarImage ? (
                      <img src={similarImage} alt={similar.name} className="h-full w-full object-contain transition group-hover:scale-[1.04]" />
                    ) : (
                      lightImage
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-brand-text">{similar.code}</h3>
                    <p className="mt-1 line-clamp-2 text-xs leading-5 text-brand-muted">{similar.name}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="grid gap-6 bg-[#061229] p-7 text-white md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <h2 className="text-[28px] font-semibold tracking-tighter3">需要定制照明方案？</h2>
            <p className="mt-2 text-sm leading-6 text-white/70">
              告诉我们项目场景、安装条件与照明需求，我们可以协助匹配合适的产品方案。
            </p>
          </div>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 bg-brand-gold px-6 py-4 text-sm font-semibold text-[#061229]">
            联系我们 <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </article>
  );
}
