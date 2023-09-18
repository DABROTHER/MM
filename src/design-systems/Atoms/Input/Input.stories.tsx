import { Meta, StoryObj } from '@storybook/react'

import Input from '.'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const NumberInput: Story = {
  args: {
    type: 'number',
    placeholder: 'Item name',
  },
}
