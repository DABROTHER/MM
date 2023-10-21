import { Meta, StoryObj } from '@storybook/react'

import MintBannerInfo from '.'

import { ExploreChildrenData } from 'design-systems/Templates/Collection/utils'

const meta: Meta<typeof MintBannerInfo> = {
  title: 'Molecules/MintBannerInfo',
  component: MintBannerInfo,
}

export default meta
type Story = StoryObj<typeof MintBannerInfo>

export const DefaultBannerInfo: Story = {
  args: {
    className: 'mt-0 bottom-[90%]',
    ExploreChildrenData: ExploreChildrenData,
    type: 'Live',
  },
}
