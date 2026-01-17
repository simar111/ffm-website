/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        primaryDark: "#1E40AF",
        accent: "#38BDF8",
        bgLight: "#F8FAFC",
        textPrimary: "#0F172A",
        textSecondary: "#64748B",
        borderLight: "#E2E8F0",
      },
    },
  },
  plugins: [],
}
