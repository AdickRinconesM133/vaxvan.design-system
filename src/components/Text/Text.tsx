import React from "react";
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from "react-native";

import { colors } from "../../tokens/colors";
import { fontWeights, textStyles, TextStyleKey } from "../../tokens/typography";

export type TextColor = "default" | "muted" | "inverse" | "primary" | "secondary" | "danger" | "success" | "warning";

export type TextProps = RNTextProps & {
  variant?: TextStyleKey;
  color?: TextColor;
  weight?: "normal" | "medium" | "semibold" | "bold";
  size?: number;
  center?: boolean;
  muted?: boolean;
};

const getColorValue = (color: TextColor, muted?: boolean): string => {
  if (muted) return colors.textMuted;
  const map: Record<TextColor, string> = {
    default: colors.text,
    muted: colors.textMuted,
    inverse: colors.textInverse,
    primary: colors.primary,
    secondary: colors.secondary,
    danger: colors.danger,
    success: colors.success,
    warning: colors.warning,
  };
  return map[color];
};

export function Text({
  variant = "body",
  color = "default",
  weight,
  size,
  center,
  muted,
  style,
  children,
  ...rest
}: TextProps) {
  const variantStyles = textStyles[variant];

  return (
    <RNText
      {...rest}
      style={[
        variantStyles && {
          fontSize: variantStyles.fontSize,
          fontWeight: variantStyles.fontWeight,
          lineHeight: variantStyles.lineHeight,
        },
        { color: getColorValue(color, muted) },
        weight && { fontWeight: fontWeights[weight] },
        size ? { fontSize: size } : undefined,
        center && styles.center,
        style,
      ]}
    >
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create({
  center: {
    textAlign: "center",
  },
});

