const manufacturingBases = [
  {
    location: "广东江门",
    title: "工程照明协同制造基地",
    label: "Authorized Manufacturing Support",
    description:
      "江门协同制造基地围绕建筑照明产品研发、生产、品质检测和工程订单支持展开，配合 ZOMEI Lighting 为国内外项目提供稳定的产品供应、技术资料和项目交付服务。",
    points: ["建筑照明产品制造", "光电实验室与研发团队", "大型工程项目产品支持"],
    image: "/images/company/website-assets/jiangmen-kmxg-manufacturing-base-1717x916.jpg",
  },
  {
    location: "广东中山横栏",
    title: "户外照明制造基地",
    label: "Flexible Manufacturing",
    description:
      "中山横栏制造基地专注于户外建筑照明及工程灯具，覆盖产品供应、参数深化、OEM/ODM 定制和工程配套，可根据项目需求快速响应选型、打样、小批量与批量交付。",
    points: ["户外工程灯具供应", "OEM / ODM 定制", "快速交付与供应链协同"],
    image: "/images/company/website-assets/zhongshan-oem-odm-manufacturing-base-1717x916.png",
  },
];

const productSystems = [
  "建筑立面照明",
  "景观与道路照明",
  "洗墙 / 线形 / 投光",
  "智能控制系统",
  "OEM / ODM 定制",
  "工程项目配套",
];

const certifications = [
  "ISO 管理体系",
  "CE",
  "RoHS",
  "IP67 检测报告",
  "产品检测报告",
  "项目报审资料",
];

const projectCases = [
  { name: "阿拉木图艺术博物馆外立面灯光", href: "/projects/almaty-museum-of-arts-facade-lighting" },
  { name: "圆明园正觉寺夜景照明工程" },
  { name: "广东数字文化谷照明提升项目", href: "/projects/guangzhou-digital-culture-valley-lighting-design" },
  { name: "泉州一江两岸夜景照明提升工程" },
  { name: "世界动力电池大会（中国·宜宾）" },
  { name: "山西武乡县大型市政亮化工程" },
  { name: "越南渣打银行夜景照明工程" },
  { name: "迪拜凯宾斯基酒店照明工程" },
];

const projectSupportValues = [
  {
    title: "方案更清晰",
    description: "先看建筑、场景和安装条件，再给出适合项目的照明方向。",
  },
  {
    title: "选型更省心",
    description: "把灯具、功率、色温、角度和控制方式快速匹配到项目需求。",
  },
  {
    title: "定制更可控",
    description: "非标尺寸、配光和结构可先确认，减少现场返工和效果偏差。",
  },
  {
    title: "交付更稳妥",
    description: "资料、生产、物流和售后协同，帮助工程项目顺利推进。",
  },
];

const factoryImages = [
  {
    src: "/images/company/website-assets/jiangmen-zomei-manufacturing-base.png",
    title: "公司外部环境",
    description: "公司大楼与厂区环境，展示 ZOMEI Lighting 的办公与生产基础。",
  },
  {
    src: "/images/company/website-assets/production-workshop-zomei-logo-clean.png",
    title: "生产车间",
    description: "标准化生产线与现场管理环境，体现产品制造、过程流转和批量生产能力。",
  },
  {
    src: "/images/company/website-assets/assembly-workshop-zomei-logo-clean.png",
    title: "组装车间",
    description: "灯具组装、过程检验与包装准备区域，用于支持稳定装配和订单交付。",
  },
  {
    src: "/images/company/website-assets/product-showcase.png",
    title: "产品展示",
    description: "户外照明产品样品展示，便于客户进行系列对比与选型沟通。",
  },
  {
    src: "/images/company/website-assets/warehouse-zomei.png",
    title: "仓储与备货",
    description: "仓储与成品管理区域，用于支持订单流转、备货和交付安排。",
  },
  {
    src: "/images/company/website-assets/aging-workshop.png",
    title: "老化测试车间",
    description: "通过老化测试和过程验证，提升户外灯具长期使用稳定性。",
  },
];

const brandStats = [
  ["2013", "合作制造基地成立"],
  ["2", "核心制造基地"],
  ["OEM/ODM", "定制开发能力"],
  ["Global", "国际项目服务"],
];

function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="mb-7 max-w-4xl">
      <p className={light ? "text-xs font-bold uppercase tracking-[0.24em] text-brand-yellow" : "eyebrow"}>
        {eyebrow}
      </p>
      <h2 className={["text-[clamp(1.85rem,3vw,3rem)] font-semibold leading-[1.08] tracking-tighter3", light ? "text-white" : "text-brand-text"].join(" ")}>
        {title}
      </h2>
      {description ? (
        <p className={["mt-4 text-[15px] leading-8", light ? "text-white/72" : "text-brand-muted"].join(" ")}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function AboutContent() {
  return (
    <>
      <section className="overflow-hidden border border-brand-line bg-white shadow-soft">
        <div className="p-6 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="pt-1">
              <p className="eyebrow">ZOMEI Lighting</p>
              <h2 className="text-[clamp(2rem,3.4vw,3.4rem)] font-semibold leading-[1.04] tracking-tighter3 text-brand-text">
                深圳卓美LED，专业建筑照明解决方案品牌
              </h2>
            </div>
            <div className="max-w-4xl space-y-3 text-[15px] leading-7 text-brand-muted">
              <p>
                深圳市卓美灯具有限公司（ZOMEI Lighting）专注于建筑照明、景观照明、文旅夜游照明及智能照明控制系统，为国内外工程客户提供可落地的照明解决方案。
              </p>
              <p>
                依托中山横栏制造基地，ZOMEI 可围绕项目需求提供灯具选型、参数深化、OEM/ODM 定制和工程配套服务。
              </p>
              <p>
                我们不只关注灯具本身，更关注灯光效果、安装条件、控制方式和长期运行品质，帮助客户减少沟通与返工，让项目更顺利落地。
              </p>
            </div>
          </div>

          <div className="mt-7 grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="grid grid-cols-2 gap-px border border-brand-line bg-brand-line sm:grid-cols-4">
              {brandStats.map(([value, label]) => (
                <div key={label} className="bg-[#f8fbff] p-4">
                  <div className="text-[22px] font-extrabold tracking-tight text-brand-blue">{value}</div>
                  <div className="mt-1 text-xs leading-5 text-brand-muted">{label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center bg-[#071225] p-5 text-white sm:p-6">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-yellow">Project Foundation</p>
              <h3 className="mt-3 text-[clamp(1.35rem,2vw,2rem)] font-semibold leading-tight">
                制造、定制与交付协同支持
              </h3>
              <p className="mt-2 text-sm leading-7 text-white/76">
                用稳定供应链和项目经验，支持建筑照明从选型到落地。
              </p>
            </div>
          </div>

          <p className="mt-7 border-l-4 border-brand-blue bg-[#f8fbff] px-5 py-4 text-[15px] font-semibold leading-8 text-brand-text">
            我们始终坚持“以项目为中心，以品质为基础，以服务创造价值”，帮助全球客户高效完成建筑照明项目。
          </p>
        </div>
      </section>

      <section className="soft-card p-6 sm:p-8">
        <SectionHeading
          eyebrow="Integrated Manufacturing Network"
          title="多制造基地协同体系，支撑研发、品质与全球交付"
          description="为了持续提升产品品质、研发能力及全球交付能力，ZOMEI Lighting 建立了覆盖广东建筑照明产业核心区域的制造协同体系，形成研发、制造、品质控制及供应链协同发展的完整体系。"
        />
        <div className="grid items-stretch gap-5 lg:grid-cols-2">
          {manufacturingBases.map((base) => (
            <article key={base.title} className="flex h-full flex-col overflow-hidden border border-brand-line bg-white">
              <img src={base.image} alt={base.title} className="h-[300px] w-full object-cover" />
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-blue">{base.label}</p>
                <h3 className="mt-3 text-[24px] font-semibold tracking-tighter3 text-brand-text">
                  {base.location}·{base.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-brand-muted">{base.description}</p>
                <div className="mt-auto grid gap-2 pt-5 sm:grid-cols-3">
                  {base.points.map((point) => (
                    <span key={point} className="flex min-h-10 items-center justify-center border border-brand-line bg-[#f8fbff] px-3 py-2 text-center text-xs font-semibold leading-5 text-brand-text">
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="overflow-hidden border border-brand-line bg-white shadow-soft">
        <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
          <div className="flex flex-col justify-between bg-[#071225] p-6 text-white sm:p-8 lg:p-10">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-yellow">
                Product System & Quality Assurance
              </p>
              <h2 className="mt-4 text-[clamp(1.9rem,3vw,3.1rem)] font-semibold leading-[1.08] tracking-tighter3">
                产品体系与质量资料，围绕工程交付配置
              </h2>
              <p className="mt-5 text-[15px] leading-8 text-white/72">
                产品、控制、定制与质量资料围绕工程交付组织，帮助客户快速判断方案是否可用、资料是否够用。
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-px bg-white/15">
              <div className="bg-white/[0.06] p-4">
                <div className="text-[26px] font-extrabold text-brand-yellow">按场景</div>
                <div className="mt-1 text-xs leading-5 text-white/70">匹配产品与控制</div>
              </div>
              <div className="bg-white/[0.06] p-4">
                <div className="text-[26px] font-extrabold text-brand-yellow">按型号</div>
                <div className="mt-1 text-xs leading-5 text-white/70">提供认证与检测资料</div>
              </div>
            </div>
          </div>

          <div className="grid gap-px bg-brand-line md:grid-cols-2">
            <article className="bg-white p-6 sm:p-8">
              <p className="eyebrow">Product Coverage</p>
              <h3 className="text-[clamp(1.45rem,2.1vw,2.2rem)] font-semibold leading-tight tracking-tighter3 text-brand-text">
                覆盖工程常用照明系统
              </h3>
              <p className="mt-4 text-sm leading-7 text-brand-muted">
                先按场景确定方向，再组合灯具、控制与定制服务。
              </p>
              <div className="mt-6 grid auto-rows-fr gap-2">
                {productSystems.map((item) => (
                  <div key={item} className="flex min-h-11 items-center border-l-2 border-brand-blue bg-[#f8fbff] px-3 py-2 text-sm font-semibold leading-5 text-brand-text">
                    {item}
                  </div>
                ))}
              </div>
            </article>

            <article className="bg-white p-6 sm:p-8">
              <p className="eyebrow">Document Support</p>
              <h3 className="text-[clamp(1.45rem,2.1vw,2.2rem)] font-semibold leading-tight tracking-tighter3 text-brand-text">
                资料配合采购与报审
              </h3>
              <p className="mt-4 text-sm leading-7 text-brand-muted">
                相关文件按具体型号和项目需求匹配，避免无效资料堆叠。
              </p>
              <div className="mt-6 grid auto-rows-fr gap-2">
                {certifications.map((item) => (
                  <div key={item} className="flex min-h-11 items-center gap-3 border border-brand-line bg-white px-3 py-2 text-sm font-semibold leading-5 text-brand-text">
                    <span className="h-1.5 w-1.5 shrink-0 bg-brand-yellow" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#071225] text-white shadow-soft">
        <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
          <div className="p-6 sm:p-8 lg:p-10">
            <SectionHeading
              eyebrow="Project Experience"
              title="成熟制造体系服务国内外工程项目"
              description="相关产品已广泛应用于商业综合体、酒店、市政工程、文化旅游、城市夜景及地标建筑等项目，体现制造体系在建筑照明领域的产品制造能力及工程服务经验。"
              light
            />
          </div>
          <div className="grid gap-px bg-white/10 sm:grid-cols-2">
            {projectCases.map((item, index) => (
              <div key={item.name} className="group bg-white/[0.04] p-5 transition hover:bg-white/[0.09]">
                <span className="text-xs font-bold tracking-[0.2em] text-brand-yellow">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {item.href ? (
                  <a href={item.href} className="mt-3 block text-[16px] font-semibold leading-7 text-brand-yellow transition group-hover:text-white group-hover:underline group-hover:underline-offset-4">
                    {item.name}
                  </a>
                ) : (
                  <h3 className="mt-3 text-[16px] font-semibold leading-7 text-white/86 transition group-hover:text-brand-yellow">{item.name}</h3>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border border-brand-line bg-white shadow-soft">
        <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
          <article className="bg-[#071225] p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-yellow">
              Project Support
            </p>
            <h2 className="mt-4 text-[clamp(2rem,3vw,3.1rem)] font-semibold leading-[1.05] tracking-tighter3">
              不只卖灯具，
              <br />
              更帮项目落地
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/72">
              客户不需要逐项研究技术细节，只要一眼明白：ZOMEI 能把效果、选型、定制和交付串起来。
            </p>
          </article>

          <div className="grid gap-0">
            <div className="grid h-full gap-px bg-brand-line md:grid-cols-2">
              {projectSupportValues.map((card, index) => (
                <article key={card.title} className="bg-white p-5 sm:p-6">
                  <p className="text-[12px] font-bold tracking-[0.18em] text-brand-blue">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-[clamp(1.25rem,1.7vw,1.6rem)] font-semibold leading-tight text-brand-text">{card.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-brand-muted">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {factoryImages.map((item) => (
          <figure key={item.src} className="overflow-hidden border border-brand-line bg-white shadow-soft">
            <img src={item.src} alt={item.title} className="h-64 w-full object-cover transition duration-500 hover:scale-[1.03]" />
            <figcaption className="p-5">
              <h3 className="text-[18px] font-semibold text-brand-text">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-brand-muted">{item.description}</p>
            </figcaption>
          </figure>
        ))}
      </section>

      <section className="overflow-hidden border border-brand-line bg-white shadow-soft">
        <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="p-6 sm:p-8">
            <SectionHeading
              eyebrow="Delivery Support"
              title="从产品准备到项目交付的响应能力"
              description="对于国际项目、工程订单和定制需求，ZOMEI Lighting 可根据项目进度配合产品资料、样品确认、生产排期、物流交付和售后沟通，减少客户在跨区域采购中的沟通成本。"
            />
            <div className="grid gap-3 sm:grid-cols-3">
              {["资料确认", "样品与生产", "物流交付"].map((item, index) => (
                <div key={item} className="border border-brand-line bg-[#f8fbff] p-4">
                  <span className="text-xs font-bold tracking-[0.18em] text-brand-blue">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 text-[16px] font-semibold text-brand-text">{item}</h3>
                </div>
              ))}
            </div>
          </div>
          <img
            src="/images/generated/product-to-project-delivery.png"
            alt="产品准备到项目交付流程"
            className="h-full min-h-[320px] w-full object-cover"
          />
        </div>
      </section>

      <section className="overflow-hidden border border-brand-line bg-white shadow-soft">
        <div className="grid gap-px bg-brand-line lg:grid-cols-3">
          <div className="bg-white p-6 sm:p-8">
            <p className="eyebrow">Mission</p>
            <h2 className="text-[30px] font-semibold tracking-tighter3 text-brand-text">让专业照明创造建筑价值。</h2>
          </div>
          <div className="bg-white p-6 sm:p-8">
            <p className="eyebrow">Vision</p>
            <h2 className="text-[30px] font-semibold tracking-tighter3 text-brand-text">成为全球值得信赖的建筑照明解决方案品牌。</h2>
          </div>
          <div className="bg-[#071225] p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-brand-yellow">Positioning</p>
            <h2 className="mt-3 text-[26px] font-semibold tracking-tighter3">Professional Architectural Lighting Solutions</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">Powered by an Integrated Manufacturing Network</p>
          </div>
        </div>
      </section>
    </>
  );
}
