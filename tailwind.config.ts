import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#071128",
          blue: "#2563FF",
          deep: "#123A8D",
          sky: "#8CC8FF",
          line: "#E8EEF8",
          text: "#0F1729",
          muted: "#5A687F",
          background: "#F5F8FC",
          gold: "#FFB13B",
        },
      },
      boxShadow: {
        soft: "0 18px 50px rgba(9, 31, 71, 0.08)",
        card: "0 24px 60px rgba(9, 31, 71, 0.12)",
        glass: "0 22px 40px rgba(7, 17, 40, 0.22)",
      },
      borderRadius: {
        xl2: "28px",
        xl3: "32px",
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(90deg, rgba(7, 17, 40, 0.82) 0%, rgba(7, 17, 40, 0.52) 42%, rgba(7, 17, 40, 0.08) 100%)",
        "hero-backdrop":
          "linear-gradient(180deg, rgba(7, 17, 40, 0.08) 0%, rgba(7, 17, 40, 0.22) 100%), url('/images/generated/hero-facade-lighting.png')",
      },
      letterSpacing: {
        tighter2: "-0.05em",
        tighter3: "-0.03em",
      },
    },
  },
  plugins: [],
};

export default config;
