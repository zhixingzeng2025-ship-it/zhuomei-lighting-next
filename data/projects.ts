export type ProjectItem = {
  slug: string;
  name: string;
  location: string;
  products: string;
  image: string;
  overview: string;
  highlights: string[];
};

export function projectKeyForSlug(slug: string) {
  const map: Record<string, string> = {
    "road-lighting-dubai": "road",
    "commercial-plaza-riyadh": "plaza",
    "landscape-park-singapore": "landscape",
    "building-facade-london": "facade",
  };
  return map[slug] || "road";
}

export const projects: ProjectItem[] = [
  {
    slug: "road-lighting-dubai",
    name: "Road Lighting Project",
    location: "Dubai, UAE",
    products: "Street Light / Solar Street Light",
    image: "/images/projects/project-01.svg",
    overview:
      "A roadway lighting deployment focused on stable coverage, reduced glare and strong project delivery visibility.",
    highlights: [
      "Highway-grade visual comfort and safety.",
      "Coordinated pole spacing for broad coverage.",
      "Balanced energy and maintenance targets.",
    ],
  },
  {
    slug: "commercial-plaza-riyadh",
    name: "Commercial Plaza Lighting",
    location: "Riyadh, Saudi Arabia",
    products: "Flood Light / Linear Light",
    image: "/images/projects/project-02.svg",
    overview:
      "A commercial plaza project combining facade lighting and open-area flood lighting for a premium nighttime image.",
    highlights: [
      "Architectural emphasis with clean beam control.",
      "Outdoor public areas with strong visual identity.",
      "Project-friendly combination of flood and linear lighting.",
    ],
  },
  {
    slug: "landscape-park-singapore",
    name: "Landscape Park Lighting",
    location: "Singapore",
    products: "Solar Garden Light / Point Light Source",
    image: "/images/projects/project-03.svg",
    overview:
      "Landscape project built around softer lighting layers for parks, paths and decorative evening scenes.",
    highlights: [
      "Human-scale landscape atmosphere.",
      "Solar-friendly deployment for green environments.",
      "Decorative points used to enhance path rhythm.",
    ],
  },
  {
    slug: "building-facade-london",
    name: "Building Facade Lighting",
    location: "London, UK",
    products: "Wall Washer Light / Linear Light",
    image: "/images/projects/project-04.svg",
    overview:
      "A facade lighting project focused on architectural texture, outline clarity and controlled nighttime rhythm.",
    highlights: [
      "Facade washing with stable tonal consistency.",
      "Linear accents for edges and contours.",
      "Premium visual presence in urban context.",
    ],
  },
];
