import type { Meta, StoryObj } from '@storybook/react';
import Button from '.';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    children: 'Button',
    Size: 'sm',
    Color: 'secondary',
    ClassName: '',
  },
};

export const Medium: Story = {
  args: {
    children: 'Button',
    Size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Button',
    Size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true,
    Size: 'md',
  },
};

export const WithIcon: Story = {
  args: {
    children: (
      <div className="flex items-center gap-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="Size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        <span>Button</span>
      </div>
    ),
  },
};
