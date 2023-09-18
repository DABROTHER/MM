import { Meta, StoryObj } from '@storybook/react'

import Cart from '.'

const meta: Meta<typeof Cart> = {
  title: 'Molecules/Cart',
  component: Cart,
}

export default meta
type Story = StoryObj<typeof Cart>

export const CartModule: Story = {
  args: {
    cartData: false,
  },
}
