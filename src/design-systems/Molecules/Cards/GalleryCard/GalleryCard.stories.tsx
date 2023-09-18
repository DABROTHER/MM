import { Meta, StoryObj } from '@storybook/react'

import GalleryCard from '.'

import handImage from 'assets/images/hand.png'

const meta: Meta<typeof GalleryCard> = {
  title: 'Molecules/GalleryCard',
  component: GalleryCard,
}

export default meta
type Story = StoryObj<typeof GalleryCard>

export const DefaultGalleryCard: Story = {
  args: {
    src: handImage,
    className: '!w-[350px]',
  },
}
