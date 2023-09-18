import { Meta, StoryObj } from '@storybook/react'

import Skeleton from '.'

const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const DefaultSkeleton: Story = {
  args: {},
  render: () => (
    <div className="h-[353px] w-full md:w-[332.03px]">
      <Skeleton />
    </div>
  ),
}
