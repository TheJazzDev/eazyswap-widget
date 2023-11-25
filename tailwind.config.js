const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",

    // next_ui
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'moranga': ['Moranga', 'sans'],
      'poppins': ['Poppins', 'sans-serif'],
      'cascadia-italic': ['Cascadia-Code-italic', 'Consolas'],
      'cascadia-normal': ['Cascadia-Code-light', 'Consolas'],
    },
    extend: {
      screens: {
        sm: '480px',
      },
      colors: {
        'card-background': '#1f2937'
      },
    },
  },
  plugins: [nextui()],
};