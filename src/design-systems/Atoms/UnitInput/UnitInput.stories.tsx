import { Meta, StoryObj } from '@storybook/react'

import UnitInput from '.'

const meta: Meta<typeof UnitInput> = {
  title: 'Atoms/UnitInput',
  component: UnitInput,
}

export default meta
type Story = StoryObj<typeof UnitInput>

export const NumberInput: Story = {
  args: {
    type: 'number',
    placeholder: 'Item name',
    className: 'w-[450px]',
  },
}
