/**
 * VaxVan Design System - Spacing Tokens
 * Escala de espaciado basada en 4px
 */

export const spacing = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  xl2: 32,
  xl3: 40,
  xl4: 48,
  xl5: 64,
} as const;

export type SpacingKey = keyof typeof spacing;

