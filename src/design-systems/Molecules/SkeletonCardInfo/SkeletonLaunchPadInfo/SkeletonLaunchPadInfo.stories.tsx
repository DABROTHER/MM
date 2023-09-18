import { Meta, StoryObj } from '@storybook/react'

import SkeletonLaunchPadInfo from '.'

const meta: Meta<typeof SkeletonLaunchPadInfo> = {
  title: 'Molecules/CardInfo/Skeleton/SkeletonLaunchPadInfo',
  component: SkeletonLaunchPadInfo,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SkeletonLaunchPadInfo>

export const DefaultSkeletonLaunchPadInfo: Story = {
  args: {
    className: 'w-full md:w-[332px] h-20 bg-neutral-800 rounded-b-sm',
  },
}
