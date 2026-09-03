"use client";

import { useLanguage } from "@/context/LanguageContext";
import { InquirySection } from "@/components/InquirySection";
import { LocalizedPageHeader } from "@/components/LocalizedPageHeader";

const contactCopy = {
  en: {
    title: "Tell us about your outdoor lighting project",
    description:
      "Whether you need wall washers, linear lights, projector lights, flood lights, street lights or customized project support, you can contact us through the channels below. For faster selection, please share the application scene, installation position, target effect, quantity and delivery schedule.",
    cards: [
      ["Product Selection", "Match models and parameters"],
      ["Solution Discussion", "Confirm light effect and installation"],
      ["Quotation Support", "Share documents and lead time"],
    ],
    supportTitle: "What we can help you confirm",
    support: [
      ["Product selection advice", "Match suitable luminaire series according to mounting position, throw distance, target brightness, control method and IP requirement."],
      ["Light effect and parameter check", "Confirm CCT, wattage, beam angle, light output method and control needs to reduce site adjustment costs."],
      ["Documents and quotation support", "Provide product images, specifications, downloadable files, quotation information and basic procurement documents."],
      ["Sample and delivery follow-up", "Support sample confirmation, batch orders, lead-time communication, packaging, shipping and after-sales technical questions."],
    ],
    workflowTitle: "Information to prepare before sending an inquiry",
    workflowDescription:
      "The more complete the information is, the faster we can judge the suitable product series, specification range, project risks and quotation method.",
    steps: [
      ["Describe the project scene", "Facade, road, landscape, park, plaza, commercial project or other application location."],
      ["Provide product requirements", "Wattage, size, CCT, beam angle, control method, IP rating or target model."],
      ["Confirm documents and quotation", "We match product documents, technical advice, lead time and quotation information based on the demand."],
      ["Follow the project continuously", "Support samples, batch orders, installation commissioning and after-sales technical communication."],
    ],
  },
  zh: {
    title: "告诉我们你的户外照明项目需求",
    description:
      "无论是洗墙灯、线条灯、投光灯、泛光灯、路灯，还是项目定制需求，你都可以通过下方方式联系我们。为了更快匹配产品，建议同时提供项目场景、安装位置、目标效果、数量和交付时间。",
    cards: [
      ["产品选型", "匹配型号与参数"],
      ["方案沟通", "确认光效与安装"],
      ["报价支持", "同步资料与交期"],
    ],
    supportTitle: "我们可以协助你确认哪些内容",
    support: [
      ["产品选型建议", "根据安装位置、投射距离、目标亮度、控制方式和防护等级，匹配合适的灯具系列。"],
      ["光效与参数确认", "协助确认色温、功率、光束角、出光方式和控制需求，减少后期现场调整成本。"],
      ["资料与报价配合", "可配合提供产品图片、规格参数、资料下载、报价信息和项目采购所需基础文件。"],
      ["样品与交付跟进", "支持样品确认、批量订单、交期沟通、包装出货和售后技术问题跟进。"],
    ],
    workflowTitle: "提交询盘前，可以先准备这些信息",
    workflowDescription:
      "信息越完整，我们越容易快速判断适合的产品系列、规格范围、项目风险和报价方式。",
    steps: [
      ["说明项目场景", "建筑立面、道路、景观、公园、广场或商业项目等应用位置。"],
      ["提供产品需求", "功率、尺寸、色温、光束角、控制方式、防护等级或目标型号。"],
      ["确认资料与报价", "我们根据需求匹配产品资料、技术建议、交期和报价信息。"],
      ["项目持续跟进", "支持样品确认、批量订单、安装调试和后续售后技术沟通。"],
    ],
  },
  ru: {
    title: "Расскажите о вашем проекте наружного освещения",
    description:
      "Если вам нужны wall washer, линейные светильники, проекторные светильники, прожекторы, уличные светильники или индивидуальная проектная поддержка, свяжитесь с нами удобным способом. Для быстрого подбора укажите сцену применения, место монтажа, желаемый эффект, количество и сроки поставки.",
    cards: [
      ["Подбор продукции", "Модели и параметры"],
      ["Обсуждение решения", "Эффект света и монтаж"],
      ["Поддержка расчета", "Документы и сроки"],
    ],
    supportTitle: "Что мы можем помочь уточнить",
    support: [
      ["Рекомендации по подбору", "Подберем серию светильников по месту установки, дистанции, целевой яркости, управлению и степени защиты."],
      ["Проверка эффекта и параметров", "Поможем уточнить CCT, мощность, угол, способ выхода света и требования к управлению."],
      ["Документы и коммерческое предложение", "Предоставим изображения, спецификации, материалы для загрузки, цены и базовые закупочные документы."],
      ["Образцы и поставка", "Сопровождаем образцы, серийные заказы, сроки, упаковку, отгрузку и технические вопросы после продажи."],
    ],
    workflowTitle: "Что подготовить перед запросом",
    workflowDescription:
      "Чем полнее информация, тем быстрее мы определим подходящую серию, диапазон спецификаций, риски проекта и формат расчета.",
    steps: [
      ["Опишите сцену проекта", "Фасад, дорога, ландшафт, парк, площадь, коммерческий объект или другая зона."],
      ["Укажите требования", "Мощность, размер, CCT, угол, управление, IP-рейтинг или целевая модель."],
      ["Подтвердите документы и расчет", "Мы подготовим материалы, технические рекомендации, сроки и предложение."],
      ["Дальнейшее сопровождение", "Поддержка образцов, партии, монтажа, пусконаладки и технических вопросов."],
    ],
  },
};

export function ContactPageContent() {
  const { locale } = useLanguage();
  const copy = contactCopy[locale as keyof typeof contactCopy] || contactCopy.en;

  return (
    <section className="py-14">
      <div className="page-container space-y-12">
        <LocalizedPageHeader
          eyebrowKey="pageHeader.contactEyebrow"
          titleKey="pageHeader.contactTitle"
          descriptionKey="pageHeader.contactDescription"
          actionHref="/contact#inquiry-form"
          actionLabelKey="pageHeader.contactAction"
        />

        <section className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
          <article className="border border-brand-line bg-[#061229] p-7 text-white shadow-soft sm:p-8">
            <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand-gold">Project Contact</p>
            <h2 className="mt-4 text-[clamp(1.8rem,3vw,3rem)] font-semibold leading-tight tracking-tighter3">
              {copy.title}
            </h2>
            <p className="mt-4 text-[15px] leading-8 text-white/76">
              {copy.description}
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-3">
              {copy.cards.map(([title, desc]) => (
                <div key={title} className="border border-white/14 bg-white/8 p-4">
                  <strong className="block text-[15px] text-white">{title}</strong>
                  <span className="mt-1 block text-xs leading-5 text-white/62">{desc}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="border border-brand-line bg-white p-6 shadow-soft sm:p-7">
            <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Project Support</p>
                <h2 className="text-[clamp(1.55rem,2.3vw,2.25rem)] font-semibold leading-tight tracking-tighter3 text-brand-text">
                  {copy.supportTitle}
                </h2>
              </div>
              <span className="hidden h-1 w-14 bg-brand-gold sm:block" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {copy.support.map(([title, description], index) => (
                <div key={title} className="border border-brand-line bg-[#f8fbff] p-5 transition hover:border-brand-gold hover:bg-white">
                  <span className="text-xs font-extrabold tracking-[0.18em] text-brand-blue">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[17px] font-semibold text-brand-text">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-brand-muted">{description}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="border border-brand-line bg-white p-6 shadow-soft sm:p-8">
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">Inquiry Workflow</p>
              <h2 className="text-[clamp(1.6rem,2.5vw,2.5rem)] font-semibold leading-tight tracking-tighter3 text-brand-text">
                {copy.workflowTitle}
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-brand-muted">
              {copy.workflowDescription}
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {copy.steps.map(([title, description], index) => (
              <article key={title} className="border border-brand-line bg-[#f8fbff] p-5">
                <span className="text-xs font-extrabold tracking-[0.18em] text-brand-blue">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-[18px] font-semibold text-brand-text">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-brand-muted">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <div id="inquiry-form">
          <InquirySection />
        </div>
      </div>
    </section>
  );
}
