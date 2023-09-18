import { Meta, StoryObj } from '@storybook/react'

import ExploreCategorySkeleton from '.'

const meta: Meta<typeof ExploreCategorySkeleton> = {
  title: 'Molecules/Skeleton/ExploreCategorySkeleton',
  component: ExploreCategorySkeleton,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ExploreCategorySkeleton>

export const DefaultExploreDropdownSkeleton: Story = {
  args: {
    className: 'w-full md:w-[121px] h-[48px]',
    variant: 'all',
  },
}
export const DefaultExploreCategorySkeleton: Story = {
  args: {
    className: 'w-full md:w-[737px] h-[48px]',
    variant: 'all',
  },
}
