import { Meta, StoryObj } from '@storybook/react'

import CardPreview from '.'

const meta: Meta<typeof CardPreview> = {
  title: 'Atoms/CardPreview',
  component: CardPreview,
}

export default meta
type Story = StoryObj<typeof CardPreview>

export const PreviewCard: Story = {
  args: {},
}
