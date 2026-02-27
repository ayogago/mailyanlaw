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
        primary: "#32373c",
        secondary: "#0693e3",
        accent: "#cf2e2e",
        dark: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
