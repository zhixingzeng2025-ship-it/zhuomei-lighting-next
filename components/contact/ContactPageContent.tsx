"use client";

import { useLanguage } from "@/context/LanguageContext";
import { siteConfig } from "@/data/site";
import InquiryForm from "@/components/InquiryForm";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/Icons";

const copy = {
  en: {
    eyebrow: "Contact / Inquiry",
    title: "Send Your Lighting Project Requirement",
    description:
      "For product selection, quotation or project support, share your project scene, product interest, quantity and schedule. We will reply with practical next steps.",
    formTitle: "Project Inquiry",
    formHeading: "Request Quote / Get Lighting Proposal",
    formNote: "Drawings, BOQ, photos or target product models are helpful. You can also send them by email or WhatsApp.",
    quickTitle: "Fastest Contact",
    qrTitle: "WeChat",
    qrNote: "Scan to add ZOMEI Lighting",
    essentialsTitle: "What to Send",
    essentials: [
      ["Project scene", "Facade, landscape, road, hotel, park or commercial area."],
      ["Product interest", "Wall washer, linear light, projector, flood light or custom item."],
      ["Basic quantity", "Estimated quantity, delivery time and target market."],
    ],
    responseTitle: "How We Support",
    response: ["Product selection", "Quotation support", "Technical documents", "Delivery coordination"],
  },
  zh: {
    eyebrow: "联系 / 询盘",
    title: "发送你的照明项目需求",
    description:
      "需要选型、报价或项目配合时，直接告诉我们项目场景、产品方向、数量和时间要求，我们会给出可执行的下一步建议。",
    formTitle: "工程询盘",
    formHeading: "获取报价 / 照明方案",
    formNote: "如果有图纸、清单、现场照片或目标型号，可以通过 Email 或 WhatsApp 一起发送。",
    quickTitle: "最快联系方式",
    qrTitle: "微信",
    qrNote: "扫码添加 ZOMEI Lighting",
    essentialsTitle: "建议提供的信息",
    essentials: [
      ["项目场景", "建筑立面、景观、道路、酒店、公园或商业空间。"],
      ["产品方向", "洗墙灯、线条灯、投光灯、泛光灯或定制产品。"],
      ["数量与时间", "预估数量、交付时间、项目国家或地区。"],
    ],
    responseTitle: "我们可以配合",
    response: ["产品选型", "报价支持", "技术资料", "交付协调"],
  },
  ru: {
    eyebrow: "Контакт / Запрос",
    title: "Отправьте требования к проекту освещения",
    description:
      "Для подбора продукции, расчета или проектной поддержки опишите сцену проекта, интересующую продукцию, количество и сроки. Мы предложим практичные следующие шаги.",
    formTitle: "Проектный запрос",
    formHeading: "Запросить расчет / световое предложение",
    formNote: "Чертежи, BOQ, фото объекта или целевые модели помогут быстрее подготовить ответ. Их можно отправить по email или WhatsApp.",
    quickTitle: "Самый быстрый контакт",
    qrTitle: "WeChat",
    qrNote: "Сканируйте, чтобы добавить ZOMEI Lighting",
    essentialsTitle: "Что указать",
    essentials: [
      ["Сцена проекта", "Фасад, ландшафт, дорога, отель, парк или коммерческое пространство."],
      ["Интересующая продукция", "Wall washer, linear light, projector, flood light или индивидуальный продукт."],
      ["Количество и сроки", "Ориентировочное количество, срок поставки и целевой рынок."],
    ],
    responseTitle: "Чем мы поможем",
    response: ["Подбор продукции", "Поддержка расчета", "Технические документы", "Координация поставки"],
  },
};

export function ContactPageContent() {
  const { locale } = useLanguage();
  const pageCopy = copy[locale as keyof typeof copy] || copy.en;

  return (
    <section className="bg-gradient-to-b from-white to-[#eef4fb] py-10 sm:py-14">
      <div className="page-container space-y-8">
        <section className="overflow-hidden border border-brand-line bg-white shadow-soft">
          <div className="grid lg:grid-cols-[0.46fr_0.54fr]">
            <div className="flex min-h-[560px] flex-col justify-between bg-[#061229] p-6 text-white sm:p-8 lg:p-10">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                  {pageCopy.eyebrow}
                </p>
                <h1 className="mt-4 text-[clamp(2.15rem,4vw,4.2rem)] font-semibold leading-[0.98] tracking-tighter3">
                  {pageCopy.title}
                </h1>
                <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/76 sm:text-base">
                  {pageCopy.description}
                </p>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-white/56">
                  {pageCopy.quickTitle}
                </p>
                <div className="grid items-stretch gap-4 md:grid-cols-[minmax(0,1fr)_220px] lg:grid-cols-1 xl:grid-cols-[minmax(0,1fr)_230px]">
                  <div className="grid gap-3">
                    <a className="flex min-h-[94px] items-center gap-4 border border-white/16 bg-white/8 p-4 transition hover:bg-white/14" href={siteConfig.contact.whatsappLink} target="_blank" rel="noreferrer">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-brand-blue text-white">
                        <WhatsAppIcon />
                      </span>
                      <span>
                        <strong className="block text-[15px]">WhatsApp</strong>
                        <span className="text-sm text-white/76">{siteConfig.contact.whatsapp}</span>
                      </span>
                    </a>
                    <a className="flex min-h-[94px] items-center gap-4 border border-white/16 bg-white/8 p-4 transition hover:bg-white/14" href={`mailto:${siteConfig.contact.email}`}>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-brand-blue text-white">
                        <MailIcon />
                      </span>
                      <span>
                        <strong className="block text-[15px]">Email</strong>
                        <span className="text-sm text-white/76">{siteConfig.contact.email}</span>
                      </span>
                    </a>
                    <a className="flex min-h-[94px] items-center gap-4 border border-white/16 bg-white/8 p-4 transition hover:bg-white/14" href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center bg-brand-blue text-white">
                        <PhoneIcon />
                      </span>
                      <span>
                        <strong className="block text-[15px]">Phone</strong>
                        <span className="text-sm text-white/76">{siteConfig.contact.phone}</span>
                      </span>
                    </a>
                  </div>

                  <div className="flex h-full flex-col justify-between border border-white/16 bg-white/8 p-4">
                    <div className="bg-white p-3">
                      <img
                        src="https://img.zomeiled.com/images/contact/zomei-wechat-qr.jpg"
                        alt={pageCopy.qrNote}
                        className="aspect-square w-full object-contain"
                      />
                    </div>
                    <div className="pt-4">
                      <strong className="block text-[18px] leading-6">{pageCopy.qrTitle}</strong>
                      <span className="mt-1.5 block text-xs leading-5 text-white/68">{pageCopy.qrNote}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="inquiry-form" className="p-6 sm:p-8 lg:p-10">
              <div className="mb-6 max-w-2xl">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">
                  {pageCopy.formTitle}
                </p>
                <h2 className="mt-3 text-[clamp(1.65rem,2.8vw,2.7rem)] font-semibold leading-[1.08] tracking-tighter3 text-brand-text">
                  {pageCopy.formHeading}
                </h2>
                <p className="mt-4 text-sm leading-7 text-brand-muted">{pageCopy.formNote}</p>
              </div>
              <InquiryForm endpoint="/api/contact" />
            </div>
          </div>
        </section>

        <section className="grid items-stretch gap-5 lg:grid-cols-[0.62fr_0.38fr]">
          <div className="border border-brand-line bg-white p-6 shadow-soft sm:p-8">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-blue">
              {pageCopy.essentialsTitle}
            </p>
            <div className="mt-5 grid gap-px border border-brand-line bg-brand-line md:grid-cols-3">
              {pageCopy.essentials.map(([title, desc], index) => (
                <article key={title} className="bg-[#f8fbff] p-5">
                  <span className="text-xs font-extrabold tracking-[0.18em] text-brand-blue">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[18px] font-semibold text-brand-text">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-brand-muted">{desc}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="flex h-full flex-col justify-center border border-brand-line bg-[#061229] p-6 text-white shadow-soft sm:p-8">
            <div className="w-full">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-gold">
                {pageCopy.responseTitle}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {pageCopy.response.map((item) => (
                <div key={item} className="flex min-h-[72px] items-center border border-white/18 bg-white/8 px-6 py-4 text-[15px] font-semibold">
                  {item}
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
