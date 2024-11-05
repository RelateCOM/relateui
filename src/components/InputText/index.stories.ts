import type { Meta, StoryObj } from "@storybook/react";
import InputText from ".";

const meta: Meta<typeof InputText> = {
  component: InputText,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {
  args: {
    placeholder: "Enter your text",
    value: "text",
  },
};

export const Small: Story = {
  args: {
    placeholder: "Enter your text",
    value: "text",
    size: "sm",
  },
}

export const Medium: Story = {
  args: {
    placeholder: "Enter your text",
    value: "text",
    size: "md",
  },
}

export const Large: Story = {
  args: {
    placeholder: "Enter your text",
    value: "text",
    size: "lg",
  },
}

export const Disabled: Story = {
  args: {
    placeholder: "Enter your text",
    value: "text",
    disabled: true,
  },
}