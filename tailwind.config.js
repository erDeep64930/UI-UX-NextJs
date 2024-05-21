/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        loading: 'loading 2s linear infinite',
      },
      keyframes: {
        loading: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'rotateX(0deg) rotateY(180deg)' },
          '100%': { transform: 'rotateX(180deg) rotateY(180deg)' },
        },
      },

      },
  },
  plugins: [],
};