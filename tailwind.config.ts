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
    },
  },
  plugins: [],
};

export default config;
