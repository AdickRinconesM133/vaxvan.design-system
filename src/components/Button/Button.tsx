import React, { ReactNode } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { borderRadius, shadows } from "../../tokens/borders";
import { colors } from "../../tokens/colors";
import { spacing } from "../../tokens/spacing";
import { fontSizes, fontWeights } from "../../tokens/typography";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "success";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
  title: string;
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
  testID?: string;
};

const getBackgroundColor = (variant: ButtonVariant, disabled: boolean): string => {
  if (disabled) return colors.gray[300];
  const map: Record<ButtonVariant, string> = {
    primary: colors.primary,
    secondary: colors.secondary,
    ghost: colors.transparent,
    danger: colors.danger,
    success: colors.success,
  };
  return map[variant];
};

const getTextColor = (variant: ButtonVariant, disabled: boolean): string => {
  if (disabled) return colors.gray[500];
  if (variant === "ghost") return colors.text;
  return colors.textInverse;
};

const getSizeStyles = (size: ButtonSize) => {
  const sizes = {
    sm: { paddingVertical: spacing.sm, paddingHorizontal: spacing.md, fontSize: fontSizes.sm },
    md: { paddingVertical: 14, paddingHorizontal: spacing.base, fontSize: fontSizes.md },
    lg: { paddingVertical: spacing.base, paddingHorizontal: spacing.xl, fontSize: fontSizes.base },
  };
  return sizes[size];
};

export function Button({
  title,
  onPress,
  variant = "primary",
  size = "md",
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  style,
  textStyle,
  testID,
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const sizeStyles = getSizeStyles(size);
  const backgroundColor = getBackgroundColor(variant, isDisabled);
  const textColor = getTextColor(variant, isDisabled);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisabled}
      activeOpacity={0.8}
      testID={testID}
      style={[
        styles.button,
        {
          backgroundColor,
          borderColor: variant === "ghost" ? colors.border : colors.transparent,
          borderWidth: variant === "ghost" ? 1 : 0,
          paddingVertical: sizeStyles.paddingVertical,
          paddingHorizontal: sizeStyles.paddingHorizontal,
        },
        fullWidth && styles.fullWidth,
        variant !== "ghost" && !isDisabled && shadows.sm,
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator size="small" color={textColor} />
      ) : (
        <>
          {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
          <Text style={[styles.text, { color: textColor, fontSize: sizeStyles.fontSize }, textStyle]}>
            {title}
          </Text>
          {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
        </>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: borderRadius.base,
  },
  fullWidth: {
    width: "100%",
  },
  text: {
    fontWeight: fontWeights.semibold,
    textAlign: "center",
  },
  leftIcon: {
    marginRight: spacing.sm,
  },
  rightIcon: {
    marginLeft: spacing.sm,
  },
});

