import { Meta, StoryObj } from '@storybook/react'

import SpotLightCard from '.'

import { SPOTLIGHT_NFT } from 'design-systems/Templates/HomePageTemplate/utils'

const meta: Meta<typeof SpotLightCard> = {
  title: 'Molecules/SpotLightCard',
  component: SpotLightCard,
}

export default meta
type Story = StoryObj<typeof SpotLightCard>

export const DefaultSpotLightCard: Story = {
  args: {
    className: 'smd:!w-[332.03px] w-full',
    nfts: SPOTLIGHT_NFT,
    name: 'Aster Star',
    likeNumber: 1,
    sales: '1',
    volume: '1',
    floor: '1',
    userCreator: {
      address: '0xxx...00x',
      name: 'Lac',
    },
  },
}
