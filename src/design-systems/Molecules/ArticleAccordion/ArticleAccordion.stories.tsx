import { Meta, StoryObj } from '@storybook/react'

import ArticleAccordion from '.'

import ArrowIcon from 'assets/images/arrowIcon.png'

const meta: Meta<typeof ArticleAccordion> = {
  title: 'Molecules/ArticleAccordion',
  component: ArticleAccordion,
}

export default meta
type Story = StoryObj<typeof ArticleAccordion>

export const AccordionArticle: Story = {
  args: {
    height: 18,
    width: 10,
    icon: ArrowIcon,
    article: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Leo sit tristique diam id tincidunt mattis.',
  },
}
