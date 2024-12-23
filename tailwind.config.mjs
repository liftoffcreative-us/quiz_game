/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'clock-blue': '#33daff',
        'answer-bg': '#1a283b',
        'game-red': '#cf1120',
        'game-orange': '#ed8c2b',
        'game-yellow': '#ffe600',
        'game-blue': '#00b3ff',
        'game-green': '#3eb53e',
        'game-purple': '#862dba',
      },
      backgroundImage: {
        'question-bg': "url('../app/images/harry-potter.jpg')",
        'times-up-bg': "url('../app/images/timesUp.svg')",
      }
    },
  },
  plugins: [],
};
