import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  argTypes: {
    variant: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "bodyLarge", "body", "bodySmall", "label", "caption"],
    },
    color: {
      control: "select",
      options: ["default", "muted", "inverse", "primary", "secondary", "danger", "success", "warning"],
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "Default Body Text",
    variant: "body",
  },
};

export const Heading1: Story = {
  args: {
    children: "Heading 1",
    variant: "h1",
  },
};

export const Colored: Story = {
  args: {
    children: "Primary Colored Text",
    color: "primary",
    variant: "h3",
  },
};

export const Centered: Story = {
  args: {
    children: "Centered Text",
    center: true,
    variant: "body",
  },
};

