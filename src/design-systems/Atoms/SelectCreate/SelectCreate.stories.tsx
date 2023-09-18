import { Meta, StoryObj } from '@storybook/react'

import SelectCreate from '.'

const meta: Meta<typeof SelectCreate> = {
  title: 'Atoms/SelectCreate',
  component: SelectCreate,
}

export default meta
type Story = StoryObj<typeof SelectCreate>

export const CollectionTextArea: Story = {
  args: {},
}
