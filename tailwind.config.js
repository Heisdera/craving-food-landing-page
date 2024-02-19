/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Inter, sans-serif",
    },

    extend: {
      fontFamily: {
        timesNewRoman: "Times new roman, sans-serif",
      },
      darkMode: "class",
      colors: {
        "primary-color": "#f7f7f7",
        "custom-black-50": "#2e302f",
        "custom-black-100": "#2b2b2b",
        "custom-orange-50": "#ff800c",
        "custom-orange-100": "#ff800b",
      },
      animation: {
        infinite1: "infinite1 12s linear infinite",
        infinite2: "infinite2 12s linear infinite",
        infinite3: "infinite1 25s linear infinite",
        infinite4: "infinite2 25s linear infinite",
      },
      keyframes: {
        infinite1: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        infinite2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      backgroundImage: {
        "footer-hero-pattern": "url('./public/assets/bg-pattern.png')",
      },
    },
  },
  plugins: [],
};
