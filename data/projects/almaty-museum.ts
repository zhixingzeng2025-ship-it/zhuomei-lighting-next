import { almatyMuseumImages } from "./almaty-museum-images";

export type ProjectFact = {
  label: string;
  labelZh: string;
  value: string;
  valueZh?: string;
};

export type ProjectHighlight = {
  value: string;
  title: string;
  titleZh: string;
  description?: string;
  optional?: boolean;
};

export type ProjectChallenge = {
  number: string;
  title: string;
  titleZh: string;
  description: string;
  descriptionZh: string;
  imageCode?: string;
};

export type CollaborationStep = {
  title: string;
  titleZh: string;
  description: string;
  imageCode?: string;
};

export type ProjectResource = {
  title: string;
  type: "pdf" | "video" | "cad" | "datasheet";
  fileUrl?: string;
  visibility: "public" | "lead-gated" | "private";
  language: "en" | "zh" | "ru";
  requiresLead?: boolean;
  version?: string;
  updatedAt?: string;
};

export const almatyMuseumProject = {
  slug: "almaty-museum-of-arts-facade-lighting",
  type: "Signature Project / Project Insight",
  publishedAt: "2026-07-31",
  updatedAt: "2026-07-31",
  author: "ZHUOMEI Lighting Project Team",
  readingTime: "12 min read",
  title: "Almaty Museum of Arts",
  titleZh: "阿拉木图艺术博物馆",
  subtitle: "Transforming a Cultural Landmark Through Large-Scale Architectural Pattern Projection",
  subtitleZh: "以大面积建筑图案投影，塑造中亚文化地标的独特夜间形象",
  location: "Almaty, Kazakhstan",
  tags: [
    "Museum Lighting",
    "Architectural Facade Lighting",
    "LED Gobo Projection",
    "Pattern Projection",
    "International Project",
    "Kazakhstan",
    "Central Asia",
  ],
  seo: {
    title: "Almaty Museum of Arts Facade Lighting | Large-Scale LED Gobo Projection",
    titleZh: "阿拉木图艺术博物馆外立面灯光｜1150W LED切割灯大面积图案拼接",
    description:
      "Explore how 1150W precision LED gobo projectors, large-scale pattern stitching and international collaboration transformed the Almaty Museum of Arts into a distinctive nighttime cultural landmark.",
    descriptionZh:
      "了解卓美如何通过1150W大功率LED切割灯、多灯图案精准拼接、深化设计与跨国现场调试，为阿拉木图艺术博物馆打造独特的夜间文化地标形象。",
  },
  scope:
    "Facade lighting design development, lighting equipment technical solution, installation coordination and on-site commissioning support.",
  scopeZh: "外立面灯光深化设计、灯具技术方案、安装协同与现场调试支持。",
  facts: [
    { label: "Project", labelZh: "项目", value: "Almaty Museum of Arts", valueZh: "阿拉木图艺术博物馆" },
    { label: "Location", labelZh: "位置", value: "Almaty, Kazakhstan", valueZh: "哈萨克斯坦，阿拉木图" },
    {
      label: "Building Type",
      labelZh: "建筑类型",
      value: "Private Museum of Modern and Contemporary Art",
      valueZh: "现代与当代艺术私人博物馆",
    },
    { label: "Architecture", labelZh: "建筑设计", value: "Chapman Taylor", valueZh: "Chapman Taylor 建筑事务所" },
    {
      label: "Lighting Type",
      labelZh: "灯光类型",
      value: "Architectural Facade Pattern Projection",
      valueZh: "建筑外立面图案投影",
    },
    {
      label: "Core Technology",
      labelZh: "核心技术",
      value: "1150W High-Power Precision LED Gobo Projector",
      valueZh: "1150W 大功率精准 LED 切割灯",
    },
    {
      label: "Lighting Effects",
      labelZh: "灯光效果",
      value: "White Light / Static Patterns / Dynamic Scenes",
      valueZh: "白光 / 静态图案 / 动态场景",
    },
    {
      label: "ZHUOMEI Role",
      labelZh: "卓美角色",
      value: "Design Development / Technical Coordination / Installation Support / On-site Commissioning",
      valueZh: "深化设计 / 技术配合 / 安装支持 / 现场调试",
    },
  ] satisfies ProjectFact[],
  significance: {
    title: "Why This Project Matters",
    titleZh: "为什么这个项目具有特殊意义",
    body:
      "Almaty Museum of Arts is a landmark cultural institution dedicated to modern and contemporary art in Central Asia. Its architecture brings together the natural character of the Tian Shan mountains and the dynamism of Almaty. The facade lighting was therefore not treated as simple functional illumination. It became an extension of the museum’s artistic identity—allowing the building itself to communicate through light after dark.",
    bodyZh:
      "阿拉木图艺术博物馆是中亚现代与当代艺术领域具有代表性的文化地标。建筑将天山自然景观的厚重感与阿拉木图现代城市的活力融为一体。因此，本项目的外立面照明并非简单地将建筑照亮，而是希望让光成为建筑艺术表达的一部分，使建筑在夜间拥有独立、鲜明且可变化的文化形象。",
    labels: ["Cultural Landmark", "Architectural Art", "Central Asian Innovation"],
  },
  highlights: [
    { value: "1150W", title: "High-Power Precision LED Gobo Projector", titleZh: "大功率精准 LED 切割灯" },
    { value: "大面积拼接", title: "Multi-Projector Pattern Stitching", titleZh: "多灯协同完成建筑立面图案拼接" },
    { value: "3种模式", title: "White Light / Pattern / Dynamic Effects", titleZh: "白光、静态图案与动态效果" },
    { value: "6种场景", title: "Six Interchangeable Pattern Scenes", titleZh: "每台灯具支持 6 组图案场景切换" },
    { value: "全流程交付", title: "Design Development to Final Commissioning", titleZh: "深化设计、现场调试与最终验收" },
  ] satisfies ProjectHighlight[],
  comparison: [
    {
      name: "Wall Washer Lighting",
      nameZh: "洗墙灯",
      feature: "Uniform illumination",
      limitation: "Suitable for continuous facade washing, but difficult to create precise large-scale graphic content.",
      selected: false,
    },
    {
      name: "Flood Lighting",
      nameZh: "泛光灯",
      feature: "Broad-area brightness",
      limitation: "Effective for general visibility, but offers limited control over pattern boundaries and visual narratives.",
      selected: false,
    },
    {
      name: "Precision LED Gobo Projection",
      nameZh: "精准 LED 切割灯",
      feature: "Pattern accuracy / sharp boundaries / dynamic scenes",
      limitation: "Selected for this project",
      selected: true,
    },
  ],
  designFlow: [
    "Architecture Analysis",
    "Visual Rhythm",
    "Pattern Composition",
    "Fixture Positioning",
    "Projection Stitching",
    "Final Lighting Scene",
  ],
  challenges: [
    {
      number: "01",
      title: "Large-Scale Pattern Stitching",
      titleZh: "大面积图案拼接",
      description:
        "Multiple fixtures cover a large architectural facade. Position, angle or focus deviation from one unit can create broken patterns, misalignment, ghosting or inconsistent brightness.",
      descriptionZh:
        "多台切割灯共同覆盖大面积建筑立面，任何单台灯具的位置、角度或焦距偏差，都可能造成图案断裂、错位、重影或亮度不一致。",
      imageCode: "P12",
    },
    {
      number: "02",
      title: "Installation Accuracy",
      titleZh: "安装精度",
      description:
        "High-power long-distance projection requires stable mounting, accurate positioning and early coordination with real site conditions.",
      descriptionZh:
        "大功率远距离投射对灯具安装基础、支架稳定性和安装定位精度提出较高要求，前期深化必须与现场条件保持一致。",
      imageCode: "P13",
    },
    {
      number: "03",
      title: "Nighttime Calibration",
      titleZh: "夜间校准",
      description:
        "The final image cannot be completed by drawings alone. Focus, shutter cutting, brightness matching and stitching corrections must be verified at night.",
      descriptionZh:
        "最终画面无法仅依靠图纸完成，需要在真实夜间环境中逐台完成调焦、切边、亮度匹配和拼接修正。",
      imageCode: "P14",
    },
    {
      number: "04",
      title: "Dynamic Scene Synchronisation",
      titleZh: "动态场景同步",
      description:
        "White light, static patterns and dynamic scenes need a clear control logic so the lighting remains expressive without disrupting architectural order.",
      descriptionZh:
        "白光、静态图案与动态场景需要在视觉节奏、控制逻辑和设备同步之间取得平衡，避免效果杂乱或破坏建筑自身秩序。",
      imageCode: "P15",
    },
  ] satisfies ProjectChallenge[],
  collaborationSteps: [
    { title: "Project Brief", titleZh: "项目需求理解", description: "理解客户目标、建筑条件与预期效果", imageCode: "P16" },
    { title: "Design Development", titleZh: "深化设计", description: "深化灯位、角度、投射范围及图案分区", imageCode: "P17" },
    { title: "Technical Coordination", titleZh: "技术协同", description: "通过图纸、会议和技术文件持续确认现场条件", imageCode: "P18" },
    { title: "Fixture Production and Testing", titleZh: "灯具生产与测试", description: "完成灯具生产、光学测试及出厂检查", imageCode: "P21" },
    { title: "Installation Support", titleZh: "安装支持", description: "配合现场团队解决安装定位、线路和控制问题", imageCode: "P22" },
    { title: "Night Commissioning", titleZh: "夜间调试", description: "逐台完成调焦、切边、拼接和程序测试", imageCode: "P19" },
    { title: "Final Delivery", titleZh: "最终交付", description: "与客户和现场团队共同确认最终照明效果", imageCode: "P26" },
  ] satisfies CollaborationStep[],
  clientValues: [
    ["A Distinctive Nighttime Identity", "具有识别度的夜间文化地标形象"],
    ["A Buildable Lighting Solution", "从效果概念转化为可安装、可调试的工程方案"],
    ["Flexible Visual Expression", "白光、图案与动态场景支持不同活动表达"],
    ["End-to-End Technical Support", "从深化到现场调试的持续技术支持"],
  ],
  timeline: [
    ["Design Development", "P20", "From drawings to buildable projection zones."],
    ["Fixture Layout", "P08", "Fixture positions and projection areas are coordinated."],
    ["Installation", "P22", "Mounting and site conditions are checked with the local team."],
    ["Initial Focusing", "P23", "The first light test confirms projection direction."],
    ["Pattern Stitching", "P24", "Adjacent images are aligned and corrected."],
    ["Dynamic Programming", "P25", "Static and dynamic scenes are programmed and tested."],
    ["Final Commissioning", "P26", "The final lighting effect is reviewed at night."],
  ],
  technicalInsights: [
    {
      title: "How Large-Scale Architectural Pattern Stitching Works",
      titleZh: "大面积建筑图案拼接如何实现",
      body:
        "A single LED gobo projector can only cover a limited facade area with sufficient sharpness and brightness. For a large museum elevation, the image must be divided into multiple projection units. Each unit needs to be mapped to a specific facade zone, corrected for projection distance, installation angle and perspective distortion. Adjacent units then require careful edge treatment, overlap control, brightness matching and focus consistency. In real projects, drawings provide the starting geometry, but the final image quality depends on night commissioning. Building tolerances, mounting deviations and material reflection can all shift the visual result. Dynamic content adds another layer: each projector must follow the same visual rhythm and control logic so the stitched image behaves as one coherent facade composition rather than separate fragments.",
      bodyZh:
        "单台 LED 切割灯只能在有限范围内保持足够清晰度和亮度。面对大面积博物馆立面时，整体画面需要被拆分为多个投射单元。每个单元都要对应具体立面区域，并根据投射距离、安装角度和透视关系进行校正。相邻画面还需要处理边界、重叠、亮度和焦点一致性。图纸提供理论基础，但最终效果仍取决于夜间调试，因为建筑误差、安装偏差和材料反射都会影响图案位置和清晰度。动态内容还要求所有投影单元在节奏和控制逻辑上保持同步。",
    },
    {
      title: "Why On-Site Commissioning Is Essential",
      titleZh: "为什么必须进行现场夜间调试",
      body:
        "Projection lighting cannot be evaluated only in the office or factory. Architectural materials change contrast, ambient light changes visibility, and mounting tolerance changes the projected position. Even when fixture layout drawings are accurate, the final facade image must be confirmed under real night conditions. Commissioning includes focus adjustment, shutter cutting, image edge correction, brightness matching and dynamic scene testing. This process is especially important for museum or cultural landmark projects, where the lighting must respect the building’s architecture while delivering a controlled visual identity. On-site commissioning turns a theoretical projection plan into a finished lighting experience that can be viewed, corrected and accepted by the project team.",
      bodyZh:
        "投影照明不能只在办公室或工厂里完成判断。建筑材料会影响反射与对比度，环境光会改变可见性，安装误差也会改变投射位置。即使灯位图纸足够准确，最终画面仍必须在真实夜间环境中确认。现场调试包括调焦、切边、画面边界修正、亮度匹配和动态场景测试。对于博物馆和文化地标项目，这一步尤其重要，因为灯光既要尊重建筑秩序，又要形成可控的视觉识别。",
    },
    {
      title: "What Makes a Projection Lighting Solution Buildable",
      titleZh: "什么样的投影照明方案才真正可落地",
      body:
        "A buildable projection lighting solution is not only an attractive rendering. It must answer practical questions: where each fixture can be mounted, whether the projection distance is reasonable, whether the beam is blocked by building elements, whether the bracket is stable, and whether wiring and control routes can be implemented. Maintenance access should also be considered from the beginning. For international projects, buildability also depends on documentation quality. Clear drawings, fixture numbering, projection zone mapping and fast technical feedback help the on-site team understand the intention and reduce uncertainty. The most reliable solutions combine visual design, optical calculation and construction coordination instead of treating them as separate tasks.",
      bodyZh:
        "可落地的投影照明方案不只是漂亮的效果图。它必须回答实际问题：灯具能否安装，投射距离是否合理，光路是否被遮挡，支架是否稳定，线路和控制是否可实施，后期维护是否方便。对于跨国项目，可实施性还取决于资料是否清晰，包括灯具编号、投射分区、图纸标注和技术反馈。可靠方案应将视觉设计、光学判断和施工协同结合起来，而不是分开处理。",
    },
  ],
  lessons: [
    ["Drawing-first coordination", "图纸先行：在生产和安装前明确投射区域、灯具编号、图案分区和安装角度，减少现场反复调整。"],
    ["Projection geometry control", "投射几何控制：远距离投影会放大支架、角度和墙面偏差，前期拆分越准确，夜间调试效率越高。"],
    ["On-site commissioning", "现场校正：通过夜间调试统一焦点、边界、亮度和画面衔接，让多个投影区域形成完整建筑画面。"],
    ["Cross-border collaboration", "跨国协作：图片、视频、图纸版本和现场反馈需要持续同步，让客户、设计方和技术团队保持同一判断标准。"],
    ["Control system clarity", "控制逻辑清晰：白光、静态图案和动态场景分区管理，便于后期场景切换、节目更新和维护。"],
    ["Deliverable documentation", "交付资料沉淀：将灯位编号、安装记录、调试参数和最终效果归档，方便后续复盘和项目维护。"],
  ],
  resources: [
    { title: "Download Project Overview", type: "pdf", visibility: "public", language: "en", version: "Coming Soon" },
    { title: "Download Product Datasheet", type: "datasheet", visibility: "public", language: "en", version: "Coming Soon" },
    { title: "Request Technical Drawing", type: "cad", visibility: "lead-gated", language: "en", requiresLead: true, version: "Lead required" },
    { title: "Watch Project Video", type: "video", visibility: "public", language: "en", version: "Coming Soon" },
  ] satisfies ProjectResource[],
  faq: [
    ["What is an LED gobo projector?", "An LED gobo projector is a precision projection fixture that uses optical components and a pattern element to project sharp graphic content, textures or shaped light onto a surface."],
    ["Why was projection lighting selected for this museum facade?", "The goal was not only to illuminate the building but to create controllable large-scale artistic content across the facade. Precision projection offered sharper boundaries and richer visual expression than conventional facade washing."],
    ["How are multiple projected images stitched across a large facade?", "The full composition is divided into projection zones. Each fixture is assigned a zone, corrected for distance and angle, then aligned on site so neighboring images connect with consistent brightness and focus."],
    ["Can the system display both white light and dynamic patterns?", "Yes. The concept supports white light, static graphic content and dynamic visual scenes, subject to final programming and project requirements."],
    ["Why is on-site night commissioning necessary?", "Real facade materials, ambient light and installation tolerances affect the projected image. Night commissioning allows the project team to adjust focus, edges, brightness and stitching under real viewing conditions."],
    ["Can this solution be used for hotels, commercial buildings and cultural landmarks?", "Yes. Similar projection lighting strategies can be evaluated for hotels, commercial complexes, public buildings and cultural landmarks when facade size, viewing distance and installation conditions are suitable."],
    ["What information is required to evaluate a similar project?", "Architectural drawings, facade dimensions, installation conditions, viewing distance, desired lighting effects, control requirements and project schedule are helpful for an initial evaluation."],
  ],
  summary: [
    "Almaty Museum of Arts is a landmark private museum of modern and contemporary art in Central Asia.",
    "The facade lighting uses 1150W high-power precision LED gobo projectors.",
    "Multiple projection units are stitched together to create large-scale architectural patterns.",
    "The system supports white light, static graphic content and dynamic visual scenes.",
    "ZHUOMEI participated from design development through installation support and on-site commissioning.",
    "Close coordination between Chinese and Kazakh project teams helped transform a technically challenging concept into a completed architectural lighting experience.",
  ],
  summaryZh: [
    "阿拉木图艺术博物馆是中亚现代与当代艺术领域具有代表性的私人博物馆。",
    "本项目外立面照明采用 1150W 大功率精准 LED 切割灯。",
    "多台投影灯具通过画面拼接形成大面积建筑图案。",
    "系统支持白光、静态图案内容和动态视觉场景。",
    "卓美参与深化设计、安装支持和现场调试等阶段。",
    "中国团队与哈萨克斯坦客户及现场团队的紧密协作，帮助复杂技术方案转化为最终建筑灯光体验。",
  ],
  confidentiality:
    "Project information and lighting documentation are presented for professional reference. Certain technical drawings and on-site records may be simplified or withheld to protect client and project confidentiality.",
  confidentialityZh:
    "本页面项目资料用于专业项目展示。为保护客户与项目机密，部分技术图纸、沟通记录及现场资料可能经过简化、裁切或不公开展示。",
  images: almatyMuseumImages,
};
