/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
        'josefin-sans': ['"Josefin Sans"', 'sans-serif'],
        'rubik-bubbles': ['"Rubik Bubbles"', 'system-ui'],
        'sour-gummy': ['"Sour Gummy"', 'sans-serif'],
        'thirdman': ['"3rdMan"', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
