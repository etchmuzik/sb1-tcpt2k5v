/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: '#47bda4',
          hover: '#3da892',
          light: 'rgba(71, 189, 164, 0.1)'
        }
      }
    }
  },
  plugins: []
};