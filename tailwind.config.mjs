/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './hooks/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{css,scss}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-noto-jp)', 'sans-serif'],
        brand: ['var(--font-pinyon-script)', 'cursive'],
      },
    },
  },
  plugins: [],
};
