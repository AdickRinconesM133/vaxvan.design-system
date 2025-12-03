/**
 * VaxVan Design System - Typography Tokens
 */

export const fontWeights = {
  normal: "400" as const,
  medium: "500" as const,
  semibold: "600" as const,
  bold: "700" as const,
};

export const fontSizes = {
  xs: 10,
  sm: 12,
  md: 14,
  base: 16,
  lg: 18,
  xl: 20,
  xl2: 24,
  xl3: 30,
  xl4: 36,
  xl5: 48,
} as const;

export const lineHeights = {
  tight: 1.2,
  normal: 1.5,
  relaxed: 1.625,
} as const;

export const textStyles = {
  h1: { fontSize: fontSizes.xl5, fontWeight: fontWeights.bold, lineHeight: fontSizes.xl5 * lineHeights.tight },
  h2: { fontSize: fontSizes.xl4, fontWeight: fontWeights.bold, lineHeight: fontSizes.xl4 * lineHeights.tight },
  h3: { fontSize: fontSizes.xl3, fontWeight: fontWeights.semibold, lineHeight: fontSizes.xl3 * lineHeights.tight },
  h4: { fontSize: fontSizes.xl2, fontWeight: fontWeights.semibold, lineHeight: fontSizes.xl2 * lineHeights.tight },
  h5: { fontSize: fontSizes.xl, fontWeight: fontWeights.semibold, lineHeight: fontSizes.xl * lineHeights.tight },
  bodyLarge: { fontSize: fontSizes.lg, fontWeight: fontWeights.normal, lineHeight: fontSizes.lg * lineHeights.normal },
  body: { fontSize: fontSizes.base, fontWeight: fontWeights.normal, lineHeight: fontSizes.base * lineHeights.normal },
  bodySmall: { fontSize: fontSizes.md, fontWeight: fontWeights.normal, lineHeight: fontSizes.md * lineHeights.normal },
  label: { fontSize: fontSizes.md, fontWeight: fontWeights.medium, lineHeight: fontSizes.md * lineHeights.tight },
  caption: { fontSize: fontSizes.sm, fontWeight: fontWeights.normal, lineHeight: fontSizes.sm * lineHeights.normal },
} as const;

export type TextStyleKey = keyof typeof textStyles;

