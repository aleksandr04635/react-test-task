/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "bg-green": "#41938a",
        "bg-green-positive": "#377e22",
        "bg-red-negative": "#7d2121",
        "bg-gray-neytral": "#cccccc",
        /*  "dark-active-bg": "#151e37",
        "active-bg": "#f2faff",
        "dark-main-bg": "#10172a",
        "dark-additional-bg": "#1f2937",
        "secondary-border": "#6366F1",
        "light-additional-bg": "#ffffff",
        "main-border": "#078493",
        "layout-border": "#0a5b6b",
        "additional-text": "#374151",
        "dark-additional-text": "#E5E7EB", */
      },
    },
  },
  plugins: [],
};
