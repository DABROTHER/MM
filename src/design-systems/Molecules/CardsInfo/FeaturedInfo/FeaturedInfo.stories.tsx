import { Meta, StoryObj } from '@storybook/react'

import FeaturedInfo from '.'

const meta: Meta<typeof FeaturedInfo> = {
  title: 'Molecules/FeaturedInfo',
  component: FeaturedInfo,
}

export default meta
type Story = StoryObj<typeof FeaturedInfo>

export const DefaultFeaturedInfo: Story = {
  args: {
    name: 'Bored Ape Yacht Club',
    className: 'slg:!w-[332.03px] w-full bg-[#fff]',
    data: [{ HighestBid: '4.56 ETH' }],
  },
}
