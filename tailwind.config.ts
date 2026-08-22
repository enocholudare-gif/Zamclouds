import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A1128",
        accent: "#B87333",
        "accent-light": "#CD7F32",
        dark: "#050505",
        "dark-elevated": "#0a0a0a",
        "dark-border": "#1a1a1a",
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'Space Grotesk'", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-sm": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display-md": ["4rem", { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-lg": ["5.5rem", { lineHeight: "1", letterSpacing: "-0.04em" }],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        shimmer: "shimmer 2s infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
