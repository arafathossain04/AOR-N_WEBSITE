import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        midnight: "var(--midnight)",
        navy: "var(--navy)",
        indigo: "var(--indigo)",
        electric: "var(--electric)",
        glacier: "var(--glacier)",
        ice: "var(--ice)",
      },
      fontFamily: { display: ["var(--font-playfair)"], body: ["var(--font-inter)"] },
      boxShadow: { glow: "0 0 60px rgba(8, 104, 219, .22)" },
      keyframes: {
        "fade-in": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "fade-up": { "0%": { opacity: "0", transform: "translateY(40px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
      animation: { "fade-in": "fade-in .7s ease-out forwards", "fade-up": "fade-up .8s ease-out forwards" },
    },
  },
  plugins: [],
};

export default config;
