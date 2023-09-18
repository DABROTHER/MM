import { Meta, StoryObj } from '@storybook/react'

import Card from '.'

export default {
  title: 'Atoms/Card',
  component: Card,
  argTypes: {
    variant: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      defaultValue: 'medium',
    },
    rounded: {
      control: 'boolean',
      defaultValue: true,
    },
  },
} as Meta

// eslint-disable-next-line jsx-a11y/alt-text
type Story = StoryObj<typeof Image>

export const SmallCard: Story = {
  args: {
    variant: 'small',
    children: 'modern museum Design system',
  },
}
export const MediumCard: Story = {
  args: {
    variant: 'medium',
    children: 'modern museum Design system',
  },
}
export const UnroundedCard: Story = {
  args: {
    variant: 'large',
    rounded: false,
    children: 'modern museum Design system',
  },
}
