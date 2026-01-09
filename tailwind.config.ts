import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0B5FFF",
          black: "#05060A",
          yellow: "#FFB703"
        }
      },
      boxShadow: {
        glow: "0 0 40px rgba(11, 95, 255, 0.35)"
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(11,95,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(11,95,255,0.08) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
