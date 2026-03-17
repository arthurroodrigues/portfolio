import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        2: "2",
        60: "60",
      },
      spacing: {
        90: "22.5rem",
        125: "31.25rem",
        150: "37.5rem",
      },
      rotate: {
        225: "225deg",
      },
    },
  },
  plugins: [],
};

export default config;
