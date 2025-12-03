/**
 * VaxVan Design System - Color Tokens
 * Paleta de colores de la marca VaxVan
 */

export const colors = {
  // Brand Colors
  primary: "#F28C00",
  primaryDark: "#D87C00",
  primaryLight: "#FFB84D",

  // Secondary Colors
  secondary: "#2D7CF6",
  secondaryDark: "#1A5FC4",
  secondaryLight: "#5A9AFF",

  // Neutral
  white: "#FFFFFF",
  black: "#000000",

  // Gray Scale
  gray: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    900: "#171717",
  },

  // Text
  text: "#222222",
  textMuted: "#6B7280",
  textInverse: "#FFFFFF",

  // Backgrounds
  background: "#FFFFFF",
  backgroundSecondary: "#F6F6F7",
  card: "#F6F6F7",

  // Borders
  border: "#E5E7EB",
  borderLight: "#F3F4F6",

  // Semantic
  success: "#16A34A",
  successLight: "#22C55E",
  danger: "#DC2626",
  dangerLight: "#EF4444",
  warning: "#F59E0B",
  warningLight: "#FBBF24",
  info: "#3B82F6",
  infoLight: "#60A5FA",

  // Overlay
  overlay: "rgba(0, 0, 0, 0.5)",
  transparent: "transparent",
} as const;

export type ColorKey = keyof typeof colors;

