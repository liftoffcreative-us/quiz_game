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
      },
      backgroundImage: {
        'question-bg': "url('../app/images/harry-potter.jpg')",
      }
    },
  },
  plugins: [],
};
