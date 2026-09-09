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
        primary: '#b45309', // amber-700
        secondary: '#fef3c7', // amber-50
        accent: '#166534', // green-800
        dark: '#451a03', // amber-950
        light: '#fffbeb', // amber-50
      },
    },
  },
  plugins: [],
};
export default config;
