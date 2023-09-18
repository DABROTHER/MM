import { Meta, StoryObj } from '@storybook/react'

import Image from './index'

import { defaultImage, hideControl } from 'utils'

export default {
  title: 'Atoms/Image',
  component: Image,
  argTypes: {
    alt: {
      control: 'text',
      defaultValue: 'image',
    },
    disabled: {
      control: 'boolean',
      defaultValue: false,
    },
    className: hideControl,
    styles: hideControl,
    onClick: hideControl,
    src: {
      control: 'text',
      defaultValue: '',
    },
  },
} as Meta

// eslint-disable-next-line jsx-a11y/alt-text
type Story = StoryObj<typeof Image>

export const Img: Story = {
  args: {
    src: defaultImage,
  },
}
