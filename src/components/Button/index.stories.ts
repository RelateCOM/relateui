import type { Meta, StoryObj } from "@storybook/react";
import Button from ".";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
}

export const Small: Story = {
  args: {
    children: "Button",
    size: "sm",
    color: "secondary",
  },
};

export const Medium: Story = {
  args: {
    children: "Button",
    size: "md",
  },
};

export const Large: Story = {
  args: {
    children: "Button",
    size: "lg",
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    disabled: true,
    size: "md",
  },
};
