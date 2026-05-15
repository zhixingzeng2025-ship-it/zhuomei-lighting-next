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
          navy: "#081A3B",
          blue: "#2D8CFF",
          deep: "#123A8D",
          sky: "#8CC8FF",
          line: "#E8EEF8",
          text: "#0F1729",
          muted: "#5A687F",
          background: "#F5F8FC",
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
          "linear-gradient(90deg, rgba(8, 26, 59, 0.84) 0%, rgba(8, 26, 59, 0.4) 52%, rgba(8, 26, 59, 0.18) 100%)",
        "hero-backdrop":
          "linear-gradient(180deg, rgba(8, 26, 59, 0.38) 0%, rgba(8, 26, 59, 0.76) 100%), url('/images/hero.svg')",
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
