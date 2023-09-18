import { Meta, StoryObj } from '@storybook/react'

import Link from '.'

export default {
  title: 'Atoms/Link',
  component: Link,
  argTypes: {
    href: {
      control: 'text',
      defaultValue: '/home',
    },
    className: {
      table: {
        disabled: true,
      },
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
  },
} as Meta

// eslint-disable-next-line jsx-a11y/alt-text
type Story = StoryObj<typeof Link>

export const LinkWithText: Story = {
  args: {
    href: 'modern museum',
    children: 'modern museum',
  },
}
export const DisabledLink: Story = {
  args: {
    disabled: true,
    children: 'modern museum',
  },
}
