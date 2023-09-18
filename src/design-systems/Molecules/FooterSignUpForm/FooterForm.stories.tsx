import { Meta, StoryObj } from '@storybook/react'
import type { ComponentType } from 'react'

import { FooterFormProps } from './interface'

import FooterForm from '.'

const meta: Meta = {
  title: 'Molecules/FooterSignUp',
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

interface ComponentProps extends FooterFormProps {
  Icon: ComponentType<FooterFormProps>
}

export default meta
type Story = StoryObj<typeof FooterForm>

export const FooterSignUpForm: Story = () => <FooterForm className="" />
FooterSignUpForm.args = {
  className: '',
}
