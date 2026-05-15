export type SolutionItem = {
  slug: string;
  title: string;
  description: string;
  image: string;
  overview: string;
  highlights: string[];
  applications: string[];
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
    overview:
      "Engineering-oriented road lighting designed to improve safety, reduce glare and support long service cycles.",
    highlights: [
      "Stable light distribution for traffic visibility.",
      "Efficient optics for municipal and highway projects.",
      "Adaptable to poles, brackets and custom mounting layouts.",
    ],
    applications: ["Highways", "Urban roads", "Community streets"],
  },
  {
    slug: "solar-lighting",
    title: "Solar Lighting Solution",
    description: "Autonomous energy-saving systems for flexible deployment.",
    image: "/images/solutions/solution-02.svg",
    overview:
      "Solar-powered lighting systems that reduce grid dependence while keeping project deployment fast and simple.",
    highlights: [
      "Integrated solar architecture for easy installation.",
      "Smart charging and runtime control options.",
      "Suitable for off-grid and low-power infrastructure.",
    ],
    applications: ["Remote roads", "Parks", "Temporary and utility sites"],
  },
  {
    slug: "landscape-lighting",
    title: "Landscape Lighting",
    description: "Elegant ambiance for parks, gardens and public spaces.",
    image: "/images/solutions/solution-03.svg",
    overview:
      "Landscape lighting that balances visual comfort, decorative impact and low-glare nighttime environments.",
    highlights: [
      "Soft light layers for human-scale environments.",
      "Supports visual hierarchy across paths and green areas.",
      "Designed for long-term outdoor reliability.",
    ],
    applications: ["Parks", "Gardens", "Resort landscapes"],
  },
  {
    slug: "building-facade-lighting",
    title: "Building Facade Lighting",
    description: "Architectural scenes with controlled tone and rhythm.",
    image: "/images/solutions/solution-04.svg",
    overview:
      "Facade lighting that highlights textures, contours and building identity with controlled beam behavior.",
    highlights: [
      "Controlled optics for clean facade rendering.",
      "Works for vertical surfaces, edges and texture accents.",
      "Suitable for commercial and landmark projects.",
    ],
    applications: ["Hotels", "Office buildings", "Commercial facades"],
  },
  {
    slug: "industrial-lighting",
    title: "Industrial Lighting",
    description: "Durable light for plants, warehouses and operating areas.",
    image: "/images/solutions/solution-01.svg",
    overview:
      "Industrial lighting for factories, warehouses and operating zones that require durability and consistent illumination.",
    highlights: [
      "High output and stable performance in demanding environments.",
      "Long service life with simplified maintenance.",
      "Supports indoor and semi-outdoor industrial environments.",
    ],
    applications: ["Factories", "Warehouses", "Logistics centers"],
  },
  {
    slug: "garden-park-lighting",
    title: "Garden & Park Lighting",
    description: "Human-scale lighting for leisure and public environments.",
    image: "/images/solutions/solution-02.svg",
    overview:
      "Comfortable outdoor lighting for public leisure spaces where atmosphere and safety both matter.",
    highlights: [
      "Soft ambient lighting for recreational environments.",
      "Friendly visual experience for pedestrian areas.",
      "Fits decorative and functional landscape layouts.",
    ],
    applications: ["Gardens", "Parks", "Resort walkways"],
  },
  {
    slug: "stadium-area-lighting",
    title: "Stadium & Area Lighting",
    description: "High-coverage lighting for sport and large-area projects.",
    image: "/images/solutions/solution-03.svg",
    overview:
      "High coverage lighting for sports fields and large-area sites requiring strong illumination and control.",
    highlights: [
      "Wide area coverage with controlled beam deployment.",
      "Suitable for sports and infrastructure projects.",
      "Can be configured for poles and tall mounting systems.",
    ],
    applications: ["Stadiums", "Sport courts", "Large yards"],
  },
  {
    slug: "urban-public-lighting",
    title: "Urban Public Lighting",
    description: "Reliable illumination for cities and public infrastructure.",
    image: "/images/solutions/solution-04.svg",
    overview:
      "Urban public lighting systems built for city streets, pedestrian routes and public infrastructure corridors.",
    highlights: [
      "Balanced illumination for public safety and comfort.",
      "Project-friendly layout and maintenance workflow.",
      "Suitable for modern urban renewal programs.",
    ],
    applications: ["City streets", "Public squares", "Pedestrian spaces"],
  },
];
