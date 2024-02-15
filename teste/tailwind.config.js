/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary': '#0EB1D2',
        'secondary': '#E4FDE1',
        'gradient': '#007c9d',
        'gradient-end': '#41d7f5'
      },
    },
  },
  plugins: [],
}

