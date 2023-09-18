import { Meta, StoryObj } from '@storybook/react'

import TextAreaInput from '.'

const meta: Meta<typeof TextAreaInput> = {
  title: 'Atoms/TextAreaInput',
  component: TextAreaInput,
}

export default meta
type Story = StoryObj<typeof TextAreaInput>

export const DefaultTextArea: Story = {
  args: {
    className: '',
  },
}
