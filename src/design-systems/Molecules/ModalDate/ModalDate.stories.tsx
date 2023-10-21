import { Meta, StoryObj } from '@storybook/react'

import ModalDate from '.'

const meta: Meta<typeof ModalDate> = {
  title: 'Molecules/ModalDate',
  component: ModalDate,
}

export default meta
type Story = StoryObj<typeof ModalDate>

export const DateModal: Story = {
  args: {
    open: true,

    setCurrentDate: () => new Date(),
    setIsModalOpen: () => new Date(),
  },
}
