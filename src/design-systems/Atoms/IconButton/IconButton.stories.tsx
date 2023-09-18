import { Meta, StoryObj } from '@storybook/react'

import { IconArrowRight, IconLeftArrowBlack, IconNotification, IconRightArrowBlack } from '../Icons'

import IconButton from '.'
const meta: Meta<typeof IconButton> = {
  title: 'Atoms/IconButton',
  component: IconButton,
}

export default meta
type Story = StoryObj<typeof IconButton>

export const WhiteNotificationIconButton: Story = {
  args: {
    className: 'bg-neutral-800 rounded-sm',
    children: <IconNotification className="flex" />,
  },
}
export const GrayNotificationIconButton: Story = {
  args: {
    className: 'bg-[#9fb1ba] rounded-sm',
    children: <IconNotification className="flex" fill="white" />,
  },
}
export const ArrowRightIconButton: Story = {
  args: {
    className: 'bg-neutral-800 rounded-xs',
    children: <IconRightArrowBlack className="flex" />,
  },
}
export const ArrowLeftIconButton: Story = {
  args: {
    className: 'bg-neutral-800 rounded-xs',
    children: <IconLeftArrowBlack className="flex" />,
  },
}
