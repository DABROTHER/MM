import { Meta, StoryObj } from '@storybook/react'

import SpotlightSkeleton from '.'

const meta: Meta<typeof SpotlightSkeleton> = {
  title: 'Molecules/Skeleton',
  component: SpotlightSkeleton,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SpotlightSkeleton>

export const DefaultSpotlightSkeleton: Story = {
  args: {
    className: 'w-full md:w-[332px] md:h-[353px]',
  },
}
