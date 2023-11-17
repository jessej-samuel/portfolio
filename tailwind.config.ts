import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-geist-sans)"],
      mono: ["Space Mono", "monospace"],
    },
    extend: {
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
        purple: {
          lighter: "#e3d7fc",
          light: "#8a63d2",
          DEFAULT: "#7928ca",
          dark: "#4c2889",
        },
        lapis: "#15547F",
        timberwolf: {
          lighter: "#F7F8F8",
          light: "#E5E7E7",
          DEFAULT: "#D3D5D5",
          dark: "#BFC1C1",
        },
        dimgray: "#6E6E6E",
        gunmetal: "#333745",
      },
    },
  },

  plugins: [],
};
export default config;
