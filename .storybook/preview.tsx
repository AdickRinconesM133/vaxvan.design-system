import React from "react";
import type { Preview } from "@storybook/react";
import { View } from "react-native";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <View style={{ flex: 1, padding: 16, alignItems: "center", justifyContent: "center" }}>
        <Story />
      </View>
    ),
  ],
};

export default preview;


