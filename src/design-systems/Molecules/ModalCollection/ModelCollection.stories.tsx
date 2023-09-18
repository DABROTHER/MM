import { Meta, StoryObj } from '@storybook/react'

import ModalCollection from '.'

const meta: Meta<typeof ModalCollection> = {
  title: 'Molecules/ModalCollection',
  component: ModalCollection,
}

export default meta
type Story = StoryObj<typeof ModalCollection>

export const Modal: Story = {
  args: {
    open: true,
  },
}
