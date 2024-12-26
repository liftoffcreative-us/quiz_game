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
        'game-pink': '#fc2aaf',
        'game-blue': '#00b3ff',
        'game-green': '#3eb53e',
        'game-purple': '#862dba',
        'game-bg': '#06214e',
      },
      backgroundImage: {
        'question-bg': "url('../app/images/harry-potter.jpg')",
        'times-up-bg': "url('../app/images/timesUp.svg')",
        // 'history-bg': "url('../app/images/history1.jpg')",
      },
      animation: {
        'pulse-fast': 'pulse .5s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      }
    },
  },
  plugins: [],
};
