import { Meta, StoryObj } from '@storybook/react'

import LaunchPadInfo from '.'

const meta: Meta<typeof LaunchPadInfo> = {
  title: 'Molecules/LaunchPadInfo',
  component: LaunchPadInfo,
}

export default meta
type Story = StoryObj<typeof LaunchPadInfo>

export const LiveLaunchPadInfo: Story = {
  args: {
    name: 'Aster Star',
    type: 'Live',
    className: 'slg:!w-[332.03px] w-full bg-[#fff]',
  },
}
export const DateLaunchPadInfo: Story = {
  args: {
    name: 'Aster Star',
    type: '10h 15m 10s',
    className: 'slg:!w-[332.03px] w-full bg-[#fff]',
  },
}
