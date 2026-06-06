import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/presentation/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#3B82F6", // Azul
      secondary: "#8B5CF6", // Roxo
    },
    extend: {
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        components: {
          "btn-primary":
            "px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600",
        },
      },
    },
  },
  plugins: [],
};

export default config;
