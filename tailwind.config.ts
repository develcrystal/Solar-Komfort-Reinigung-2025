import type { Config } from "tailwindcss";

const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const config: Config = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0052CC",      // A strong, professional blue
        secondary: "#F5F7FA",    // A light, clean gray for backgrounds
        accent: "#FFC700",       // A vibrant yellow for highlights and CTAs
        neutral: colors.neutral,
      },
      spacing: {
        "section-py": "4rem",
        "container-px": "1.5rem",
        "stack-sm": "0.75rem",    // Small vertical space (e.g., between text elements)
        "container-md": "1.5rem", // Standard component padding
      },
      borderRadius: {
        "radius-default": "0.5rem", // Default radius for interactive elements
      },
      boxShadow: {
        "shadow-elevation-1": "0px 1px 3px rgba(0, 0, 0, 0.1)", // Subtle shadow for cards
      },
      maxWidth: {
        '8xl': '90rem', // 1440px
      },
      fontFamily: {
        // Set 'Inter' as the primary sans-serif font, using the CSS variable provided by next/font
        sans: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
export default config;
