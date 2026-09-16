import { productSeries, type ProductSeriesItem } from "./productSeries";

export type ProductGroup = {
  slug: string;
  labels: Record<"en" | "zh" | "ru", string>;
  productSlugs: string[];
  featuredProductId: string;
  heroImage: string;
  imageClassName: string;
  tileClassName: string;
};

export type ProductFamily = {
  key: string;
  title: string;
  seriesCode: string;
  modelRange: string;
  representative: ProductSeriesItem;
  variants: ProductSeriesItem[];
};

export type ProductSpecSummary = {
  key: "power" | "ip" | "voltage" | "beam";
  value: string;
};

export const productGroups: ProductGroup[] = [
  {
    slug: "linear-lighting",
    labels: {
      en: "Linear Lighting",
      zh: "线形照明",
      ru: "Линейное освещение",
    },
    productSlugs: ["wall-washer-light", "linear-light"],
    featuredProductId: "zm-lin-xt1.1",
    heroImage: "https://img.zomeiled.com/images/generated/products/library/linear-light-ZM-LIN-XT1.1.png",
    imageClassName: "object-contain scale-[0.94]",
    tileClassName: "md:col-span-2 md:row-span-2",
  },
  {
    slug: "projector-light",
    labels: {
      en: "Projector Light",
      zh: "投光灯",
      ru: "Проекторный светильник",
    },
    productSlugs: ["projector-light"],
    featuredProductId: "zm-sl-fs2.0",
    heroImage: "https://img.zomeiled.com/images/generated/products/library/projector-light-ZM-SL-FS2.0.png",
    imageClassName: "object-contain scale-[0.92]",
    tileClassName: "md:row-span-2",
  },
  {
    slug: "point-light-source",
    labels: {
      en: "Point Light Source",
      zh: "点光源",
      ru: "Точечный источник",
    },
    productSlugs: ["point-light-source"],
    featuredProductId: "zm-pls-yd80",
    heroImage: "https://img.zomeiled.com/images/generated/products/library/point-light-source-ZM-PLS-YD80.png",
    imageClassName: "object-contain scale-[0.92]",
    tileClassName: "",
  },
  {
    slug: "wall-lamp",
    labels: {
      en: "Wall Lamp",
      zh: "壁灯",
      ru: "Настенный светильник",
    },
    productSlugs: ["wall-lamp"],
    featuredProductId: "zm-wl-yb2.1-yb2.2",
    heroImage: "https://img.zomeiled.com/images/generated/products/library/wall-lamp-ZM-WL-YB2.1-YB2.2.png",
    imageClassName: "object-contain scale-[0.9]",
    tileClassName: "",
  },
  {
    slug: "general-lighting",
    labels: {
      en: "General Lighting",
      zh: "常规照明",
      ru: "Общее освещение",
    },
    productSlugs: ["flood-light", "street-light", "solar-light", "high-bay-light"],
    featuredProductId: "ZOMEI-FL23-300W",
    heroImage: "https://img.zomeiled.com/images/generated/products/library/flood-light-ZOMEI-FL23-300W.png",
    imageClassName: "object-contain scale-[0.88]",
    tileClassName: "md:col-span-2 md:row-span-2",
  },
  {
    slug: "specialty-lighting",
    labels: {
      en: "Specialty Lighting",
      zh: "特种照明",
      ru: "Специальное освещение",
    },
    productSlugs: ["corrugated-light", "step-lamp", "window-sill-light", "column-lamp", "underwater-light", "specialty-light"],
    featuredProductId: "zm-tl-syc1.0",
    heroImage: "https://img.zomeiled.com/images/generated/products/library/column-lamp-ZM-TL-SYC1.0.png",
    imageClassName: "object-contain scale-[0.9]",
    tileClassName: "md:col-span-2 md:row-span-2",
  },
];

export function getProductGroup(slug: string) {
  return productGroups.find((group) => group.slug === slug);
}

export function getProductGroupItems(group: ProductGroup): ProductSeriesItem[] {
  const featuredItem = productSeries.find((item) => item.id === group.featuredProductId);
  if (featuredItem) return [featuredItem];

  return productSeries.filter((item) => group.productSlugs.includes(item.categorySlug)).slice(0, 1);
}

function compactSpecValue(value = "") {
  const clean = value.replace(/\s+/g, " ").trim();
  if (!clean) return "";
  if (clean.length <= 32) return clean;
  return `${clean.slice(0, 30)}...`;
}

export function getProductGroupSpecs(group: ProductGroup): ProductSpecSummary[] {
  const representative = getProductGroupItems(group)[0];
  if (!representative) return [];

  return [
    { key: "power" as const, value: compactSpecValue(representative.power) },
    { key: "ip" as const, value: compactSpecValue(representative.ip) },
    { key: "voltage" as const, value: compactSpecValue(representative.voltage) },
    { key: "beam" as const, value: compactSpecValue(representative.beam) },
  ].filter((item) => item.value);
}

/** Customer-facing family layer; individual model records remain unchanged. */
export function productFamilyKey(item: ProductSeriesItem): string {
  if (item.series?.trim()) return item.series.trim();
  if (item.code?.trim()) {
    const segments = item.code.trim().split("-");
    if (segments[0] === "ZM" && segments[1] === "SL" && segments[2]) {
      const modelFamily = segments[2].match(/^[A-Za-z]+/)?.[0];
      if (modelFamily) return `${segments.slice(0, 2).join("-")}-${modelFamily}`;
    }
    if (segments[0] === "ZM" && segments[1] === "WL" && segments[2]) {
      const modelFamily = segments[2].match(/^[A-Za-z]+/)?.[0];
      if (modelFamily) return `${segments.slice(0, 2).join("-")}-${modelFamily}`;
    }
    if (segments[0] === "ZM" && segments[1] === "STL" && segments[2]) {
      const modelFamily = segments[2].match(/^[A-Za-z]+/)?.[0];
      if (modelFamily) return `${segments.slice(0, 2).join("-")}-${modelFamily}`;
    }
    if (segments.length >= 2) return segments.slice(0, 2).join("-");
  }
  const source = (item.model || item.code).trim();
  return source
    .replace(/[-_ ]?\d+(?:\.\d+)?W$/i, "")
    .replace(/[-_ ]?\d+(?:\.\d+)?(?:W|V)$/i, "")
    .replace(/[-_ ]+$/, "");
}

function productModelSortValue(item: ProductSeriesItem) {
  return item.model || item.code;
}

function compactModelRange(variants: ProductSeriesItem[]) {
  const models = variants.map((item) => item.model || item.code).filter(Boolean);
  if (models.length <= 1) return models[0] || "";

  const prefix = models[0].match(/^[A-Za-z]+/)?.[0];
  const parsedNumbers = models
    .map((model) => {
      const match = model.match(/^([A-Za-z]+)(\d+(?:\.\d+)?)$/);
      return match && match[1] === prefix ? { raw: match[2], value: Number(match[2]) } : undefined;
    })
    .filter((value): value is { raw: string; value: number } => Boolean(value));

  if (prefix && parsedNumbers.length === models.length) {
    const shouldKeepDecimal = parsedNumbers.some((item) => item.raw.includes("."));
    const formatValue = (value: number) => shouldKeepDecimal ? value.toFixed(1) : String(value);
    return `${prefix}${formatValue(Math.min(...parsedNumbers.map((item) => item.value)))}-${formatValue(Math.max(...parsedNumbers.map((item) => item.value)))}`;
  }

  return models.join(" / ");
}

export function getProductSeriesFamilies(group: ProductGroup): ProductFamily[] {
  const families = new Map<string, ProductSeriesItem[]>();
  for (const item of getProductGroupItems(group)) {
    const key = productFamilyKey(item);
    const current = families.get(key) || [];
    current.push(item);
    families.set(key, current);
  }

  return Array.from(families.entries()).map(([key, variants]) => {
    const sortedVariants = [...variants].sort((a, b) =>
      productModelSortValue(a).localeCompare(productModelSortValue(b), undefined, { numeric: true }),
    );
    const representative = sortedVariants[0];
    const seriesCode = key.replace(/^ZOMEI-/, "");
    const modelRange = compactModelRange(sortedVariants);
    return {
      key,
      seriesCode,
      modelRange,
      title: representative.seriesName || `${seriesCode}${modelRange ? ` ${modelRange}` : ""}`,
      representative,
      variants: sortedVariants,
    };
  });
}

export function productSeriesImage(item: ProductSeriesItem) {
  return item.image || `https://img.zomeiled.com/images/generated/products/library/${item.categorySlug}-${item.code}.png`;
}
