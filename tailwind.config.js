/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './packages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        first: '#202529',
        second: '#32383D',
        three: '#4C555C',
        four: '#A1B4C4',
        five: '#1BC6B4',
      },
    },
  },
  plugins: [],
};
