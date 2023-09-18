import { Meta, StoryObj } from '@storybook/react'

import Button from '.'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    loading: {
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    fullWidth: {
      control: 'boolean',
      defaultValue: false,
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    variant: {
      control: 'select',
      options: ['solid', 'outlined'],
      defaultValue: 'solid',
    },
    color: {
      control: 'select',
      options: ['neon', 'primary'],
      defaultValue: 'neon',
    },
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const NeonSolidButton: Story = {
  args: {
    color: 'neon',
    variant: 'solid',
    children: 'Click me',
  },
}
export const SmallButton: Story = {
  args: {
    color: 'neon',
    variant: 'solid',
    size: 'small',
    children: 'Click me',
  },
}
export const MediumButton: Story = {
  args: {
    color: 'neon',
    variant: 'solid',
    size: 'medium',
    children: 'Click me',
  },
}
export const LargeButton: Story = {
  args: {
    color: 'neon',
    variant: 'solid',
    size: 'large',
    children: 'Click me',
  },
}
export const FullWidthButton: Story = {
  args: {
    color: 'primary',
    variant: 'solid',
    size: 'large',
    fullWidth: true,
    children: 'Click me',
  },
}
export const DisabledButton: Story = {
  args: {
    color: 'neon',
    variant: 'solid',
    disabled: true,
    children: 'Click me',
  },
}
