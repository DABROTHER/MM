import { Meta, StoryObj } from '@storybook/react'

import { timeTab, tabs, trendingTab } from './utils'

import Tab from '.'

const meta: Meta<typeof Tab> = {
  title: 'Atoms/Tabs',
  component: Tab,
}

export default meta
type Story = StoryObj<typeof Tab>

export const IconTab: Story = {
  args: {
    className: '',
    tabs: tabs,
    defaultTab: tabs?.[0].value,
  },
}

export const TimeTab: Story = {
  args: {
    className: '',
    tabs: timeTab,
    defaultTab: timeTab[0].value,
  },
}

export const TrendingTab: Story = {
  args: {
    className: '',
    tabs: trendingTab,
    defaultTab: trendingTab[0].value,
  },
}
