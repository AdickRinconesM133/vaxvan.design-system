import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { View } from "react-native";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    onPress: { action: "pressed" },
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "danger", "success"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    title: "Primary Button",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    title: "Secondary Button",
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    title: "Ghost Button",
    variant: "ghost",
  },
};

export const Danger: Story = {
  args: {
    title: "Danger Button",
    variant: "danger",
  },
};

export const Loading: Story = {
  args: {
    title: "Loading...",
    loading: true,
  },
};

export const WithIcon: Story = {
  args: {
    title: "With Icon",
    // Simple placeholder icon simulation
    leftIcon: <View style={{ width: 16, height: 16, backgroundColor: "white", borderRadius: 8 }} />,
  },
};


