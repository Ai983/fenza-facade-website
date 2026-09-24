import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: "#100E0A",
          soft: "#181510",
          panel: "#1F1B14",
        },
        cream: {
          DEFAULT: "#F3EEE3",
          paper: "#EAE3D4",
        },
        gold: {
          DEFAULT: "#C6A15B",
          soft: "#D8BC86",
          deep: "#A9863F",
        },
        sand: "#A79B85",
        muted: "#6D6553",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Manrope"', "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      letterSpacing: {
        eyebrow: "0.3em",
        wide2: "0.18em",
      },
      maxWidth: {
        content: "1180px",
      },
      boxShadow: {
        tile: "0 24px 60px -30px rgba(0,0,0,0.7)",
        lift: "0 30px 80px -40px rgba(0,0,0,0.85)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "ken-burns": {
          "0%": { transform: "scale(1.08)" },
          "100%": { transform: "scale(1)" },
        },
        "scroll-cue": {
          "0%,100%": { transform: "translateY(0)", opacity: "0.4" },
          "50%": { transform: "translateY(8px)", opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.9s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in": "fade-in 1.2s ease both",
        "ken-burns": "ken-burns 18s ease-out both",
        "scroll-cue": "scroll-cue 1.8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
