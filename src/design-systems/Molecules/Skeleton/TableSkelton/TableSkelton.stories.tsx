import { Meta, StoryObj } from '@storybook/react'

import TableSkelton from '.'

const meta: Meta<typeof TableSkelton> = {
  title: 'Molecules/Skeleton/TableSkelton',
  component: TableSkelton,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof TableSkelton>

export const DefaultTableSkelton: Story = {
  args: {
    className: 'w-full h-[272px] md:w-[332px] md:h-[331px]',
  },
}
