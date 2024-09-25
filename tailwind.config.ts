import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

export default {
  content: ["./app/**/*.{ts,tsx}", "./sanity/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      accent: "#0F3A7E",
      content: {
        DEFAULT: "#333333",
        secondary: "#6E6E6E",
        inverted: "#FFFFFF",
      },
      background: {
        DEFAULT: "#FFFFFF",
        inverted: "#333333",
      }
    },
    spacing: {
      0: "0",
      2: "2px",
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      24: "24px",
      32: "32px",
      48: "48px",
      64: "64px",
      96: "96px",
    },
    fontSize: {
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      // 24
      32: "2rem",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [typography],
} satisfies Config
