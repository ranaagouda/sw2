/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx,vue}"],
  content: ["./src/**/*.{js/jsx/ts/tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
