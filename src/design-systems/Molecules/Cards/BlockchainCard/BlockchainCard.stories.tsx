import { Meta, StoryObj } from '@storybook/react'

import BlockchainCard from '.'

import EtherumIcon from 'assets/images/etherium-icon.svg'
import EtherumIconWhite from 'assets/images/etheriumIconWhite.svg'

const meta: Meta<typeof BlockchainCard> = {
  title: 'Molecules/BlockchainCard',
  component: BlockchainCard,
}

export default meta
type Story = StoryObj<typeof BlockchainCard>

export const DefaultBlockchainCard: Story = {
  args: {
    name: 'Ethereum',
    image: EtherumIconWhite,
    imageWhite: EtherumIcon,
  },
}
