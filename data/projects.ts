import {
  collectAssets,
  mapCaseToUnified,
  withPublicStatus,
  type ZomeiCaseFields,
} from "./zomei-unified";

export type ProjectItem = {
  slug: string;
  name: string;
  location: string;
  products: string;
  image: string;
  overview: string;
  highlights: string[];
  category: ProjectCategoryKey;
} & ZomeiCaseFields;

export type ProjectCategoryKey = "signature" | "facade" | "road" | "landscape" | "commercial";

export const projectCategories: Array<{
  key: "all" | ProjectCategoryKey;
  label: string;
  labelEn: string;
  labelRu: string;
  description: string;
}> = [
  {
    key: "all",
    label: "全部项目",
    labelEn: "All Projects",
    labelRu: "Все проекты",
    description: "查看已整理的真实工程项目。",
  },
  {
    key: "signature",
    label: "标杆项目",
    labelEn: "Signature Projects",
    labelRu: "Ключевые проекты",
    description: "适合重点展示的项目专题与深度项目。",
  },
  {
    key: "facade",
    label: "建筑立面",
    labelEn: "Facade Lighting",
    labelRu: "Фасадное освещение",
    description: "建筑外墙、入口、轮廓与立面效果项目。",
  },
  {
    key: "road",
    label: "道路照明",
    labelEn: "Road Lighting",
    labelRu: "Дорожное освещение",
    description: "道路、街道、市政与公共空间照明项目。",
  },
  {
    key: "landscape",
    label: "景观照明",
    labelEn: "Landscape Lighting",
    labelRu: "Ландшафтное освещение",
    description: "园林、公园、步道和户外氛围照明项目。",
  },
  {
    key: "commercial",
    label: "商业空间",
    labelEn: "Commercial Spaces",
    labelRu: "Коммерческие пространства",
    description: "商业广场、酒店、综合体和开放空间项目。",
  },
];

export function projectKeyForSlug(slug: string) {
  const map: Record<string, string> = {
    "almaty-museum-of-arts-facade-lighting": "almatyMuseum",
    "guangzhou-digital-culture-valley-lighting-design": "guangzhouDigitalCultureValley",
  };
  return map[slug] || slug;
}

const projectMocks: Array<{
  slug: string;
  category: ProjectCategoryKey;
  name: string;
  location: string;
  products: string;
  image: string;
  overview: string;
  highlights: string[];
}> = [
  {
    slug: "guangzhou-digital-culture-valley-lighting-design",
    category: "signature",
    name: "广东数字文化谷泛光照明更新改造项目",
    location: "广州，中国",
    products: "36W RGBW线性洗墙灯 / 10W RGBW线条灯 / DMX512控制系统",
    image: "https://img.zomeiled.com/images/projects/guangzhou-digital-culture-valley/web/social-cover.jpg",
    overview:
      "广东数字文化谷泛光照明更新改造项目，以结构与韵律为设计线索，通过顶部线条灯、隐藏式线性洗墙灯、现场试灯和DMX512分区控制，重塑商业综合体夜间形象。",
    highlights: [
      "采用3670套36W RGBW线性洗墙灯。",
      "采用1460套10W RGBW线条灯形成顶部皇冠轮廓。",
      "通过现场试灯、挡板防眩和积分球测试确认产品控制。",
      "支持平日、节日和深夜模式，形成可运营的夜景系统。",
    ],
  },
  {
    slug: "almaty-museum-of-arts-facade-lighting",
    category: "signature",
    name: "阿拉木图艺术博物馆外立面灯光",
    location: "阿拉木图，哈萨克斯坦",
    products: "1150W LED切割灯 / 建筑图案投影",
    image: "https://img.zomeiled.com/images/projects/almaty-museum/web/zomei-almaty-museum-facade-lighting-p01-final-night-hero.jpg",
    overview:
      "阿拉木图艺术博物馆建筑外立面灯光标杆项目，展示大功率精准投影、图案拼接、深化设计与跨国现场调试能力。",
    highlights: [
      "采用1150W大功率精准LED切割灯。",
      "通过多灯图案拼接形成建筑级夜间视觉表达。",
      "支持白光、静态图案和动态场景。",
      "覆盖深化设计、安装协同和现场调试支持。",
    ],
  },
];

export const projects: ProjectItem[] = withPublicStatus(
  projectMocks.map((project) => ({
    ...mapCaseToUnified(project),
    category: project.category,
  })),
);
export const projectAssets = collectAssets(projects);
