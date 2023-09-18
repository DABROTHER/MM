import { Meta, StoryObj } from '@storybook/react'

import HomeTopCardSkeleton from '.'

const meta: Meta<typeof HomeTopCardSkeleton> = {
  title: 'Molecules/Skeleton/HomeTopCardSkeleton',
  component: HomeTopCardSkeleton,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof HomeTopCardSkeleton>

export const DefaultHomeTopCardSkeleton: Story = {
  args: {
    className: 'w-full h-[272px] md:w-[332px] md:h-[331px]',
  },
}
