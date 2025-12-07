import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { colors } from "./colors";
import { textStyles, fontWeights, fontSizes } from "./typography";
import { spacing } from "./spacing";
import { borderRadius, shadows } from "./borders";

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  subsectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 12,
    color: "#555",
    marginTop: 10,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  colorItem: {
    width: 100,
    marginRight: 16,
    marginBottom: 16,
  },
  colorBox: {
    width: 100,
    height: 60,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#eee",
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
  },
  value: {
    fontSize: 10,
    color: "#666",
    fontFamily: "monospace",
  },
  typeRow: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingBottom: 8,
  },
  spacingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  spacingBox: {
    height: 24,
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  spacingLabel: {
    width: 60,
    fontSize: 12,
    color: "#333",
  },
  borderRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },
  borderBox: {
    width: 80,
    height: 80,
    backgroundColor: colors.secondaryLight,
    marginBottom: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  shadowBox: {
    width: 100,
    height: 100,
    backgroundColor: "white",
    marginBottom: 20,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
});

// Componente contenedor para la documentación
const TokensDocumentation = ({ show }: { show: "colors" | "typography" | "spacing" | "borders" }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {show === "colors" && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Colors</Text>
          <View style={styles.grid}>
            {Object.entries(colors).map(([name, value]) => {
              if (typeof value === "string") {
                return (
                  <View key={name} style={styles.colorItem}>
                    <View style={[styles.colorBox, { backgroundColor: value }]} />
                    <Text style={styles.label}>{name}</Text>
                    <Text style={styles.value}>{value}</Text>
                  </View>
                );
              }
              // Nested objects like gray scale
              return Object.entries(value).map(([subKey, subValue]) => (
                <View key={`${name}-${subKey}`} style={styles.colorItem}>
                  <View style={[styles.colorBox, { backgroundColor: subValue as string }]} />
                  <Text style={styles.label}>
                    {name}.{subKey}
                  </Text>
                  <Text style={styles.value}>{subValue}</Text>
                </View>
              ));
            })}
          </View>
        </View>
      )}

      {show === "typography" && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Typography</Text>
          
          <Text style={styles.subsectionTitle}>Text Styles (Variants)</Text>
          {Object.entries(textStyles).map(([name, style]) => (
            <View key={name} style={styles.typeRow}>
              <Text style={[{ color: colors.text }, style]}>
                {name} • The quick brown fox
              </Text>
              <Text style={styles.value}>
                size: {style.fontSize}, weight: {style.fontWeight}
              </Text>
            </View>
          ))}

          <Text style={styles.subsectionTitle}>Font Sizes</Text>
          {Object.entries(fontSizes).map(([name, value]) => (
             <View key={name} style={styles.typeRow}>
                <Text style={{ fontSize: value, color: colors.text }}>Size {name} ({value}px)</Text>
             </View>
          ))}
        </View>
      )}

      {show === "spacing" && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Spacing</Text>
          {Object.entries(spacing).map(([name, value]) => (
            <View key={name} style={styles.spacingRow}>
              <Text style={styles.spacingLabel}>{name}</Text>
              <Text style={[styles.spacingLabel, { width: 40, color: '#666' }]}>{value}</Text>
              <View style={[styles.spacingBox, { width: value }]} />
            </View>
          ))}
        </View>
      )}

      {show === "borders" && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Borders & Radius</Text>
          <View style={styles.borderRow}>
            {Object.entries(borderRadius).map(([name, value]) => (
              <View key={name} style={{ alignItems: "center" }}>
                <View style={[styles.borderBox, { borderRadius: value }]} />
                <Text style={styles.label}>{name}</Text>
                <Text style={styles.value}>{value}px</Text>
              </View>
            ))}
          </View>

          <Text style={[styles.sectionTitle, { marginTop: 30 }]}>Shadows</Text>
          <View style={styles.borderRow}>
            {Object.entries(shadows).map(([name, value]) => (
              <View key={name} style={{ alignItems: "center" }}>
                <View style={[styles.shadowBox, value]} >
                    <Text>Shadow</Text>
                </View>
                <Text style={styles.label}>{name}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const meta: Meta<typeof TokensDocumentation> = {
  title: "Tokens",
  component: TokensDocumentation,
};

export default meta;

type Story = StoryObj<typeof TokensDocumentation>;

export const Palette: Story = {
  args: {
    show: "colors",
  },
};

export const Typography: Story = {
  args: {
    show: "typography",
  },
};

export const Spacing: Story = {
  args: {
    show: "spacing",
  },
};

export const BordersAndShadows: Story = {
  args: {
    show: "borders",
  },
};


