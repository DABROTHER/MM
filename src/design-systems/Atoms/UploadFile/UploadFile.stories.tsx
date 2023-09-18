import { Meta, StoryObj } from '@storybook/react'

import UploadFile from '.'

const meta: Meta<typeof UploadFile> = {
  title: 'Atoms/UploadFile',
  component: UploadFile,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof UploadFile>

export const DefaultFileUpload: Story = {
  args: {
    className: '',
  },
}
