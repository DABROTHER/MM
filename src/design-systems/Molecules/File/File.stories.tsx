import { Meta, StoryObj } from '@storybook/react'

import File from '.'

import { defaultImage, defaultVideo } from 'utils'

const meta: Meta<typeof File> = {
  title: 'Molecules/File',
  component: File,
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
    isLoading: {
      control: 'boolean',
      defaultValue: false,
    },
    src: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof File>

export const FileImageStory: Story = {
  args: {
    src: defaultImage,
    type: 'image/jpg',
  },
}
export const FileVideoStory: Story = {
  args: {
    src: defaultVideo,
    type: 'video/mp4',
  },
}
