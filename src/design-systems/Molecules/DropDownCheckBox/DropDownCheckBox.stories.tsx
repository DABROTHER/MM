import { Meta, StoryObj } from '@storybook/react'

import DropDownCheckBox from '.'

import { FIRST_DROPDOWN } from 'design-systems/Templates/HomePageTemplate/utils'

const meta: Meta<typeof DropDownCheckBox> = {
  title: 'Molecules/DropDownCheckBox',
  component: DropDownCheckBox,
  argTypes: {
    data: FIRST_DROPDOWN,
  },
}

export default meta
type Story = StoryObj<typeof DropDownCheckBox>

export const DefaultDropDown: Story = {
  args: {
    data: FIRST_DROPDOWN,
    defaultValue: FIRST_DROPDOWN[0],
    isCheckBox: true,
  },
}
