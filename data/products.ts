export type ProductItem = {
  slug: string;
  name: string;
  cn: string;
  description: string;
  image: string;
  badge?: string;
  overview: string;
  features: string[];
  applications: string[];
  specs: Array<{ label: string; value: string }>;
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
    overview:
      "Designed for roads, streets and municipal pathways where stable light distribution and dependable operation matter most.",
    features: [
      "Optimized beam control for road safety and visual comfort.",
      "Aluminum housing with clean thermal management.",
      "Project-ready bracket and pole-mount options.",
    ],
    applications: ["Urban roads", "Municipal streets", "Community pathways"],
    specs: [
      { label: "Power", value: "30W - 240W" },
      { label: "IP Rating", value: "IP66" },
      { label: "Lifetime", value: "50,000+ hours" },
    ],
  },
  {
    slug: "solar-street-light",
    name: "Solar Street Light",
    cn: "太阳能路灯",
    description: "Independent power solution for smart and green projects.",
    image: "/images/products/product-02.svg",
    badge: "Solar",
    overview:
      "All-in-one solar lighting for areas where grid access is limited or rapid deployment is required.",
    features: [
      "Integrated solar panel, battery and controller.",
      "Adaptive dimming for extended runtime.",
      "Quick installation for remote and municipal projects.",
    ],
    applications: ["Rural roads", "Parks", "Temporary and off-grid sites"],
    specs: [
      { label: "Power", value: "20W - 200W" },
      { label: "IP Rating", value: "IP65 / IP66" },
      { label: "Warranty", value: "5 Years" },
    ],
  },
  {
    slug: "flood-light",
    name: "Flood Light",
    cn: "泛光灯",
    description: "High-output lighting for plazas, facades and open areas.",
    image: "/images/products/product-03.svg",
    badge: "Facade",
    overview:
      "High-output flood lighting for open squares, building facades and large-area illumination.",
    features: [
      "Multiple beam angles for precise scene shaping.",
      "Robust housing for outdoor project environments.",
      "Consistent performance for architectural surfaces.",
    ],
    applications: ["Plazas", "Building facades", "Open landscape areas"],
    specs: [
      { label: "Power", value: "50W - 600W" },
      { label: "Beam Angle", value: "15° / 30° / 60°" },
      { label: "Material", value: "Aluminum alloy" },
    ],
  },
  {
    slug: "solar-flood-light",
    name: "Solar Flood Light",
    cn: "太阳能泛光灯",
    description: "Efficient solar lighting with a compact all-in-one structure.",
    image: "/images/products/product-04.svg",
    badge: "Outdoor",
    overview:
      "Compact solar flood lighting designed for courtyards, site perimeters and outdoor security scenes.",
    features: [
      "Integrated solar structure for easy deployment.",
      "Long runtime battery package for nightly operation.",
      "Ideal for mixed-use outdoor environments.",
    ],
    applications: ["Courtyards", "Perimeter lighting", "Outdoor security"],
    specs: [
      { label: "Power", value: "30W - 200W" },
      { label: "Charging", value: "Solar / AC hybrid" },
      { label: "Lifetime", value: "50,000+ hours" },
    ],
  },
  {
    slug: "solar-garden-light",
    name: "Solar Garden Light",
    cn: "太阳能花园灯",
    description: "Soft atmosphere lighting for gardens and landscape paths.",
    image: "/images/products/product-02.svg",
    overview:
      "Soft solar garden lighting for landscape paths, resort gardens and low-level ambiance lighting.",
    features: [
      "Warm light output for human-scale environments.",
      "Low-glare optics for landscape comfort.",
      "Suitable for decorative and functional scenes.",
    ],
    applications: ["Gardens", "Pathways", "Resort landscapes"],
    specs: [
      { label: "Power", value: "5W - 60W" },
      { label: "Color Temp", value: "2700K - 4000K" },
      { label: "IP Rating", value: "IP65" },
    ],
  },
  {
    slug: "high-bay-light",
    name: "High Bay Light",
    cn: "高棚灯",
    description: "Professional lumen output for warehouses and industrial sites.",
    image: "/images/products/product-03.svg",
    overview:
      "High-bay lighting for warehouses, logistics centers and other indoor industrial applications.",
    features: [
      "High lumen output with stable uniformity.",
      "Suitable for high-ceiling environments.",
      "Optional optics for aisle and open-area layouts.",
    ],
    applications: ["Warehouses", "Logistics centers", "Manufacturing plants"],
    specs: [
      { label: "Power", value: "100W - 300W" },
      { label: "Mounting", value: "Hook / bracket" },
      { label: "Lifetime", value: "50,000+ hours" },
    ],
  },
  {
    slug: "moisture-proof-lamps",
    name: "Moisture Proof Lamps",
    cn: "防潮灯",
    description: "Stable performance for humid and demanding environments.",
    image: "/images/products/product-01.svg",
    overview:
      "Moisture-resistant lighting for humid rooms, car parks and utility zones with demanding environments.",
    features: [
      "Sealed body for humidity-prone applications.",
      "Reliable output under harsh operating conditions.",
      "Simple maintenance and long service life.",
    ],
    applications: ["Car parks", "Utility rooms", "Basements"],
    specs: [
      { label: "Power", value: "18W - 120W" },
      { label: "Protection", value: "Moisture resistant" },
      { label: "IP Rating", value: "IP54 / IP65" },
    ],
  },
  {
    slug: "wall-washer-light",
    name: "Wall Washer Light",
    cn: "洗墙灯",
    description: "Architectural wash lighting with clean beam control.",
    image: "/images/products/product-04.svg",
    overview:
      "Wall washing light designed for clean facade illumination and architectural texture enhancement.",
    features: [
      "Uniform wash effect for vertical surfaces.",
      "Slim profile for concealed architectural integration.",
      "Precise control for building outlines and textures.",
    ],
    applications: ["Facades", "Columns", "Architectural walls"],
    specs: [
      { label: "Power", value: "24W - 240W" },
      { label: "Beam", value: "Asymmetric / linear" },
      { label: "Body", value: "Aluminum profile" },
    ],
  },
  {
    slug: "linear-light",
    name: "Linear Light",
    cn: "线条灯",
    description: "Minimal linear lighting for building outlines and edges.",
    image: "/images/products/product-03.svg",
    overview:
      "Linear lighting for outlines, edges and decorative accent layers in contemporary outdoor scenes.",
    features: [
      "Flexible installation for linear architectural geometry.",
      "Clean visual effect for building edges and contours.",
      "Suitable for static or dynamic lighting layouts.",
    ],
    applications: ["Building outlines", "Bridge edges", "Landscape accents"],
    specs: [
      { label: "Power", value: "12W - 60W" },
      { label: "Length", value: "500mm - 2000mm" },
      { label: "IP Rating", value: "IP65" },
    ],
  },
  {
    slug: "projector-light",
    name: "Projector Light",
    cn: "投光灯",
    description: "Focused projection for signage and accent applications.",
    image: "/images/products/product-01.svg",
    overview:
      "Precise projector-style lighting for signage, accent areas and focal outdoor effects.",
    features: [
      "Narrow beam control for accurate projection.",
      "Works well for signage and emphasis lighting.",
      "Compact form factor for flexible integration.",
    ],
    applications: ["Signage", "Accent scenes", "Outdoor focal points"],
    specs: [
      { label: "Power", value: "15W - 150W" },
      { label: "Beam Angle", value: "10° - 45°" },
      { label: "Finish", value: "Outdoor coated finish" },
    ],
  },
  {
    slug: "point-light-source",
    name: "Point Light Source",
    cn: "点光源",
    description: "Precise point lighting for decorative and outline effects.",
    image: "/images/products/product-02.svg",
    overview:
      "Point light sources for decorative outlines, landmark accents and rhythmic nighttime scenes.",
    features: [
      "Supports decorative compositions and layered outlines.",
      "Suitable for rhythmic visual effects on facades and paths.",
      "Flexible spacing and layout options.",
    ],
    applications: ["Facade outlines", "Decorative frames", "Landscape accents"],
    specs: [
      { label: "Power", value: "1W - 24W" },
      { label: "Control", value: "Static / dynamic" },
      { label: "IP Rating", value: "IP65" },
    ],
  },
];
