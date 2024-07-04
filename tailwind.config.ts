import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",  // Include this if you're using a `src` directory
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins"],
      },
    },
  },
  plugins: [],
};

export default config;
