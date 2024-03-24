/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
        mono: ['var(--font-roboto-mono)'],
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) rotate(45deg) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) rotate(90deg) scale(2.3)",
          },
          "66%": {
            transform: "translate(-20px, 20px) rotate(360deg) scale(1.7)",
          },
          "100%": {
            transform: "translate(0px, 0px) rotate(45deg) scale(1)",
          },
        },
      },
      colors: {
        dark: "#1b1b1b",
        light: "#f5f5f5",
        primary: "#B63E96", // 240,86,199
        primaryDark: "#58E6D9", // 80,230,217
      },
      animation: {
        'blob': "blob 20s infinite",
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage:{
    circularLight:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px, #f5f5f5 100px)",

    circularDark:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 8px, #1b1b1b 100px)",

    circularLightLg:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 80px)",

    circularDarkLg:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 8px, #1b1b1b 80px)",

    circularLightMd:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 60px)",

    circularDarkMd:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 6px, #1b1b1b 60px)",

    circularLightSm:
        "repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #f5f5f5 5px, #f5f5f5 40px)",

    circularDarkSm:
        "repeating-radial-gradient(rgba(255,255,255,0.5) 2px, #1b1b1b 4px, #1b1b1b 40px)",
      }
    },
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }
  
      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }
  
      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }
  
      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }
  
      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
  
      xs: { max: "479px" },
      // => @media (max-width: 479px) { ... }
  },
  },
  plugins: [],
}