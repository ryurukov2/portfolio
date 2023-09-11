/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height'
      },
      colors: {
        dark: '#121212',
        contrast: '#FFD700',
      },
    },
  },
  plugins: [],
}

