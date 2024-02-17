/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        customGreen: '#12b886',
      },
      fontFamily: {
        robotomono: ['Roboto Mono', 'monospace'],
        notosansmono: ['Noto Sans Mono', 'monospace'],
        notosanskr: ['Noto Sans KR', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
