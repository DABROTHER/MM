import { Meta, StoryObj } from '@storybook/react'

import ConnectWalletButton from '.'

const meta: Meta<typeof ConnectWalletButton> = {
  title: 'Molecules/ConnectWalletButton',
  component: ConnectWalletButton,
}

export default meta
type Story = StoryObj<typeof ConnectWalletButton>

export const DefaultConnectWalletButton: Story = {}
