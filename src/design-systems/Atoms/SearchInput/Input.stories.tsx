import { Meta, StoryObj } from '@storybook/react'

import SearchInput from '.'

const meta: Meta = {
  title: 'Atoms/SearchInput',
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SearchInput>

export const searchInput: Story = () => <SearchInput className="" />
searchInput.args = {
  className: '',
}
