import { Meta, StoryObj } from '@storybook/react'
import type { ComponentType } from 'react'

import { DashboardHeaderProps } from './interface'

import Header from '.'
const meta: Meta = {
  title: 'Organisms/Header',
  //   component: MMIcon,
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

interface ComponentProps extends DashboardHeaderProps {
  Icon: ComponentType<DashboardHeaderProps>
}

export default meta
type Story = StoryObj<typeof Header>

export const MMHeader: Story = () => <Header className="" />
MMHeader.args = {
  className: '',
}
