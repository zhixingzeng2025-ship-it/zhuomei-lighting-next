import {
  collectAssets,
  mapSolutionToUnified,
  withPublicStatus,
  type ZomeiSolutionFields,
} from "./zomei-unified";

export type SolutionItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  overview: string;
  highlights: string[];
  applications: string[];
  designFocus: string[];
  recommendedProducts: string[];
  deliverables: string[];
} & ZomeiSolutionFields;

export function solutionKeyForSlug(slug: string) {
  const map: Record<string, string> = {
    "road-street-lighting": "roadStreet",
    "solar-lighting": "solar",
    "landscape-lighting": "landscape",
    "building-facade-lighting": "facade",
    "industrial-lighting": "industrial",
    "garden-park-lighting": "gardenPark",
    "stadium-area-lighting": "stadiumArea",
    "urban-public-lighting": "urbanPublic",
  };
  return map[slug] || "roadStreet";
}

const solutionMocks = [
  {
    slug: "road-street-lighting",
    title: "道路与街道照明",
    description: "兼顾安全性与视觉舒适度的基础设施照明。",
    image: "https://img.zomeiled.com/images/generated/solutions/solution-road.jpg",
    overview:
      "道路与街道照明方案以通行安全、照度均匀度、眩光控制和后期维护为核心。方案阶段会结合道路等级、车道宽度、灯杆高度、杆距、悬臂长度、路面反射条件和周边环境亮度，匹配合适的功率、配光曲线、色温、防护等级与安装方式，避免只按单灯功率选型导致亮度不均、眩光明显或维护成本偏高。",
    highlights: [
      "根据城市主干道、支路、园区道路和社区道路分别配置不同配光，兼顾路面亮度和边缘区域可视性。",
      "通过透镜角度、灯杆间距和安装仰角控制眩光，提升驾驶与步行的夜间舒适度。",
      "可按项目要求配置防雷、防浪涌、调光接口、智能控制和分时节能策略。",
      "灯体结构重点考虑散热、防水、防尘、抗风和维护便利性，适合长期户外运行。",
      "支持照明计算、布灯建议、安装节点和产品参数表，便于业主、设计院与施工单位确认。",
    ],
    applications: ["高速道路", "城市主干道", "市政支路", "园区道路", "社区街道", "停车场道路"],
    designFocus: [
      "先确认道路断面、车道数量、灯杆高度和杆距，再反推灯具功率、配光和安装角度。",
      "重点核对平均照度、均匀度、眩光限制和人行区域补光，减少暗区和过亮点。",
      "对沿海、高温、多雨或雷暴地区，可提升防腐、防雷和电源保护配置。",
    ],
    recommendedProducts: ["LED 路灯", "太阳能路灯", "高杆灯", "投光灯", "智能控制模块"],
    deliverables: ["灯具选型建议", "布灯与安装高度建议", "照明计算参数支持", "规格书与认证资料", "报价与交付周期建议"],
  },
  {
    slug: "solar-lighting",
    title: "太阳能照明方案",
    description: "便于灵活部署的独立节能照明系统。",
    image: "https://img.zomeiled.com/images/generated/solutions/solution-solar.jpg",
    overview:
      "太阳能照明方案适合供电接入困难、布线成本较高或需要快速部署的户外项目。方案会根据当地日照条件、连续阴雨天需求、夜间工作时长、灯具功率、安装高度和电池容量，综合配置太阳能板、锂电池、控制器、灯具光学和运行模式，确保系统不是简单点亮，而是在真实气候和使用周期中稳定工作。",
    highlights: [
      "可根据项目选择一体式、分体式或市电互补结构，适配不同安装空间和视觉要求。",
      "控制器支持光控、时控、人体感应、分时调光等模式，平衡亮度和续航。",
      "电池容量、太阳能板功率和灯具功率可按连续阴雨天目标进行匹配。",
      "无需大规模开挖布线，适合道路改造、景区、乡村道路和临时公共设施。",
      "结构设计关注抗风、散热、防水、电池安全和后期维护更换便利性。",
    ],
    applications: ["偏远道路", "乡村道路", "公园步道", "景区道路", "临时及公共设施场地", "停车场"],
    designFocus: [
      "先确认项目所在地日照资源、夜间照明时长和连续阴雨天要求，再配置板电池比例。",
      "根据道路宽度和安装高度选择配光，避免太阳能灯只强调续航但照明覆盖不足。",
      "对风力较大或安装高度较高的项目，需要同步核对灯杆强度和太阳能板受风面积。",
    ],
    recommendedProducts: ["一体式太阳能路灯", "分体式太阳能路灯", "太阳能庭院灯", "太阳能投光灯", "智能太阳能控制器"],
    deliverables: ["太阳能系统配置表", "续航与电池容量建议", "安装结构建议", "运行模式建议", "运输包装与备件建议"],
  },
  {
    slug: "landscape-lighting",
    title: "景观照明",
    description: "服务公园、园林与公共空间的优雅氛围照明。",
    image: "https://img.zomeiled.com/images/generated/solutions/solution-landscape.jpg",
    overview:
      "景观照明方案强调人在夜间空间中的舒适感、方向感和场景氛围。设计时会把步道安全、植物层次、水景反射、节点装饰、眩光控制和灯具隐藏方式一起考虑，通过低位灯、投光灯、洗墙灯、线条灯和水下灯组合，形成有明暗节奏而不过度刺眼的夜间环境。",
    highlights: [
      "针对树木、草坪、雕塑、水景、廊架和步道设置不同光束角与安装方式。",
      "通过遮光、防眩、低位照明和暖色温控制，减少直视眩光并提升亲和感。",
      "灯具可隐藏在绿化、铺装、栏杆或建筑节点中，保持白天景观完整度。",
      "支持静态白光、RGB/RGBW 氛围和分区控制，满足日常、节庆和活动模式。",
      "户外结构重点考虑防水、防潮、防腐蚀和线缆连接可靠性。",
    ],
    applications: ["城市公园", "园林景观", "度假区景观", "商业外摆区", "滨水步道", "住宅社区"],
    designFocus: [
      "先区分通行照明、节点照明和氛围照明，避免全场均匀打亮导致空间缺少层次。",
      "植物照明需结合冠幅、高度、季节变化和观赏方向，选择上照、侧照或背光方式。",
      "水景和潮湿区域需重点核对防护等级、低压供电和电气安全。",
    ],
    recommendedProducts: ["投光灯", "地埋灯", "草坪灯", "水下灯", "线条灯", "点光源"],
    deliverables: ["景观节点灯具建议", "光束角与色温建议", "控制分区建议", "安装隐藏方式建议", "户外防水接线建议"],
  },
  {
    slug: "building-facade-lighting",
    title: "建筑立面照明",
    description: "以可控色调与节奏塑造建筑场景。",
    image: "https://img.zomeiled.com/images/generated/solutions/solution-facade.jpg",
    overview:
      "建筑立面照明方案用于塑造建筑夜间识别度、材质肌理和城市界面形象。方案会根据建筑高度、立面材质、观看距离、安装位置、幕墙结构、维护通道和控制需求，组合洗墙灯、线条灯、投光灯、点光源和图案投影设备，形成从轮廓、面光、重点节点到动态场景的完整表达。",
    highlights: [
      "洗墙灯用于建立墙面亮度和材质纹理，线条灯用于勾勒轮廓、边界和立面节奏。",
      "投光灯或投影灯可突出入口、立柱、顶部结构、标识和文化图案等重点视觉节点。",
      "支持单色、RGB、RGBW、DMX 或智能控制系统，满足日常、节日和动态演绎模式。",
      "根据安装距离、照射高度和遮挡条件选择功率、长度、角度与防眩附件。",
      "可提供灯具编号、回路分区、控制逻辑和安装节点建议，减少施工与调试偏差。",
    ],
    applications: ["酒店", "办公建筑", "商业综合体", "文化地标", "桥梁立面", "城市更新建筑"],
    designFocus: [
      "先确认主观看方向和观看距离，再决定是强调整体亮度、轮廓线条还是重点节点。",
      "幕墙、石材、铝板、玻璃和涂料立面对光的反射差异明显，需要结合材质选择色温和角度。",
      "动态控制项目需提前规划电源、信号、地址编码、分区和调试流程。",
    ],
    recommendedProducts: ["LED 洗墙灯", "LED 线条灯", "投光灯", "点光源", "图案投影灯", "DMX 控制系统"],
    deliverables: ["立面灯具组合建议", "安装位置与投射距离建议", "控制分区建议", "灯具编号资料", "现场调试支持建议"],
  },
  {
    slug: "industrial-lighting",
    title: "工业照明",
    description: "面向厂房、仓库和作业区域的耐用照明。",
    image: "https://img.zomeiled.com/images/generated/solutions/solution-industrial.jpg",
    overview:
      "工业照明方案面向厂房、仓库、物流中心、装卸区和半户外作业环境，重点解决高空安装、持续运行、照度稳定、维护频率和环境耐受性问题。方案会根据作业类型、空间高度、货架布局、设备遮挡、地面反射率和安全规范，选择工矿灯、泛光灯、线性灯或防护型灯具组合。",
    highlights: [
      "高棚区域关注垂直照度、地面照度和均匀度，减少作业阴影和视觉疲劳。",
      "仓储通道可按货架方向配置窄配光或线性照明，提高通道覆盖效率。",
      "半户外、粉尘、潮湿或高温环境可提升防护、防腐、散热和电源稳定性配置。",
      "支持感应、分区、调光和定时控制，降低非作业时段能耗。",
      "安装维护方案可结合吊装高度、检修通道和备件策略，减少停工影响。",
    ],
    applications: ["工厂车间", "高棚仓库", "物流中心", "装卸区", "生产线", "半户外作业区"],
    designFocus: [
      "先确认作业精度、空间高度和设备遮挡，再确定照度目标、灯具数量和安装网格。",
      "高温、潮湿、粉尘或腐蚀环境需要优先确认灯具结构、电源寿命和防护等级。",
      "对连续生产场所，灯具寿命、备件兼容和维护方式比单次采购成本更关键。",
    ],
    recommendedProducts: ["LED 工矿灯", "工业泛光灯", "防水线性灯", "高杆灯", "感应控制模块"],
    deliverables: ["工业照度配置建议", "安装网格建议", "防护等级建议", "节能控制建议", "维护与备件建议"],
  },
  {
    slug: "garden-park-lighting",
    title: "花园与公园照明",
    description: "服务休闲与公共环境的人性化照明。",
    image: "https://img.zomeiled.com/images/generated/solutions/solution-garden.jpg",
    overview:
      "花园与公园照明方案更重视人的尺度、路径引导和夜间停留体验。方案会围绕入口、主步道、休憩区、草坪、树阵、儿童活动区和水景节点建立照明层次，让空间既有安全亮度，也保留柔和、安静和自然的夜间氛围。",
    highlights: [
      "庭院灯、草坪灯和低位照明用于路径引导，避免直接刺眼或破坏夜间氛围。",
      "投光灯、地埋灯和树木照明可突出植物形态、景观小品和入口节点。",
      "可采用暖白或中性白为主，局部使用彩光形成节庆或主题场景。",
      "灯具外观、安装高度和出光方向可与景观设计语言保持一致。",
      "重点考虑儿童活动区、台阶、坡道、水边和转角位置的安全补光。",
    ],
    applications: ["私家庭院", "城市公园", "社区花园", "度假区步道", "儿童活动区", "滨水休闲区"],
    designFocus: [
      "路径区域优先保证连续识别，节点区域再通过亮度对比建立停留感。",
      "灯具安装应避开修剪、灌溉和人流碰撞位置，并考虑后期维护便利性。",
      "靠近水体或人手可触及区域，建议优先使用低压和高防护配置。",
    ],
    recommendedProducts: ["庭院灯", "草坪灯", "地埋灯", "投光灯", "水下灯", "低压控制系统"],
    deliverables: ["路径与节点照明建议", "灯具外观搭配建议", "色温与亮度层次建议", "安全补光建议", "低压防水系统建议"],
  },
  {
    slug: "stadium-area-lighting",
    title: "体育场与广场照明",
    description: "服务运动场和大面积项目的高覆盖照明。",
    image: "https://img.zomeiled.com/images/generated/solutions/solution-stadium.jpg",
    overview:
      "体育场与广场照明方案适用于运动场、训练场、公共广场、大型停车场和活动场地。方案重点关注大面积覆盖、照度等级、均匀度、眩光限制、溢散光控制和高位安装安全，通过高功率投光灯、高杆灯、专业支架和分区控制实现稳定的夜间使用条件。",
    highlights: [
      "根据场地尺寸、运动类型和使用等级选择不同照度标准与投射角度。",
      "通过窄角、中角和非对称配光组合，提高场地均匀度并控制场外溢光。",
      "高位安装结构可结合灯杆、支架、检修平台和防坠安全要求进行配置。",
      "支持分区开关、训练模式、比赛模式和活动模式，方便不同运营场景使用。",
      "可按项目提供瞄准角度、灯具编号和调试建议，提升现场施工效率。",
    ],
    applications: ["体育场", "足球场", "篮球场", "训练场", "公共广场", "大型停车场"],
    designFocus: [
      "先确认场地尺寸、灯杆位置和使用等级，再进行投射角度和灯具数量配置。",
      "重点控制运动员视线方向、观众区域眩光和周边居民区溢光影响。",
      "高杆项目需同步考虑结构安全、防雷接地、检修方式和电缆敷设路径。",
    ],
    recommendedProducts: ["体育场投光灯", "高杆灯", "广场泛光灯", "专业瞄准支架", "分区控制系统"],
    deliverables: ["场地照明配置建议", "投射角度与灯杆建议", "防眩与溢光控制建议", "分区控制建议", "现场调试清单"],
  },
  {
    slug: "urban-public-lighting",
    title: "城市公共照明",
    description: "服务城市与公共基础设施的可靠照明。",
    image: "https://img.zomeiled.com/images/generated/projects/project-commercial.jpg",
    overview:
      "城市公共照明方案服务于街区更新、商业步行街、公共广场、桥下空间、交通节点和市政配套设施。方案会同时考虑公共安全、城市形象、夜间活力、维护管理和能耗控制，通过功能照明、景观照明、重点照明和智能控制组合，形成连续、舒适且便于管理的公共夜间环境。",
    highlights: [
      "根据人流动线、车行动线、停留区域和视觉节点建立分层照明，避免一味提高亮度。",
      "道路、广场、绿化、座椅、台阶、栏杆和标识可采用不同灯具类型协同表达。",
      "可配置智能调光、分时控制、节庆场景和远程管理，降低城市运营能耗。",
      "公共项目重点关注防眩、防破坏、防水、防腐和易维护结构。",
      "适合与城市更新、商业街区、文旅夜游和公共景观工程一起深化。",
    ],
    applications: ["城市街道", "公共广场", "商业步行街", "桥下空间", "滨水公共空间", "交通节点"],
    designFocus: [
      "先梳理车行、人行、停留、景观和商业界面的不同需求，再做灯具分区。",
      "公共空间不宜只追求高亮度，需要控制眩光、暗区、视觉秩序和维护便利性。",
      "城市更新项目可把灯具、控制、配电和后期运营管理一起纳入方案。",
    ],
    recommendedProducts: ["路灯", "庭院灯", "洗墙灯", "线条灯", "投光灯", "智能控制系统"],
    deliverables: ["公共空间照明分区建议", "灯具组合建议", "智能控制场景建议", "维护管理建议", "工程资料与报价支持"],
  },
];

export const solutions: SolutionItem[] = withPublicStatus(solutionMocks.map(mapSolutionToUnified));
export const solutionAssets = collectAssets(solutions);
