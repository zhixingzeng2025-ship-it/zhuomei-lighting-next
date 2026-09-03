"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowRightIcon } from "@/components/Icons";

const figurePath = (id: string) => `/images/blog/led-outdoor-product-knowledge/clean/figure-${id}.jpg`;

const chapters = [
  {
    id: "source",
    eyebrow: "01 / Light Source",
    title: "先判断光源，不要先判断功率",
    lead:
      "很多户外项目一开始就问“多少瓦”，但真正决定灯具能力的，是 LED 封装、芯片、电流、颜色与热管理共同组成的底层系统。",
    body: [
      "3528、5050、2835、3030 以及更高功率封装并不是简单的尺寸差异。它们对应不同的电流承载、光通量、热密度和应用边界。低功率封装适合近距离装饰、轮廓和点状表达，高功率封装更适合洗墙、投光和远距离照射。",
      "白光 LED 的技术核心来自蓝光激发与光谱转换。彩色 LED 则要关注波长范围，因为不同颜色即使使用相似封装，视觉亮度也会完全不同。工程选型时，不能把彩色光和白光的流明表现直接等同。",
      "对于商业空间、文旅夜游和近人尺度景观，显色指数也应进入判断体系。Ra 能说明一般显色能力，但 R9 对红色还原尤其重要；如果 Ra 高但 R9 很弱，人物、植物、暖色材料和商业陈列的观感仍然可能失真。",
    ],
    figures: [
      { id: "03", caption: "不同 LED 封装形态对应不同功率、热密度和应用边界。" },
      { id: "06", caption: "彩色 LED 的波长范围会影响视觉亮度与色彩表现。" },
      { id: "07", caption: "高显色白光需要同时关注 Ra 与 R9。" },
    ],
  },
  {
    id: "efficiency",
    eyebrow: "02 / Efficiency",
    title: "整灯光效是链路结果，不是灯珠参数",
    lead:
      "一颗 LED 的标称光效很高，并不代表整灯最终光效就高。户外灯具的有效输出会被驱动、透镜、玻璃、温度和配光共同削减。",
    body: [
      "资料中给出的整灯光效公式很关键：整灯光效等于 LED 光效、玻璃透光率、透镜透光效率和电源驱动效率的乘积。任何一个环节损耗偏大，最终落到被照面的有效光都会下降。",
      "增加电流并不等于亮度同步增加。电流提高后，结温上升，LED 光效可能下降，光衰也会加快。专业灯具往往不是把电流推到极限，而是在亮度、温升、寿命和稳定性之间取得平衡。",
      "这也是为什么同样 30W、36W 或 72W 的洗墙灯，实际墙面效果可能差别很大。比较灯具时，应看配光曲线、测试距离、墙面亮度、均匀度和散热条件，而不是只看功率。",
    ],
    figures: [
      { id: "08", caption: "不同封装与电流条件下，亮度和功率关系并非线性等价。" },
      { id: "29", caption: "整灯光效由光源、玻璃、透镜、驱动和散热效率共同决定。" },
    ],
  },
  {
    id: "thermal",
    eyebrow: "03 / Thermal Design",
    title: "散热不是外壳厚一点，而是热路径清楚",
    lead:
      "LED 户外灯具长期稳定，首先取决于热量能不能顺畅离开芯片。散热做不好，亮度、光衰、防水寿命和电子元件可靠性都会被拖累。",
    body: [
      "热量从芯片组开始，经 LED 焊点、PCBA、导热介质传到灯体，再通过对流和辐射释放到空气中。这个路径像倒梯形结构，任何一层接触不良或热阻过大，都会让结温上升。",
      "银和铜的导热能力优秀，但成本、加工和重量限制明显。铝在导热、热容、加工和成本之间更均衡，因此成为户外灯体最常见的散热材料。大功率灯具也会通过复合金属结构，把热量快速从热源区导出。",
      "判断散热，不能只看灯体有没有散热鳍片。更应该看 PCBA 与灯体接触方式、导热板材料、灯体热容量、密封结构是否阻碍散热，以及安装位置有没有足够空气流动。",
    ],
    figures: [
      { id: "13", caption: "LED 热量从芯片向灯体传递，再依靠空气散热。" },
      { id: "15", caption: "金属导热能力不同，影响灯体材料和结构选择。" },
      { id: "17", caption: "大功率灯具常通过复合金属路径提升热传导效率。" },
    ],
  },
  {
    id: "optics",
    eyebrow: "04 / Optical Control",
    title: "配光决定光是否真正有价值",
    lead:
      "户外照明的专业差距，常常不在“亮不亮”，而在光有没有被投到正确的位置、有没有控制溢散、有没有形成均匀而舒适的被照面。",
    body: [
      "透镜材料、玻璃透光率、光束角和配光曲线共同决定灯具的有效输出。PMMA、PC、普通玻璃、超白玻璃和光学玻璃的透光、耐候与成本表现不同，不能只把它们当作透明材料。",
      "配光曲线要看 50% 光强范围、主光强方向和溢散光比例。普通标准配光适合投光类灯具；双角度拉伸配光可以解决条形灯具横向补光，但如果控制不佳，会造成较大光强浪费。",
      "对于洗墙灯和线性灯，理想状态是把主要光强用于墙面作业，用少量溢散光修补横向暗区。也就是说，配光不是把光平均撒出去，而是把光分配给项目真正需要的区域。",
    ],
    figures: [
      { id: "19", caption: "配光曲线帮助判断角度、光强和有效照射范围。" },
      { id: "21", caption: "标准配光适合投光类灯具，重点在溢散光控制。" },
      { id: "22", caption: "双角度拉伸配光用于改善条形灯具横向均匀性。" },
    ],
  },
  {
    id: "protection",
    eyebrow: "05 / Protection",
    title: "防眩、防水与控制系统，决定项目能否长期运行",
    lead:
      "一个项目交付后是否好用，往往取决于用户看不到的部分：眩光控制、防水结构、信号系统、分区逻辑和认证资料。",
    body: [
      "防眩不是简单把光挡住，而是减少不必要的可视光源和刺眼角度。遮光板、偏光透镜、格栅和特殊配光分别适合不同场景。低位上照、高空下照、入口和步道区域尤其需要提前处理眩光。",
      "户外防水也不能只看 IP 等级。封胶、防水胶条和结构防水代表不同工艺思路。长期项目更需要关注端盖、接线口、胶条压缩、热胀冷缩和维护可达性，因为现场故障很多都发生在连接和边界位置。",
      "当项目从静态照明进入动态场景，控制系统就成为核心。DMX512、无线控制和互联网集成系统各有适用边界；大型项目必须提前规划控制拓扑、地址分配、分区逻辑和调试流程。",
    ],
    figures: [
      { id: "30", caption: "常见防眩方式包括遮光板、偏光透镜、格栅和特殊配光。" },
      { id: "33", caption: "防水工艺需要兼顾寿命、外观、维护和结构可靠性。" },
    ],
  },
];

const decisions = [
  ["光源", "看封装、芯片、电流、色温和显色，而不只是灯珠数量。"],
  ["光效", "看整灯光效链路，确认透镜、玻璃、驱动和散热损耗。"],
  ["散热", "看热路径是否连续，材料选择是否服务大功率长期运行。"],
  ["配光", "看有效光、溢散光、均匀度和实际墙面测试结果。"],
  ["防护", "看防眩、防水、接线、控制和认证是否能支撑工程交付。"],
];

const ledArticleCopy = {
  en: {
    breadcrumbHome: "Home",
    breadcrumbBlog: "Lighting Resources",
    breadcrumbCategory: "Product Knowledge",
    title: "LED Outdoor Lighting Technology: From Parameters to Engineering Decisions",
    description:
      "Outdoor luminaires are not simply LEDs placed inside a housing. Professional evaluation must consider the light source, system efficacy, thermal path, optics, glare control, waterproofing, controls and certification together, then answer one question: can this fixture put light in the right place reliably for years on a real project?",
    chips: ["Engineering Selection", "Technical Training", "Client Communication"],
    heroNote:
      "This article rewrites the original technical material into an industry-facing web article, keeping key diagrams as supporting references and removing identifiable enterprise information.",
    mapTitle: "Article Map",
    analysisEyebrow: "My Analysis",
    analysisTitle: "The value of this material is that it translates fixture parameters into engineering risk",
    analysisBody: [
      "Many product files stop at wattage, size, pictures and price, while outdoor projects usually fail where heat, optics, water, electricity and control are not treated as a complete system. A luminaire may be bright at first, but that does not mean it will remain stable; a datasheet may look complete, but that does not guarantee uniformity on site.",
      "This article is therefore organized by project decision logic instead of PPT page order: light source first, then system efficacy, thermal design, optical control, glare, waterproofing, controls and certification. That structure makes it more useful for clients and for sales or technical teams discussing project risks.",
    ],
    conclusionTitle: "Professional outdoor lighting is a system of optics, structure, electrical design and application logic",
    conclusion:
      "If you judge only by wattage, you may buy a bright but uncontrolled luminaire. If you judge only by appearance, you may miss thermal, waterproof and maintenance risks. If you judge only by price, the project may pay later through commissioning, rework and failure. A project-ready outdoor LED luminaire should balance light-source efficiency, thermal management, precise optics, visual comfort, waterproof reliability, control scalability and documentation.",
    conclusionItems: [
      "Design stage: work backward from photometry, mounting distance and target surface instead of starting with wattage.",
      "Procurement stage: request photometric tests, distribution curves, structure notes, control documents and certification files.",
      "Installation stage: check aiming angle, waterproof wiring, thermal environment and zone commissioning.",
      "Acceptance stage: evaluate wall effect, glare, uniformity, scene control and future maintenance access.",
    ],
    back: "Back to Lighting Resources",
    cta: "Discuss an Outdoor Lighting Project",
    decisions: [
      ["Light Source", "Review package, chip, current, CCT and CRI instead of only LED quantity."],
      ["Efficacy", "Check the whole-luminaire efficiency chain, including lens, glass, driver and thermal losses."],
      ["Thermal", "Confirm whether the heat path is continuous and suitable for long-term high-power operation."],
      ["Optics", "Evaluate useful light, spill light, uniformity and actual wall-testing results."],
      ["Protection", "Check glare control, waterproofing, wiring, controls and certification for project delivery."],
    ],
    chapters: [
      {
        id: "source",
        eyebrow: "01 / Light Source",
        title: "Judge the light source before judging wattage",
        lead: "Many outdoor projects start by asking how many watts are needed. The real capability comes from LED package, chip, drive current, color and thermal management working together.",
        body: [
          "Packages such as 3528, 5050, 2835, 3030 and higher-power types are not merely different sizes. They carry different current levels, luminous flux, heat density and application limits. Low-power packages suit decorative, outline and close-range lighting; high-power packages suit wall washing, projection and long-distance illumination.",
          "The technical basis of white LED light comes from blue-light excitation and spectrum conversion. For colored LEDs, wavelength range matters because different colors can have very different perceived brightness even with similar packages. Colored-light lumens should not be compared directly with white-light lumens.",
          "For commercial spaces, cultural tourism and human-scale landscapes, CRI should also be part of the decision. Ra describes general color rendering, while R9 is especially important for red reproduction. If Ra is high but R9 is weak, people, plants, warm materials and retail displays can still look distorted.",
        ],
        figures: [
          { id: "03", caption: "Different LED packages correspond to different power levels, heat density and application limits." },
          { id: "06", caption: "The wavelength range of colored LEDs affects perceived brightness and color expression." },
          { id: "07", caption: "High-quality white light should consider both Ra and R9." },
        ],
      },
      {
        id: "efficiency",
        eyebrow: "02 / Efficiency",
        title: "Luminaire efficacy is a system result, not an LED-chip number",
        lead: "A high LED efficacy value does not guarantee high delivered performance. Driver loss, lenses, glass, temperature and photometric distribution all reduce useful output.",
        body: [
          "A useful formula from the source material is that luminaire efficacy is the product of LED efficacy, glass transmittance, lens efficiency and driver efficiency. Any weak link reduces the useful light reaching the target surface.",
          "Increasing current does not increase brightness proportionally. Higher current raises junction temperature, reduces efficacy and may accelerate lumen depreciation. Professional luminaires balance brightness, temperature rise, service life and stability rather than pushing current to the limit.",
          "That is why wall washers with the same 30W, 36W or 72W rating can perform very differently on a wall. Compare distribution curves, test distance, wall brightness, uniformity and thermal conditions, not wattage alone.",
        ],
        figures: [
          { id: "08", caption: "Brightness and wattage are not linearly equivalent under different package and current conditions." },
          { id: "29", caption: "Luminaire efficacy is shaped by the light source, glass, lens, driver and thermal efficiency." },
        ],
      },
      {
        id: "thermal",
        eyebrow: "03 / Thermal Design",
        title: "Thermal design is a clear heat path, not simply a thicker housing",
        lead: "Long-term stability depends on whether heat can leave the chip efficiently. Poor thermal design affects brightness, lumen maintenance, waterproof lifespan and electronic reliability.",
        body: [
          "Heat travels from the chip through solder joints, PCBA and thermal interface material to the housing, then dissipates into air through convection and radiation. Any weak contact or high thermal resistance raises junction temperature.",
          "Silver and copper conduct heat well but are limited by cost, processing and weight. Aluminum offers a more balanced combination of conductivity, heat capacity, manufacturability and cost, so it is widely used in outdoor LED housings.",
          "Do not judge thermal design only by the appearance of heat fins. Check PCBA contact, thermal plate material, housing heat capacity, whether sealing blocks heat transfer, and whether the installation location allows air movement.",
        ],
        figures: [
          { id: "13", caption: "LED heat moves from the chip toward the housing, then dissipates through air." },
          { id: "15", caption: "Metal thermal conductivity influences housing material and structural design." },
          { id: "17", caption: "High-power luminaires often use composite thermal paths to improve heat transfer." },
        ],
      },
      {
        id: "optics",
        eyebrow: "04 / Optical Control",
        title: "Optics decide whether light actually creates value",
        lead: "The professional difference in outdoor lighting is often not brightness, but whether light reaches the right surface, controls spill and creates a uniform, comfortable result.",
        body: [
          "Lens material, glass transmittance, beam angle and photometric curve define usable output. PMMA, PC, clear glass, low-iron glass and optical glass differ in transmittance, weather resistance and cost.",
          "A distribution curve should be read by its 50% intensity range, main intensity direction and spill-light ratio. Standard distributions suit projector-type fixtures, while dual-angle distributions can improve horizontal fill for linear fixtures.",
          "For wall washers and linear lights, the ideal is to put most intensity on the working wall and use limited spill light to soften lateral dark zones. Optics should distribute light to the areas the project truly needs.",
        ],
        figures: [
          { id: "19", caption: "Distribution curves help evaluate beam angle, intensity and effective throw." },
          { id: "21", caption: "Standard photometry suits projector-type fixtures and depends on spill-light control." },
          { id: "22", caption: "Dual-angle stretched photometry improves lateral uniformity for linear fixtures." },
        ],
      },
      {
        id: "protection",
        eyebrow: "05 / Protection",
        title: "Glare control, waterproofing and controls decide long-term project usability",
        lead: "After delivery, the parts users rarely see often determine success: glare control, sealing, signal topology, zoning logic and certification documents.",
        body: [
          "Anti-glare design is not simply blocking light; it reduces visible source brightness and uncomfortable viewing angles. Shields, asymmetric lenses, louvers and special distributions each suit different site conditions.",
          "Outdoor waterproofing is not only an IP rating. Potting, gaskets and structural sealing represent different process logics. Long-term projects should check end caps, cable entries, gasket compression, thermal expansion and maintenance accessibility.",
          "When a project moves from static lighting to dynamic scenes, the control system becomes central. DMX512, wireless control and internet-integrated systems each have boundaries; large projects must plan topology, addressing, zoning and commissioning early.",
        ],
        figures: [
          { id: "30", caption: "Common anti-glare methods include shields, asymmetric lenses, louvers and special optics." },
          { id: "33", caption: "Waterproofing must balance lifespan, appearance, maintenance and structural reliability." },
        ],
      },
    ],
  },
  ru: {
    breadcrumbHome: "Главная",
    breadcrumbBlog: "Lighting Resources",
    breadcrumbCategory: "Знания о продукции",
    title: "Технологии наружного LED-освещения: от параметров к проектным решениям",
    description:
      "Наружный светильник — это не просто светодиоды в корпусе. Профессиональная оценка рассматривает источник света, эффективность системы, тепловой путь, оптику, антибликовую защиту, влагозащиту, управление и сертификацию вместе.",
    chips: ["Инженерный подбор", "Техническое обучение", "Коммуникация с клиентом"],
    heroNote:
      "Материал переписан из исходной технической презентации в формат профессиональной веб-статьи; ключевые схемы сохранены как справочные изображения, идентифицирующая информация удалена.",
    mapTitle: "Карта статьи",
    analysisEyebrow: "Анализ",
    analysisTitle: "Главная ценность материала — перевод параметров светильника в инженерные риски",
    analysisBody: [
      "Многие продуктовые материалы ограничиваются мощностью, размером, изображениями и ценой. В наружных проектах проблемы чаще возникают там, где тепло, оптика, вода, электрическая часть и управление не связаны в единую систему.",
      "Поэтому статья выстроена не по порядку слайдов, а по логике проектного решения: источник света, эффективность, тепловой режим, оптика, антибликовая защита, влагозащита, управление и сертификация.",
    ],
    conclusionTitle: "Профессиональный наружный светильник — это система оптики, конструкции, электрической части и применения",
    conclusion:
      "Оценка только по мощности приводит к яркому, но плохо контролируемому свету. Оценка только по внешнему виду скрывает тепловые, влагозащитные и сервисные риски. Для инженерного проекта LED-светильник должен балансировать эффективность источника, теплоотвод, точную оптику, визуальный комфорт, надежную влагозащиту, масштабируемое управление и документацию.",
    conclusionItems: [
      "Проектирование: исходите из КСС, расстояния монтажа и целевой поверхности, а не только из мощности.",
      "Закупка: запрашивайте фотометрические тесты, КСС, описание конструкции, документы по управлению и сертификаты.",
      "Монтаж: контролируйте угол, влагозащитное подключение, условия охлаждения и пусконаладку зон.",
      "Приемка: оценивайте эффект на поверхности, ослепление, равномерность, сцены управления и доступ для обслуживания.",
    ],
    back: "Назад к материалам",
    cta: "Обсудить проект наружного освещения",
    decisions: [
      ["Источник", "Смотрите корпусировку, чип, ток, CCT и CRI, а не только количество светодиодов."],
      ["Эффективность", "Проверяйте всю цепочку: линза, стекло, драйвер и тепловые потери."],
      ["Тепло", "Оценивайте непрерывность теплового пути и пригодность для длительной работы."],
      ["Оптика", "Смотрите полезный свет, паразитную засветку, равномерность и реальные тесты на стене."],
      ["Защита", "Проверяйте антиблик, влагозащиту, подключение, управление и сертификацию."],
    ],
    chapters: [
      {
        id: "source",
        eyebrow: "01 / Источник света",
        title: "Сначала оценивайте источник света, а не мощность",
        lead: "Возможности светильника определяются корпусировкой LED, чипом, током, цветом и тепловым режимом, работающими вместе.",
        body: [
          "3528, 5050, 2835, 3030 и более мощные корпусировки отличаются не только размером. У них разные токи, световой поток, тепловая плотность и области применения.",
          "Для белого LED важны синее возбуждение и преобразование спектра. Для цветных LED критичен диапазон длины волны, поскольку разные цвета воспринимаются по яркости неодинаково.",
          "В коммерческих, туристических и близких к человеку пространствах важен CRI. Ra показывает общую цветопередачу, а R9 особенно важен для красного цвета.",
        ],
        figures: [
          { id: "03", caption: "Разные корпусировки LED имеют разные мощности, тепловую плотность и границы применения." },
          { id: "06", caption: "Диапазон длины волны влияет на воспринимаемую яркость и цвет." },
          { id: "07", caption: "Для качественного белого света важно учитывать Ra и R9." },
        ],
      },
      {
        id: "efficiency",
        eyebrow: "02 / Эффективность",
        title: "Эффективность светильника — результат всей системы",
        lead: "Высокая эффективность светодиода не гарантирует высокий полезный световой выход всего изделия.",
        body: [
          "Итоговая эффективность складывается из эффективности LED, пропускания стекла, эффективности линзы и КПД драйвера. Потери на любом участке снижают полезный свет.",
          "Повышение тока не дает пропорционального роста яркости. Температура p-n перехода растет, эффективность падает, деградация может ускоряться.",
          "Поэтому светильники одинаковой мощности могут по-разному работать на стене. Сравнивайте КСС, дистанцию теста, яркость поверхности, равномерность и тепловые условия.",
        ],
        figures: [
          { id: "08", caption: "Связь яркости и мощности не является линейной при разных токах и корпусировках." },
          { id: "29", caption: "Эффективность формируется источником, стеклом, линзой, драйвером и теплоотводом." },
        ],
      },
      {
        id: "thermal",
        eyebrow: "03 / Тепловой режим",
        title: "Теплоотвод — это понятный тепловой путь",
        lead: "Долговечность зависит от того, насколько быстро тепло покидает чип. Ошибки в теплоотводе влияют на яркость, ресурс, влагозащиту и электронику.",
        body: [
          "Тепло идет от чипа через пайку, PCBA и теплопроводящий слой к корпусу, затем уходит в воздух конвекцией и излучением.",
          "Серебро и медь хорошо проводят тепло, но ограничены стоимостью, обработкой и весом. Алюминий дает баланс проводимости, теплоемкости, производства и цены.",
          "Оценивайте не только наличие ребер. Важны контакт PCBA, материал тепловой пластины, теплоемкость корпуса, влияние герметизации и движение воздуха вокруг светильника.",
        ],
        figures: [
          { id: "13", caption: "Тепло LED передается от чипа к корпусу и рассеивается в воздух." },
          { id: "15", caption: "Теплопроводность металлов влияет на выбор корпуса и конструкции." },
          { id: "17", caption: "Мощные светильники используют составные тепловые пути." },
        ],
      },
      {
        id: "optics",
        eyebrow: "04 / Оптика",
        title: "Оптика определяет ценность света",
        lead: "В наружном освещении важно не только насколько светло, но и попадает ли свет туда, куда нужно, без лишней засветки и дискомфорта.",
        body: [
          "Материал линзы, пропускание стекла, угол и КСС формируют полезный выход. PMMA, PC, обычное стекло, low-iron и оптическое стекло отличаются по свойствам.",
          "КСС читают по зоне 50% силы света, направлению максимума и доле паразитного света. Стандартная КСС подходит для проекторных приборов, двойные углы помогают линейным светильникам.",
          "Для wall washer и линейных светильников основная сила света должна работать на стену, а ограниченная боковая засветка — смягчать темные зоны.",
        ],
        figures: [
          { id: "19", caption: "КСС помогает оценить угол, силу света и рабочую дистанцию." },
          { id: "21", caption: "Стандартная КСС подходит для проекторных светильников при контроле засветки." },
          { id: "22", caption: "Двойная растянутая КСС улучшает боковую равномерность линейного света." },
        ],
      },
      {
        id: "protection",
        eyebrow: "05 / Защита",
        title: "Антиблик, влагозащита и управление определяют долгосрочную работу",
        lead: "После сдачи проекта успех часто зависит от скрытых частей: ослепления, герметизации, сигналов, зон и документов.",
        body: [
          "Антибликовая защита уменьшает видимость яркого источника и неудобные углы наблюдения. Экраны, асимметричные линзы, решетки и специальные КСС применяются по-разному.",
          "Влагозащита — это не только IP. Заливка, прокладки и конструктивная герметизация имеют разные риски по ресурсу, внешнему виду и обслуживанию.",
          "Для динамических сцен управление становится ключевым. DMX512, беспроводное управление и интернет-интеграция требуют заранее продуманной топологии, адресации, зон и пусконаладки.",
        ],
        figures: [
          { id: "30", caption: "Антибликовые методы включают экраны, асимметричные линзы, решетки и специальную оптику." },
          { id: "33", caption: "Влагозащита должна учитывать ресурс, внешний вид, обслуживание и надежность конструкции." },
        ],
      },
    ],
  },
};

export function LedOutdoorProductKnowledgeArticle() {
  const { locale } = useLanguage();
  const copy = locale === "en" ? ledArticleCopy.en : locale === "ru" ? ledArticleCopy.ru : null;
  const activeChapters = copy?.chapters || chapters;
  const activeDecisions = copy?.decisions || decisions;

  return (
    <article className="bg-[#f3f6fa] pb-20 text-brand-text">
      <section className="bg-[#061229] text-white">
        <div className="mx-auto grid w-[min(calc(100%-48px),1500px)] gap-10 py-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <div>
            <nav className="mb-8 text-sm font-medium text-white/62">
              <Link href="/" className="hover:text-white">{copy?.breadcrumbHome || "首页"}</Link>
              <span className="mx-2">&gt;</span>
              <Link href="/blog" className="hover:text-white">{copy?.breadcrumbBlog || "照明知识"}</Link>
              <span className="mx-2">&gt;</span>
              <span className="text-white">{copy?.breadcrumbCategory || "产品知识"}</span>
            </nav>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">LED Outdoor Lighting Technology</p>
            <h1 className="mt-4 text-[clamp(2.25rem,4.4vw,4.9rem)] font-semibold leading-[1.02] tracking-tighter3">
              {copy?.title || "LED 户外灯具技术：从参数表走向工程判断"}
            </h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-8 text-white/78">
              {copy?.description || "户外灯具不是把 LED 装进外壳这么简单。专业判断应从光源、光效、散热、配光、防眩、防水、控制和认证共同展开，最终回答一个问题：这套灯具能否在真实项目中长期稳定地把光用对。"}
            </p>
            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {(copy?.chips || ["工程选型", "技术培训", "客户沟通"]).map((item) => (
                <span key={item} className="border border-white/18 px-4 py-3 text-sm font-semibold text-white/82">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="border border-white/16 bg-white/8 p-4 shadow-[0_28px_90px_rgba(0,0,0,0.28)]">
            <img src={figurePath("13")} alt="LED灯具散热路径示意" className="aspect-video w-full object-cover" />
            <div className="border-t border-white/12 bg-[#061229] px-4 py-4 text-sm leading-6 text-white/72">
              {copy?.heroNote || "本文基于原始技术资料重写，保留关键图表作为辅助说明，并去除可识别企业信息。"}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid w-[min(calc(100%-48px),1500px)] gap-4 py-7 md:grid-cols-5">
        {activeDecisions.map(([title, text]) => (
          <div key={title} className="border border-brand-line bg-white p-5 shadow-[0_18px_50px_rgba(9,31,71,0.06)]">
            <div className="text-lg font-semibold tracking-tighter3 text-brand-text">{title}</div>
            <p className="mt-2 text-sm leading-6 text-brand-muted">{text}</p>
          </div>
        ))}
      </section>

      <div className="mx-auto grid w-[min(calc(100%-48px),1500px)] gap-8 lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start">
        <aside className="sticky top-[108px] hidden border border-brand-line bg-white p-5 shadow-[0_18px_50px_rgba(9,31,71,0.06)] lg:block">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-muted">{copy?.mapTitle || "Article Map"}</p>
          <nav className="mt-4 grid gap-2">
            {activeChapters.map((chapter) => (
              <a key={chapter.id} href={`#${chapter.id}`} className="border-l-2 border-brand-line px-3 py-2 text-sm font-semibold leading-5 text-brand-muted transition hover:border-brand-blue hover:text-brand-blue">
                {chapter.title}
              </a>
            ))}
          </nav>
        </aside>

        <main className="grid gap-8">
          <section className="border border-brand-line bg-white p-7 shadow-[0_18px_50px_rgba(9,31,71,0.06)] sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">{copy?.analysisEyebrow || "My Analysis"}</p>
            <h2 className="mt-3 text-[clamp(1.9rem,3.2vw,3.35rem)] font-semibold leading-tight tracking-tighter3">
              {copy?.analysisTitle || "这份资料真正有价值的地方，是把“灯具参数”翻译成“工程风险”"}
            </h2>
            <div className="mt-6 grid gap-5 text-[16px] leading-8 text-brand-muted lg:grid-cols-2">
              {(copy?.analysisBody || [
                "许多产品资料停留在功率、尺寸、图片和价格，但户外工程真正出问题的地方，往往是热、光、水、电和控制之间没有形成闭环。灯具初始很亮，不代表长期稳定；参数表好看，不代表现场均匀；防护等级高，也不代表接线和端盖不会失效。",
                "因此，这篇文章不按 PPT 页码复述，而按项目判断逻辑重组：先看光源能力，再看整灯效率，然后进入散热、配光、防眩、防水、控制和认证。这样更适合客户阅读，也更适合销售和技术团队作为沟通底稿。",
              ]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </section>

          {activeChapters.map((chapter) => (
            <section id={chapter.id} key={chapter.id} className="scroll-mt-28 border border-brand-line bg-white p-7 shadow-[0_18px_50px_rgba(9,31,71,0.06)] sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-blue">{chapter.eyebrow}</p>
              <h2 className="mt-3 text-[clamp(1.75rem,2.8vw,3rem)] font-semibold leading-tight tracking-tighter3 text-brand-text">
                {chapter.title}
              </h2>
              <p className="mt-4 max-w-4xl text-[18px] leading-8 text-brand-text">{chapter.lead}</p>

              <div className="mt-7 grid gap-8 xl:grid-cols-[minmax(0,0.96fr)_minmax(380px,0.84fr)] xl:items-start">
                <div className="space-y-5">
                  {chapter.body.map((paragraph) => (
                    <p key={paragraph} className="text-[16px] leading-8 text-brand-muted">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="grid gap-4">
                  {chapter.figures.map((figure) => (
                    <figure key={figure.id} className="overflow-hidden border border-brand-line bg-[#edf5ff]">
                      <img src={figurePath(figure.id)} alt={figure.caption} loading="lazy" className="aspect-video w-full object-cover" />
                      <figcaption className="border-t border-brand-line bg-white px-4 py-3 text-sm leading-6 text-brand-muted">
                        {figure.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </section>
          ))}

          <section className="border border-[#d4e5f5] bg-[#061229] p-7 text-white shadow-[0_24px_80px_rgba(9,31,71,0.18)] sm:p-9">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-gold">Conclusion</p>
            <h2 className="mt-3 text-[clamp(1.9rem,3vw,3.2rem)] font-semibold leading-tight tracking-tighter3">
              {copy?.conclusionTitle || "专业户外灯具的本质，是把光学、结构、电气和工程应用做成一套系统"}
            </h2>
            <p className="mt-5 max-w-4xl text-[16px] leading-8 text-white/78">
              {copy?.conclusion || "如果只看功率，容易买到“亮但不可控”的灯；如果只看外观，容易忽略散热、防水和维护；如果只看价格，后期可能付出调试、返工和故障成本。真正值得进入工程项目的户外 LED 灯具，应当在光源效率、热管理、精准配光、防眩舒适、防水可靠、控制扩展和认证资料之间取得平衡。"}
            </p>
            <div className="mt-7 grid gap-4 md:grid-cols-2">
              {(copy?.conclusionItems || [
                "方案阶段：用配光、安装距离和目标被照面反推灯具，而不是先定功率。",
                "采购阶段：要求光电测试、配光曲线、结构说明、控制资料和认证文件。",
                "施工阶段：关注安装角度、防水接线、散热环境和分区调试。",
                "验收阶段：看墙面效果、眩光、均匀度、场景控制和长期维护便利性。",
              ]).map((item) => (
                <div key={item} className="border border-white/14 bg-white/8 p-4 text-[15px] leading-7 text-white/82">
                  {item}
                </div>
              ))}
            </div>
          </section>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-brand-line py-8">
            <Link href="/blog" className="text-sm font-semibold text-brand-blue">
              {copy?.back || "返回照明知识"}
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep">
              {copy?.cta || "咨询户外照明项目"} <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </main>
      </div>
    </article>
  );
}
