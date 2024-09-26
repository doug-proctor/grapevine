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
      accent: {
        DEFAULT: "#0F3A7E",
        hover: "#0a2b67",
      },
      content: {
        DEFAULT: "#333333",
        secondary: "#6E6E6E",
        inverted: "#FFFFFF",
      },
      background: {
        DEFAULT: "#FFFFFF",
        secondary: "#F4F6FF",
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
      80: "80px",
      96: "96px",
      112: "112px",
      128: "128px",
    },
    fontSize: {
      14: "0.875rem",
      16: "1rem",
      18: "1.125rem",
      24: "1.5rem",
      32: "2rem",
      56: "3.5rem",
      64: "4rem",
    },
    lineHeight: {
      24: "1.5rem",
      28: "1.75rem",
    },
    borderRadius: {
      4: "4px",
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
