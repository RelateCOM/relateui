import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '.';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    Image:
      'https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp',
    Alt: 'avatar',
  },
};
