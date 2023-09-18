import { Meta, StoryObj } from '@storybook/react'

import { launchpadNotification } from './utils'

import Card from '.'

import LaunchPadInfo from 'design-systems/Molecules/CardsInfo/LaunchPadInfo'
import TrendingInfo from 'design-systems/Molecules/CardsInfo/TrendingInfo'
import { formatLike } from 'utils'
import { IconNotification } from 'design-systems/Atoms/Icons'
import IconButton from 'design-systems/Atoms/IconButton'

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

export const LiveLaunchPadCardCard: Story = {
  args: {
    className: 'slg:!w-[332.03px] w-full bg-neutral-800',
    src: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/4a7ade1b5e8aaeb9e049a385acf300e8?_a=AQAEufR',
    fileClassName: '!h-[256px]',
    variant: 'top',
    children: <LaunchPadInfo isLiked={true} likeCount={formatLike(1000)} name="Bored Ape Yacht Club" type="Live" />,
    notification: (
      <IconButton
        // eslint-disable-next-line react/no-children-prop
        children={<IconNotification className="flex" />}
        className={`${launchpadNotification}  bg-neutral-800  `}
      />
    ),
  },
}
export const DateLaunchPadCardCard: Story = {
  args: {
    children: (
      <LaunchPadInfo isLiked={false} likeCount={formatLike(999)} name="Bored Ape Yacht Club" type="10h 15m 10s" />
    ),
    className: 'slg:!w-[332.03px] w-full bg-neutral-800',
    fileClassName: '!h-[256px]',
    src: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/4a7ade1b5e8aaeb9e049a385acf300e8?_a=AQAEufR',
    variant: 'top',
    notification: (
      <IconButton
        // eslint-disable-next-line react/no-children-prop
        children={<IconNotification className="flex" fill="white" />}
        className={`${launchpadNotification} !bg-[#9fb1ba] `}
      />
    ),
  },
}
export const TrendingCard: Story = {
  args: {
    children: (
      <TrendingInfo data={[{ Floor: '25 ETH', Volume: '2,500 ETH', Sales: '2,500' }]} name=" Bored Ape Yacht Club" />
    ),
    className: 'slg:!w-[332.03px] w-full bg-neutral-800',
    fileClassName: '!h-[256px]',
    src: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/4a7ade1b5e8aaeb9e049a385acf300e8?_a=AQAEufR',
    variant: 'top',
  },
}
export const LaunchpadCard: Story = {
  args: {
    children: <TrendingInfo data={[{ Minting: '25 ETH', Price: '0.05 ETH' }]} name=" Bored Ape Yacht Club" />,
    className: 'slg:!w-[332.03px] w-full bg-neutral-800',
    fileClassName: '!h-[256px]',
    src: 'https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/4a7ade1b5e8aaeb9e049a385acf300e8?_a=AQAEufR',
    variant: 'top',
  },
}
