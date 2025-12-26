import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2f7',
          100: '#cce5ef',
          200: '#99cbd',
          300: '#66b1cb',
          400: '#3397b9',
          500: '#007da7',
          600: '#006486',
          700: '#004b64',
          800: '#003243',
          900: '#001921',
        },
        secondary: {
          50: '#fef9e7',
          100: '#fdf3cf',
          200: '#fbe79f',
          300: '#f9db6f',
          400: '#f7cf3f',
          500: '#f5c30f',
          600: '#c49c0c',
          700: '#937509',
          800: '#624e06',
          900: '#312703',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
