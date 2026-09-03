import {
  collectAssets,
  mapProductToUnified,
  withPublicStatus,
  type ZomeiProductFields,
} from "./zomei-unified";

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
} & ZomeiProductFields;

export function productKeyForSlug(slug: string) {
  const map: Record<string, string> = {
    "wall-washer-light": "wallWasher",
    "linear-light": "linearLight",
    "projector-light": "projectorLight",
    "point-light-source": "pointLight",
    "corrugated-light": "corrugatedLight",
    "column-lamp": "columnLamp",
    "window-sill-light": "windowSillLight",
    "step-lamp": "stepLamp",
    "wall-lamp": "wallLamp",
    "flood-light": "floodLight",
    "street-light": "streetLight",
    "solar-light": "solarLight",
  };
  return map[slug] || "wallWasher";
}

export function productGroupHrefForSlug(slug: string) {
  const map: Record<string, string> = {
    "wall-washer-light": "/products/linear-lighting",
    "linear-light": "/products/linear-lighting",
    "projector-light": "/products/projector-light",
    "point-light-source": "/products/point-light-source",
    "wall-lamp": "/products/wall-lamp",
    "flood-light": "/products/general-lighting",
    "street-light": "/products/general-lighting",
    "solar-light": "/products/general-lighting",
    "high-bay-light": "/products/general-lighting",
    "corrugated-light": "/products/specialty-lighting",
    "column-lamp": "/products/specialty-lighting",
    "window-sill-light": "/products/specialty-lighting",
    "step-lamp": "/products/specialty-lighting",
    "underwater-light": "/products/specialty-lighting",
    "specialty-light": "/products/specialty-lighting",
  };

  return map[slug] || "/products";
}

const sharedSpecs = [
  { label: "Material", value: "Die-cast / aluminum housing" },
  { label: "IP Rating", value: "Outdoor project grade" },
  { label: "Color Temp", value: "2700K - 6500K / RGB optional" },
];

const productMocks = [
  {
    slug: "wall-washer-light",
    name: "LED Wall Washer",
    cn: "LED洗墙灯",
    description: "Linear architectural wash lighting for facade surfaces and wall textures.",
    image: "/images/generated/products/categories/wall-washer-light.png",
    badge: "Facade",
    overview:
      "LED wall washer lights provide clean linear illumination for building facades, bridges, hotels and commercial exteriors.",
    features: [
      "Uniform wall washing effect for vertical surfaces.",
      "Slim linear structure for architectural integration.",
      "Multiple beam options for precise facade control.",
    ],
    applications: ["Building facades", "Bridges", "Hotels", "Commercial walls"],
    specs: sharedSpecs,
  },
  {
    slug: "linear-light",
    name: "LED Linear Luminaire",
    cn: "LED线条灯",
    description: "Minimal linear lighting for outlines, edges and architectural contours.",
    image: "/images/generated/products/categories/linear-light.png",
    badge: "Linear",
    overview:
      "LED linear luminaires are used for building outlines, edges, landscape accents and long continuous lighting effects.",
    features: [
      "Clean continuous line effect.",
      "Flexible installation along edges and contours.",
      "Suitable for static or dynamic facade layouts.",
    ],
    applications: ["Building outlines", "Bridge edges", "Landscape accents"],
    specs: sharedSpecs,
  },
  {
    slug: "projector-light",
    name: "LED Projector Light",
    cn: "LED投光灯",
    description: "Focused projection lighting for signage, facade accents and precise outdoor scenes.",
    image: "/images/generated/products/categories/projector-light.png",
    badge: "Accent",
    overview:
      "LED projector lights create focused beams for signage, decorative accents and architectural focal points.",
    features: [
      "Controlled beam angle for focused lighting.",
      "Compact outdoor structure.",
      "Suitable for highlights, signage and facade details.",
    ],
    applications: ["Signage", "Accent lighting", "Facade focal points"],
    specs: sharedSpecs,
  },
  {
    slug: "point-light-source",
    name: "LED Point Light Source",
    cn: "LED点光源",
    description: "Compact point lighting for decorative pixels, outlines and rhythmic facade effects.",
    image: "/images/generated/products/categories/point-light-source.png",
    badge: "Pixel",
    overview:
      "LED point light sources are compact decorative luminaires for facade pixels, outline lighting and creative night scenes.",
    features: [
      "Compact point-source structure.",
      "Supports decorative and rhythmic lighting layouts.",
      "Flexible spacing for facade or landscape installation.",
    ],
    applications: ["Facade pixels", "Decorative outlines", "Landscape rhythm"],
    specs: sharedSpecs,
  },
  {
    slug: "corrugated-light",
    name: "LED Corrugated Luminaire",
    cn: "LED瓦楞灯",
    description: "Compact roof and tile-surface lighting for traditional and modern architecture.",
    image: "/images/generated/products/categories/corrugated-light.png",
    badge: "Roof",
    overview:
      "LED corrugated luminaires are designed for rooflines, tile surfaces and architectural detail lighting.",
    features: [
      "Form factor suited to roof and tile surfaces.",
      "Soft controlled output for architectural details.",
      "Outdoor-ready housing for long-term use.",
    ],
    applications: ["Rooflines", "Tile surfaces", "Architectural details"],
    specs: sharedSpecs,
  },
  {
    slug: "column-lamp",
    name: "LED Column Lamp",
    cn: "LED柱灯",
    description: "Vertical column lighting for entrances, gardens and public outdoor spaces.",
    image: "/images/generated/products/categories/column-lamp.png",
    badge: "Column",
    overview:
      "LED column lamps support human-scale outdoor lighting for entrances, gardens, walkways and public areas.",
    features: [
      "Vertical structure for landscape and entrance scenes.",
      "Comfortable light output for pedestrian spaces.",
      "Clean architectural appearance.",
    ],
    applications: ["Entrances", "Gardens", "Walkways", "Public spaces"],
    specs: sharedSpecs,
  },
  {
    slug: "window-sill-light",
    name: "LED Window Sill Light",
    cn: "LED窗台灯",
    description: "Detail lighting for windows, ledges and facade layers.",
    image: "/images/generated/products/categories/window-sill-light.png",
    badge: "Detail",
    overview:
      "LED window sill lights bring controlled illumination to window ledges, facade layers and architectural details.",
    features: [
      "Designed for ledges and narrow architectural positions.",
      "Helps shape facade depth at night.",
      "Compact structure for hidden installation.",
    ],
    applications: ["Window ledges", "Facade details", "Commercial buildings"],
    specs: sharedSpecs,
  },
  {
    slug: "step-lamp",
    name: "LED Step Lamp",
    cn: "LED台阶灯",
    description: "Low-level step lighting for safe paths, stairs and landscape transitions.",
    image: "/images/generated/products/categories/step-lamp.png",
    badge: "Step",
    overview:
      "LED step lamps provide low-glare guidance lighting for stairs, paths, courtyards and landscape transitions.",
    features: [
      "Low-level light for visual guidance.",
      "Suitable for stairs and walkway details.",
      "Compact installation for architectural surfaces.",
    ],
    applications: ["Steps", "Walkways", "Courtyards", "Landscape paths"],
    specs: sharedSpecs,
  },
  {
    slug: "wall-lamp",
    name: "LED Wall Lamp",
    cn: "LED壁灯",
    description: "Decorative and functional wall lighting for outdoor architectural spaces.",
    image: "/images/generated/products/categories/wall-lamp.png",
    badge: "Wall",
    overview:
      "LED wall lamps combine decorative lighting and functional outdoor illumination for walls, entrances and corridors.",
    features: [
      "Wall-mounted structure for outdoor architecture.",
      "Decorative up/down or directional lighting effects.",
      "Suitable for residential and commercial exteriors.",
    ],
    applications: ["Exterior walls", "Entrances", "Corridors", "Courtyards"],
    specs: sharedSpecs,
  },
  {
    slug: "flood-light",
    name: "LED Flood Light",
    cn: "LED泛光灯",
    description: "High-output area lighting for facades, plazas and open outdoor spaces.",
    image: "/images/generated/products/categories/flood-light.png",
    badge: "Area",
    overview:
      "LED flood lights deliver strong output for plazas, building facades, landscape areas and general outdoor illumination.",
    features: [
      "High-output lighting for broad coverage.",
      "Beam options for different project distances.",
      "Robust housing for outdoor project use.",
    ],
    applications: ["Plazas", "Facades", "Open areas", "Landscape spaces"],
    specs: sharedSpecs,
  },
  {
    slug: "street-light",
    name: "LED Street Light",
    cn: "LED路灯",
    description: "Reliable road and public-space lighting for municipal and infrastructure projects.",
    image: "/images/generated/products/categories/street-light.png",
    badge: "Road",
    overview:
      "LED street lights are designed for roads, streets, parks and public infrastructure where stable illumination matters.",
    features: [
      "Road-oriented optics for visibility and safety.",
      "Efficient light distribution for public projects.",
      "Project-ready mounting and maintenance workflow.",
    ],
    applications: ["Urban roads", "Municipal streets", "Parks", "Public routes"],
    specs: sharedSpecs,
  },
  {
    slug: "solar-light",
    name: "LED Solar Light",
    cn: "LED太阳能灯",
    description: "Solar-powered outdoor lighting for flexible, energy-saving project deployment.",
    image: "/images/generated/products/categories/solar-light.png",
    badge: "Solar",
    overview:
      "LED solar lights support off-grid outdoor projects with integrated energy-saving lighting systems.",
    features: [
      "Solar-powered operation for flexible deployment.",
      "Suitable for areas with limited grid access.",
      "Energy-saving design for outdoor applications.",
    ],
    applications: ["Remote roads", "Parks", "Courtyards", "Off-grid areas"],
    specs: sharedSpecs,
  },
];

export const products: ProductItem[] = withPublicStatus(productMocks.map(mapProductToUnified));
export const productAssets = collectAssets(products);
