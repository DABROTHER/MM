import { Meta, StoryObj } from '@storybook/react'

import ModalSingleItem from '.'

const meta: Meta<typeof ModalSingleItem> = {
  title: 'Molecules/ModalSingleItem',
  component: ModalSingleItem,
}

export default meta
type Story = StoryObj<typeof ModalSingleItem>

export const Modal: Story = {
  args: {
    open: true,
    label: 'Properties',
  },
}
