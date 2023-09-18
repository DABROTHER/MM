import { Meta, StoryObj } from '@storybook/react'

import AccordionProfileDetails from '.'

const meta: Meta = {
  title: 'Molecules/AccordionProfileDetails',
  argTypes: {
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof AccordionProfileDetails>

export const ProfileDetailsAccordion: Story = () => <AccordionProfileDetails />
ProfileDetailsAccordion.args = {
  label: 'Question 1',
}
