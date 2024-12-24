/** @type {import('tailwindcss').Config} */
import tailwindcssIntersect from 'tailwindcss-intersect';
import tailwindcssAnimated from 'tailwindcss-animated';

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
    tailwindcssIntersect,
    tailwindcssAnimated
  ],
}

