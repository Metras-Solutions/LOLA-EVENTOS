// Design system for Lola brand
export const design = {
  colors: {
    brand: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
    },
    eventos: "#16a34a", // Primary green
    funcional: "#059669", // Emerald
    studio: "#0d9488", // Teal
  },
  spacing: {
    section: "py-16 md:py-24",
    container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  },
  shadows: {
    card: "shadow-sm hover:shadow-md transition-shadow duration-300",
    elevated: "shadow-lg",
  },
  radius: {
    card: "rounded-2xl",
    button: "rounded-xl",
  },
} as const
