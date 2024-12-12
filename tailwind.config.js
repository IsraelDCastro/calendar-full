/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f1f8fd",
          100: "#deeffb",
          200: "#c5e4f8",
          300: "#9dd4f3",
          400: "#6fbbeb",
          500: "#4d9fe4",
          600: "#3884d8",
          700: "#2f70c6",
          800: "#2c5aa1",
          900: "#284d80",
          950: "#1d304e",
          foreground: "#f1f8fd",
          DEFAULT: "#3884d8"
        },
        secondary: {
          50: "#effefc",
          100: "#c7fff9",
          200: "#90fff3",
          300: "#50f8eb",
          400: "#1de4dc",
          500: "#04c8c3",
          600: "#00a1a1",
          700: "#058080",
          800: "#096466",
          900: "#0d5354",
          950: "#003033",
          foreground: "#effefc",
          DEFAULT: "#00a1a1"
        }
      },
      fontFamily: {
        sans: [
          "Montserrat",
          "Lato",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif"
        ],
        serif: ["Rubik", "Lato", '"Helvetica Neue"', "Helvetica", "Arial", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "'Courier New'", "monospace"],
        cookie: ["Cookie", "serif"]
      }
    }
  },
  plugins: [nextui()]
};
