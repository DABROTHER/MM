import { Meta, StoryObj } from '@storybook/react'

import ResourcesCard from '.'

import Buying from 'assets/images/Buying.png'

const meta: Meta<typeof ResourcesCard> = {
  title: 'Molecules/ResourcesCard',
  component: ResourcesCard,
}

export default meta
type Story = StoryObj<typeof ResourcesCard>

export const DefaultResourcesCard: Story = {
  args: {
    id: 1,
    name: 'Buying',
    image: Buying,
    height: 30,
    width: 27,
    widthMobile: 35,
    heightMobile: 58,
  },
}
