import { Meta, StoryObj } from '@storybook/react'

import SpinnerPageLoading from '.'

const meta: Meta<typeof SpinnerPageLoading> = {
  title: 'Molecules/SpinnerPageLoading',
  component: SpinnerPageLoading,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SpinnerPageLoading>

export const DefaultSpinner: Story = {
  args: {
    className: 'w-[200px] h-[200px] stroke-neutral-100 dark:stroke-neutral-800',
  },
}
