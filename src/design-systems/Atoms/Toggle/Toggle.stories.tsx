import { Meta, StoryObj } from '@storybook/react'

import Toggle from '.'

const meta: Meta<typeof Toggle> = {
  title: 'Atoms/Toggle',
  component: Toggle,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Toggle>

export const DefaultToggle: Story = {
  args: {
    className: '',
  },
}
