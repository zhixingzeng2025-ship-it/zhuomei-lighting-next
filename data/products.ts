export type ProductItem = {
  slug: string;
  name: string;
  cn: string;
  description: string;
  image: string;
  badge?: string;
};

export function productKeyForSlug(slug: string) {
  const map: Record<string, string> = {
    "street-light": "streetLight",
    "solar-street-light": "solarStreetLight",
    "flood-light": "floodLight",
    "solar-flood-light": "solarFloodLight",
    "solar-garden-light": "solarGardenLight",
    "high-bay-light": "highBayLight",
    "moisture-proof-lamps": "moistureProof",
    "wall-washer-light": "wallWasher",
    "linear-light": "linearLight",
    "projector-light": "projectorLight",
    "point-light-source": "pointLight",
  };
  return map[slug] || "streetLight";
}

export const products: ProductItem[] = [
  {
    slug: "street-light",
    name: "Street Light",
    cn: "路灯",
    description: "Reliable optics for road infrastructure and urban streets.",
    image: "/images/products/product-01.svg",
    badge: "Road",
  },
  {
    slug: "solar-street-light",
    name: "Solar Street Light",
    cn: "太阳能路灯",
    description: "Independent power solution for smart and green projects.",
    image: "/images/products/product-02.svg",
    badge: "Solar",
  },
  {
    slug: "flood-light",
    name: "Flood Light",
    cn: "泛光灯",
    description: "High-output lighting for plazas, facades and open areas.",
    image: "/images/products/product-03.svg",
    badge: "Facade",
  },
  {
    slug: "solar-flood-light",
    name: "Solar Flood Light",
    cn: "太阳能泛光灯",
    description: "Efficient solar lighting with a compact all-in-one structure.",
    image: "/images/products/product-04.svg",
    badge: "Outdoor",
  },
  {
    slug: "solar-garden-light",
    name: "Solar Garden Light",
    cn: "太阳能花园灯",
    description: "Soft atmosphere lighting for gardens and landscape paths.",
    image: "/images/products/product-02.svg",
  },
  {
    slug: "high-bay-light",
    name: "High Bay Light",
    cn: "高棚灯",
    description: "Professional lumen output for warehouses and industrial sites.",
    image: "/images/products/product-03.svg",
  },
  {
    slug: "moisture-proof-lamps",
    name: "Moisture Proof Lamps",
    cn: "防潮灯",
    description: "Stable performance for humid and demanding environments.",
    image: "/images/products/product-01.svg",
  },
  {
    slug: "wall-washer-light",
    name: "Wall Washer Light",
    cn: "洗墙灯",
    description: "Architectural wash lighting with clean beam control.",
    image: "/images/products/product-04.svg",
  },
  {
    slug: "linear-light",
    name: "Linear Light",
    cn: "线条灯",
    description: "Minimal linear lighting for building outlines and edges.",
    image: "/images/products/product-03.svg",
  },
  {
    slug: "projector-light",
    name: "Projector Light",
    cn: "投光灯",
    description: "Focused projection for signage and accent applications.",
    image: "/images/products/product-01.svg",
  },
  {
    slug: "point-light-source",
    name: "Point Light Source",
    cn: "点光源",
    description: "Precise point lighting for decorative and outline effects.",
    image: "/images/products/product-02.svg",
  },
];
