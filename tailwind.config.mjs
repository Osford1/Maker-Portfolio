/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        paper: "var(--paper)",
        muted: "var(--muted)",
        accent: "var(--accent)",
        accent2: "var(--accent-2)",
        border: "var(--border)",
      },
      boxShadow: {
        crisp: "4px 4px 0 rgba(0,0,0,0.9)",
        soft: "8px 8px 0 rgba(0,0,0,0.1)",
      },
      borderRadius: {
        xl: "18px",
      },
    },
  },
  plugins: [],
};
