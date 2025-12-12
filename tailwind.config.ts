import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        body: "#242424",
        text: "rgba(255, 255, 255, 0.87)",
      },
    },
  },
  plugins: [],
};

export default config;
