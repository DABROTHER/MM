import { Meta, StoryObj } from '@storybook/react'

import SingleItemAccordion from '.'

const meta: Meta = {
  title: 'Molecules/SingleItemAccordion',
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof SingleItemAccordion>

export const DefaultAccordion: Story = () => <SingleItemAccordion onSubmitHandler={()=>{}} />
DefaultAccordion.args = {}
