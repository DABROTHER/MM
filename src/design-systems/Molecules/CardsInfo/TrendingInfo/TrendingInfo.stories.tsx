import { Meta, StoryObj } from '@storybook/react'

import TrendingInfo from '.'

const meta: Meta<typeof TrendingInfo> = {
  title: 'Molecules/TrendingInfo',
  component: TrendingInfo,
}

export default meta
type Story = StoryObj<typeof TrendingInfo>

export const DefaultTrendingInfo: Story = {
  args: {
    name: 'Bored Ape Yacht Club',
    className: 'slg:!w-[332.03px] w-full bg-[#fff]',
    data: [{ Floor: '25 ETH', Volume: '2,500 ETH', Sales: '2,500' }],
  },
}
export const DefaultLaunchpadInfo: Story = {
  args: {
    name: 'Bored Ape Yacht Club',
    className: 'slg:!w-[332.03px] w-full bg-[#fff]',
    data: [{ Minting: '25 ETH', Price: '0.05 ETH' }],
  },
}
