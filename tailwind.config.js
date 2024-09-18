/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--color-background),1)",
        borderColor: "rgba(var(--color-borderColor),1)",
        cardBackground: "rgba(var(--color-cardBackground),1)",
        textPrimary: "rgba(var(--color-textPrimary),1)",
        textSecondary: "rgba(var(--color-textSecondary),1)",
        buttonColor: "rgba(var(--color-buttonColor),1)",
        buttonTextColor: "rgba(var(--color-buttonTextColor),1)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
