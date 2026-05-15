export type SolutionItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
};

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

export const solutions: SolutionItem[] = [
  {
    slug: "road-street-lighting",
    title: "Road & Street Lighting",
    description: "Infrastructure lighting with safety and visual comfort.",
    image: "/images/solutions/solution-01.svg",
  },
  {
    slug: "solar-lighting",
    title: "Solar Lighting Solution",
    description: "Autonomous energy-saving systems for flexible deployment.",
    image: "/images/solutions/solution-02.svg",
  },
  {
    slug: "landscape-lighting",
    title: "Landscape Lighting",
    description: "Elegant ambiance for parks, gardens and public spaces.",
    image: "/images/solutions/solution-03.svg",
  },
  {
    slug: "building-facade-lighting",
    title: "Building Facade Lighting",
    description: "Architectural scenes with controlled tone and rhythm.",
    image: "/images/solutions/solution-04.svg",
  },
  {
    slug: "industrial-lighting",
    title: "Industrial Lighting",
    description: "Durable light for plants, warehouses and operating areas.",
    image: "/images/solutions/solution-01.svg",
  },
  {
    slug: "garden-park-lighting",
    title: "Garden & Park Lighting",
    description: "Human-scale lighting for leisure and public environments.",
    image: "/images/solutions/solution-02.svg",
  },
  {
    slug: "stadium-area-lighting",
    title: "Stadium & Area Lighting",
    description: "High-coverage lighting for sport and large-area projects.",
    image: "/images/solutions/solution-03.svg",
  },
  {
    slug: "urban-public-lighting",
    title: "Urban Public Lighting",
    description: "Reliable illumination for cities and public infrastructure.",
    image: "/images/solutions/solution-04.svg",
  },
];
