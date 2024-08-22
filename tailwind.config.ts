import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
        },
      },

      screens: {
        xs: "480px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },

      backgroundImage: {
        "hero-background":
          "url('https://cdn.dribbble.com/userupload/4270087/file/original-dd685e687e629f85a09d662b41578434.png?resize=1024x1024')",
      },
      gridTemplateColumns: {},
      fontFamily: {
        fair: ["Playfair Display", "sans-serif"],
      },
      inset: {},
      padding: {},
      height: {},
      margin: {},
      borderRadius: {
        "5px": "5px",
        "12px": "12px",
        "15px": "15px",
        "10px": "10px",
        "20px": "20px",
        "30px": "30px",
      },

      fontSize: {
        sm: "clamp(0.8rem, 0.17vw + 0.76rem, 0.89rem)",
        base: "clamp(1rem, 0.34vw + 0.91rem, 1.19rem)",
        lg: "clamp(1.25rem, 0.61vw + 1.1rem, 1.58rem)",
        xl: "clamp(1.56rem, 1vw + 1.31rem, 2.11rem)",
        "2xl": "clamp(1.95rem, 1.56vw + 1.56rem, 2.81rem)",
        "3xl": "clamp(2.44rem, 2.38vw + 1.85rem, 3.75rem)",
        "4xl": "clamp(3.05rem, 3.54vw + 2.17rem, 5rem)",
        "5xl": "clamp(3.81rem, 5.18vw + 2.52rem, 6.66rem)",
        "6xl": "clamp(4.77rem, 7.48vw + 2.9rem, 8.88rem)",
      },
      colors: {
        primary: {
          DEFAULT: "#879AFF",
        },
        background: {
          DEFAULT: "#2C2934",
          widget: "#2B2933",
          card: "#3F3C4B",
          tab: "#524E61",
          dark: "#1D1C20",
        },
        gray: {
          divider: "#9693A6",
          700: "#96949A",
          600: "#afafaf",
          500: "#8E8E8E",
          400: "#747474",
          300: "#7f7f7f",
          200: "#D9D9D9",
        },
        warning: {
          DEFAULT: "#FFB423",
          light: "#EEA821",
        },
        info: {
          DEFAULT: "#17a1fa",
          dark: "#17A1FA",
        },
        dark: {
          1: "#1F1D24",
          3: "#292935",
          DEFAULT: "#15141A",
          500: "#19171D",
          600: "#22202C",
          700: "#403D4B",
          800: "#222531",
        },
        danger: {
          DEFAULT: "#FF3F3F",
          light: "#E66161",
        },
        success: {
          DEFAULT: "#8BC34A",
        },
        light: {
          1: "#5D5966",
          2: "#41455D",
          3: "#3F3C4B",
          "card-3": "#2E2C38",
          "card-2": "#41455D",
        },
      },

      spacing: {
        "3px": "3px",
        "5px": "5px",
        "6px": "6px",
        "15px": "15px",
        "50px": "50px",
        "60px": "60px",
        "30px": "30px",
        "18px": "18px",
        "22px": "22px",
        "25px": "25px",
        "26px": "26px",
        "70px": "70px",
        "100px": "100px",
        "42px": "42px",
        3.75: "15px",
        12.5: "50px",
        7.5: "30px",
        11.5: "46px",
      },

      width: {},
      gap: {},
    },
  },
  plugins: [],
};
export default config;
