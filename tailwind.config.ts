import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      sans: ["var(--font-geist-sans)"],
      mono: ["var(--font-geist-mono)"],
    },
    colors: {
      black: "#000",
      white: "#fff",
      geist: {
        0: "#000",
        100: "#111",
        200: "#333",
        300: "#444",
        400: "#666",
        500: "#888",
        600: "#999",
        700: "#eaeaea",
        800: "#fafafa",
        DEFAULT: "#fff",
      },
      error: {
        lighter: "#f7d4d6",
        light: "#f33",
        DEFAULT: "#f00",
        dark: "#d00",
      },
      success: {
        lighter: "#d3e5ff",
        light: "#3291ff",
        DEFAULT: "#0070f3",
        dark: "#0761d1",
      },
      warning: {
        lighter: "#ffefcf",
        light: "#f7b955",
        DEFAULT: "#f5a623",
        dark: "#ab570a",
      },
      highlight: {
        lighter: "##f81ce5",
        light: "##eb367f",
        DEFAULT: "##ff0080",
        dark: "##fff500",
      },
    },
  },

  plugins: [],
};
export default config;
