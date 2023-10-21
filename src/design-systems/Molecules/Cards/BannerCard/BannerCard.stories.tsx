import { Meta, StoryObj } from '@storybook/react'

import { launchpadNotification } from '../Card/utils'

import BannerCard from '.'

import LaunchPadInfo from 'design-systems/Molecules/CardsInfo/LaunchPadInfo'
import TrendingInfo from 'design-systems/Molecules/CardsInfo/TrendingInfo'
import { formatLike } from 'utils'
import { IconNotification } from 'design-systems/Atoms/Icons'
import IconButton from 'design-systems/Atoms/IconButton'
import MintBannerInfo from 'design-systems/Molecules/CardsInfo/MintBannerInfo'
import { ExploreChildrenData } from 'design-systems/Templates/Collection/utils'
import { LinkCommStyle } from 'design-systems/Organisms/Footer/utils'

const meta: Meta<typeof BannerCard> = {
  title: 'Molecules/BannerCard',
  component: BannerCard,
}

export default meta
type Story = StoryObj<typeof BannerCard>

export const DefaultBannerCard: Story = {
  args: {
    src: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/4a7ade1b5e8aaeb9e049a385acf300e8?_a=AQAEufR',
    fileClassName: '!h-[304px]',
    variant: 'all',
    children: (
      <MintBannerInfo
        ExploreChildrenData={ExploreChildrenData}
        iconClassName={`${LinkCommStyle} bg-neutral-700 border-0`}
        stroke="#9a9a9a"
        type="10h 15m 10s"
      />
    ),
  },
}
