import { Meta, StoryObj } from '@storybook/react'
import type { ComponentType } from 'react'

import { HeaderSearchDropdownProps } from './interface'

import HeaderSearchDropdown from '.'

const meta: Meta = {
  title: 'Atoms/HeaderSearchDropdown',
  //   component: MMIcon,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

interface ComponentProps extends HeaderSearchDropdownProps {
  Icon: ComponentType<HeaderSearchDropdownProps>
}

export default meta
type Story = StoryObj<typeof HeaderSearchDropdown>

// export const MMIco: Story = {
//   args: {
//     className: '',
//   },
// }

// Story for SearchIcon
export const SearchDropdown: Story = () => (
  <HeaderSearchDropdown className="" setIsLoading={(isLoading: boolean): void => {}} />
)
SearchDropdown.args = {
  className: '',
}
