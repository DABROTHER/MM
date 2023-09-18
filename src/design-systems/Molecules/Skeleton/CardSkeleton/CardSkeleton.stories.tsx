import { Meta, StoryObj } from '@storybook/react'

import CardSkeleton from '.'

import SkeletonLaunchPadInfo from 'design-systems/Molecules/SkeletonCardInfo/SkeletonLaunchPadInfo'
import SkeletonTrendingInfo from 'design-systems/Molecules/SkeletonCardInfo/SkeletonTrendingCardInfo'
import SkeletonGalleryCardInfo from 'design-systems/Molecules/SkeletonCardInfo/SkeletonGalleryCardInfo'

const meta: Meta<typeof CardSkeleton> = {
  title: 'Molecules/Skeleton',
  component: CardSkeleton,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof CardSkeleton>

export const DefaultCardSkeleton: Story = {
  args: {
    className: 'w-full md:w-[332px] h-[331px]',
    variant: 'all',
  },
}
export const DefaultLaunchpadCardSkeleton: Story = {
  args: {
    className: 'w-full md:w-[332px] h-[331px]',
    children: <SkeletonLaunchPadInfo className="bg-neutral-800" variant="bottom" />,
    variant: 'top',
    cardClassName: 'h-[254.99px]',
  },
}

export const DefaultTrendingCardSkeleton: Story = {
  args: {
    className: 'w-full md:w-[332px] h-[353px]',
    children: <SkeletonTrendingInfo className="bg-neutral-800" variant="bottom" />,
    variant: 'top',
    cardClassName: 'h-[254.99px]',
  },
}
export const DefaultGalleryCardSkeleton: Story = {
  args: {
    className: 'w-full md:w-[332px] h-[328px]',
    children: <SkeletonGalleryCardInfo className="bg-neutral-800" variant="bottom" />,
    variant: 'top',
    cardClassName: 'h-[256px]',
  },
}
