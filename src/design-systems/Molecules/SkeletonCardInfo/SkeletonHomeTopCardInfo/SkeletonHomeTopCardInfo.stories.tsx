import { Meta, StoryObj } from '@storybook/react'

import SkeletonHomeTopCardInfo from '.'

const meta: Meta<typeof SkeletonHomeTopCardInfo> = {
  title: 'Molecules/SkeletonHomeTopCardInfo',
  component: SkeletonHomeTopCardInfo,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SkeletonHomeTopCardInfo>

export const DefaultSkeletonHomeTopCardInfo: Story = {
  args: {
    className: 'w-full md:w-[332px] h-20 bg-neutral-800',
  },
}
