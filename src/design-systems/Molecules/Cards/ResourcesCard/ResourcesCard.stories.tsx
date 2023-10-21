import { Meta, StoryObj } from '@storybook/react'

import ResourcesCard from '.'
import createImg from 'assets/images/createIcon.svg'
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
    image: createImg,
    height: 30,
    width: 27,
    widthMobile: 35,
    heightMobile: 58,
  },
}
