import { Meta, StoryObj } from '@storybook/react'

import ProfileDropdown from '.'

const meta: Meta = {
  title: 'Molecules/ProfileDropdown',
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof ProfileDropdown>

export const HeaderDropdown: Story = () => <ProfileDropdown />
HeaderDropdown.args = {
  className: '',
}
