import type { Meta, StoryObj } from '@storybook/react';
import InputText from '.';

const meta: Meta<typeof InputText> = {
  component: InputText,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof InputText>;

export const Default: Story = {
  args: {
    Placeholder: 'Enter your text',
    Value: 'text',
  },
};

export const Small: Story = {
  args: {
    Placeholder: 'Enter your text',
    Value: 'text',
    Size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    Placeholder: 'Enter your text',
    Value: 'text',
    Size: 'md',
  },
};

export const Large: Story = {
  args: {
    Placeholder: 'Enter your text',
    Value: 'text',
    Size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    Placeholder: 'Enter your text',
    Value: 'text',
    disabled: true,
  },
};
