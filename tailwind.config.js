/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#121212',
        contrast: '#FFD700',
      },
    },
  },
  plugins: [],
}

