/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./App.tsx",
    "./index.tsx",
    "./constants.ts",
    "./types.ts",
    "./services/firebaseService.ts",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          bg: '#F5E7D6', // Light beige
          primary: '#5C4B3A', // Dark brown
          secondary: '#C8B8A4', // Muted beige
          accent: '#E59500', // Amber/Orange
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}