"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type Dictionaries = Record<string, Record<string, any>>;

const dictionaries: Dictionaries = {
  en: {
    menu: {
      products: "Products",
      solutions: "Solutions",
      projects: "Projects",
      support: "Support",
      about: "About Us",
      contact: "Contact",
    },
    products: {
      streetLight: "Street Light",
      solarStreetLight: "Solar Street Light",
      floodLight: "Flood Light",
      solarFloodLight: "Solar Flood Light",
      solarGardenLight: "Solar Garden Light",
      highBayLight: "High Bay Light",
      moistureProof: "Moisture Proof Lamps",
      wallWasher: "Wall Washer Light",
      linearLight: "Linear Light",
      projectorLight: "Projector Light",
      pointLight: "Point Light Source",
    },
    solutions: {
      roadStreet: "Road & Street Lighting",
      solar: "Solar Lighting Solution",
      landscape: "Landscape Lighting",
      facade: "Building Facade Lighting",
      industrial: "Industrial Lighting",
      gardenPark: "Garden & Park Lighting",
      stadiumArea: "Stadium & Area Lighting",
      urbanPublic: "Urban Public Lighting",
    },
    projects: {
      road: "Road Lighting Project",
      plaza: "Commercial Plaza Lighting",
      landscape: "Landscape Park Lighting",
      facade: "Building Facade Lighting",
    },
    common: {
      quickInquiry: "Quick Inquiry",
      search: "Search",
      language: "Language",
      exploreProducts: "Explore Products",
      viewProjects: "View Projects",
    },
  },
  zh: {
    menu: {
      products: "产品",
      solutions: "解决方案",
      projects: "案例",
      support: "支持",
      about: "关于我们",
      contact: "联系我们",
    },
    products: {
      streetLight: "路灯",
      solarStreetLight: "太阳能路灯",
      floodLight: "泛光灯",
      solarFloodLight: "太阳能泛光灯",
      solarGardenLight: "太阳能花园灯",
      highBayLight: "高棚灯",
      moistureProof: "防潮灯",
      wallWasher: "洗墙灯",
      linearLight: "线条灯",
      projectorLight: "投光灯",
      pointLight: "点光源",
    },
    solutions: {
      roadStreet: "道路与街道照明",
      solar: "太阳能照明方案",
      landscape: "景观照明",
      facade: "建筑立面照明",
      industrial: "工业照明",
      gardenPark: "花园与公园照明",
      stadiumArea: "体育场与广场照明",
      urbanPublic: "城市公共照明",
    },
    projects: {
      road: "道路照明项目",
      plaza: "商业广场照明",
      landscape: "景观公园照明",
      facade: "建筑立面照明",
    },
    common: {
      quickInquiry: "快速询盘",
      search: "搜索",
      language: "语言",
      exploreProducts: "浏览产品",
      viewProjects: "查看案例",
    },
  },
  ru: {
    menu: {
      products: "Продукция",
      solutions: "Решения",
      projects: "Проекты",
      support: "Поддержка",
      about: "О компании",
      contact: "Контакты",
    },
    products: {
      streetLight: "Уличный светильник",
      solarStreetLight: "Солнечный уличный светильник",
      floodLight: "Прожектор",
      solarFloodLight: "Солнечный прожектор",
      solarGardenLight: "Садовый светильник на солнечной энергии",
      highBayLight: "Промышленный светильник",
      moistureProof: "Влагозащитный светильник",
      wallWasher: "Светильник для подсветки стен",
      linearLight: "Линейный светильник",
      projectorLight: "Проекторный светильник",
      pointLight: "Точечный светильник",
    },
    solutions: {
      roadStreet: "Освещение дорог и улиц",
      solar: "Солнечное освещение",
      landscape: "Ландшафтное освещение",
      facade: "Подсветка фасадов",
      industrial: "Промышленное освещение",
      gardenPark: "Освещение садов и парков",
      stadiumArea: "Освещение стадионов и площадей",
      urbanPublic: "Городское общественное освещение",
    },
    projects: {
      road: "Проект дорожного освещения",
      plaza: "Освещение коммерческой площади",
      landscape: "Освещение парка",
      facade: "Освещение фасада здания",
    },
    common: {
      quickInquiry: "Быстрый запрос",
      search: "Поиск",
      language: "Язык",
      exploreProducts: "Смотреть продукцию",
      viewProjects: "Смотреть проекты",
    },
  },
};

type Locale = keyof typeof dictionaries;

type LanguageContextType = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => any;
};

const STORAGE_KEY = "zhuomei_locale";

const LanguageContext = createContext<LanguageContextType>({
  locale: "en",
  setLocale: () => {},
  t: (key: string) => key,
});

function getByPath(source: any, path: string) {
  return path.split(".").reduce((value, part) => (value ? value[part] : undefined), source);
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? (window.localStorage.getItem(STORAGE_KEY) as Locale | null) : null;
    if (stored && dictionaries[stored]) {
      setLocaleState(stored);
      document.documentElement.lang = stored;
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, nextLocale);
    }
    document.documentElement.lang = nextLocale;
  };

  const t = useMemo(() => {
    return (key: string) => getByPath(dictionaries[locale], key) ?? key;
  }, [locale]);

  return <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
