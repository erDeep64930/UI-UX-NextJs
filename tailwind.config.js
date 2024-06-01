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
      animation:{
        wavey:"wavey 1s linear infinite",
      },
      keyframes: {
        loading: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'rotateX(0deg) rotateY(180deg)' },
          '100%': { transform: 'rotateX(180deg) rotateY(180deg)' },
        },
      },
      keyframes:{
        wavey:{
          "0%,100%":{
            transform:"scaleY(0.5)"
          },
          "50%":{
            transform:"scaleY(1.5)"
          },
        }
      },

      },
  },
  plugins: [],
};





