/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#00a34d',
        grayMain: '#ececec',
        darkMain: '#333333',
        darkColor: 'rgb(23 23 23)',
        lightColor: 'rgb(249 250 251)',
        lightHover: '#dfe0e0',
        darkHover: '#444950',
      }
    },
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      xxl: 28,
      '2xl': '2rem',
      xlg: '2.5rem',
    },
  },
  darkMode: 'class',
  plugins: [],
}
