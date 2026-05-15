import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "ceemi-beige": "#C4956A",
        "ceemi-cream": "#FDF6EE",
        "ceemi-white": "#FAF7F2",
        "ceemi-dark": "#3D2B1F",
        "ceemi-brown": "#6B4C2A",
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
