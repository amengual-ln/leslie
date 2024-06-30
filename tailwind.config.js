/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        leslie_gold: '#E2A317',
        leslie_black: '#0D0E0E'
      }
    },
  },
  plugins: [
    require('tailwindcss-animated'),
    require('tailwindcss-intersect')
  ],
}

