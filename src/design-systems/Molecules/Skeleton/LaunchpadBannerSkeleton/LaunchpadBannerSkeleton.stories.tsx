import { Meta, StoryObj } from '@storybook/react'

import LaunchpadBannerSkeleton from '.'

const meta: Meta<typeof LaunchpadBannerSkeleton> = {
  title: 'Molecules/Skeleton',
  component: LaunchpadBannerSkeleton,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof LaunchpadBannerSkeleton>

export const DefaultLaunchpadBannerSkeleton: Story = {
  args: {
    className: 'relative h-[320px] w-full md:h-[400px] lmd:h-[560px]',
  },
}
