import { Meta, StoryObj } from '@storybook/react'
import type { ComponentType } from 'react'

import { FooterProps } from './interface'

import Footer from '.'

const meta: Meta = {
  title: 'Organisms/Footer',
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

interface ComponentProps extends FooterProps {
  Icon: ComponentType<FooterProps>
}

export default meta
type Story = StoryObj<typeof Footer>

export const MMFooter: Story = () => <Footer className="" />
MMFooter.args = {
  className: '',
}
