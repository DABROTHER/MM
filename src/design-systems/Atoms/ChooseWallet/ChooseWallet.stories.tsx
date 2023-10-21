import { Meta, StoryObj } from '@storybook/react'

import ChooseWalletBlock from '.'

const meta: Meta<typeof ChooseWalletBlock> = {
  title: 'Atoms/ChooseWalletBlock',
  component: ChooseWalletBlock,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ChooseWalletBlock>

export const ChooseWallet: Story = () => <ChooseWalletBlock className="" isSigned={false} chainId={1} />
ChooseWallet.args = {
  className: '',
}
