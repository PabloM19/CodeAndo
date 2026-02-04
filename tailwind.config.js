/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta pastel para resaltar elementos
        accent: {
          DEFAULT: '#deffa0', // Verde claro - color principal
          pink: '#f9e0e0', // Rosa pálido
          peach: '#ffece3', // Melocotón
          yellow: '#feffda', // Amarillo lima
          green: '#deffa0', // Verde claro
          turquoise: '#d0fff8', // Turquesa
        },
      },
      fontFamily: {
        sans: ['system-ui', 'sans-serif'],
      },
      borderRadius: {
        'bento': '16px',
        'bento-lg': '22px',
      },
    },
  },
  plugins: [],
}
