import { Meta, StoryObj } from '@storybook/react'

import CategoryList from '.'

import { CATEGORY_LAUNCHPAD } from 'design-systems/Templates/Launchpad/utils'

const meta: Meta<typeof CategoryList> = {
  title: 'Organisms/CategoryList',
  component: CategoryList,
}

export default meta
type Story = StoryObj<typeof CategoryList>

export const DefaultCategoryList: Story = {
  args: {
    className: '',
    categories: CATEGORY_LAUNCHPAD,
  },
}
