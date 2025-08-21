/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgDark: '#0a0a0a',
        bgLight: '#ffffff',
        textDark: '#ededed',
        textLight: '#171717',
      },
    },
  },
  plugins: [],
}
