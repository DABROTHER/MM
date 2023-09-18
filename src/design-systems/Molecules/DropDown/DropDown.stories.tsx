import { Meta, StoryObj } from '@storybook/react'

import DropDown from '.'

import { FIRST_DROPDOWN } from 'design-systems/Templates/HomePageTemplate/utils'

const meta: Meta<typeof DropDown> = {
  title: 'Molecules/DropDown',
  component: DropDown,
  argTypes: {
    data: {},
  },
}

export default meta
type Story = StoryObj<typeof DropDown>

export const DefaultDropDown: Story = {
  args: {
    data: FIRST_DROPDOWN,
    defaultValue: FIRST_DROPDOWN[0],
  },
}
