import { Meta, StoryObj } from '@storybook/react'

import Checkbox from '.'
import { items } from './utils'

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const DefaultCheckbox: Story = {
  args: {},
}
