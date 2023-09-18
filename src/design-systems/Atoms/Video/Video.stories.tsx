import { Meta, StoryObj } from '@storybook/react'

import Video from '.'

import { defaultVideo } from 'utils'

const meta: Meta<typeof Video> = {
  title: 'Atoms/Video',
  component: Video,
  argTypes: {
    width: {
      control: 'number',
      defaultValue: 300,
    },
    height: {
      control: 'number',
      defaultValue: 300,
    },
    className: {
      control: 'text',
      defaultValue: '',
    },
    src: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Video>

export const VideoStory: Story = {
  args: {
    src: defaultVideo,
  },
}
