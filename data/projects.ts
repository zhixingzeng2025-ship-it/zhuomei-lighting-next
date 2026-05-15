export type ProjectItem = {
  slug: string;
  name: string;
  location: string;
  products: string;
  image: string;
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
  },
  {
    slug: "commercial-plaza-riyadh",
    name: "Commercial Plaza Lighting",
    location: "Riyadh, Saudi Arabia",
    products: "Flood Light / Linear Light",
    image: "/images/projects/project-02.svg",
  },
  {
    slug: "landscape-park-singapore",
    name: "Landscape Park Lighting",
    location: "Singapore",
    products: "Solar Garden Light / Point Light Source",
    image: "/images/projects/project-03.svg",
  },
  {
    slug: "building-facade-london",
    name: "Building Facade Lighting",
    location: "London, UK",
    products: "Wall Washer Light / Linear Light",
    image: "/images/projects/project-04.svg",
  },
];
