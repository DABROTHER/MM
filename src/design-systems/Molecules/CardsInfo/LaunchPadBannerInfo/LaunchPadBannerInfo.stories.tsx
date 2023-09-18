import { Meta, StoryObj } from '@storybook/react'

import LaunchPadBannerInfo from '.'

const meta: Meta<typeof LaunchPadBannerInfo> = {
  title: 'Molecules/LaunchPadBannerInfo',
  component: LaunchPadBannerInfo,
}

export default meta
type Story = StoryObj<typeof LaunchPadBannerInfo>

export const DefaultLaunchPadBannerInfo: Story = {
  args: {
    type: '10h 15m 10s',
    className: 'w-full bg-[#417c99] top-0 px-0 relative',
  },
}
