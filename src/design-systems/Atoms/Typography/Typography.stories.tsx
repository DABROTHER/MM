import { Meta, StoryObj } from '@storybook/react'

import Typography from '.'

const meta: Meta<typeof Typography> = {
  title: 'Atoms/Typography',
  component: Typography,
  argTypes: {
    variant: {
      options: ['condensed', 'regular'],
      defaultValue: 'condensed',
    },
    size: {
      options: ['h1', 'h2', 'h3', 'h4', 'subtitle', 'paragraph', 'body', 'caption', 'small', 'sm', 'md', 'lg'],
      defaultValue: 'body',
    },
    className: {
      table: {
        disabled: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<typeof Typography>

export const H1: Story = {
  args: {
    variant: 'condensed',
    size: 'h1',
    children: 'modern museum',
  },
}

export const H2: Story = {
  args: {
    variant: 'condensed',
    size: 'h2',
    children: 'modern museum',
  },
}

export const H3: Story = {
  args: {
    variant: 'condensed',
    size: 'h3',
    children: 'modern museum',
  },
}

export const H4: Story = {
  args: {
    variant: 'condensed',
    size: 'h4',
    children: 'modern museum',
  },
}

export const Subtitle: Story = {
  args: {
    variant: 'condensed',
    size: 'subtitle',
    children: 'modern museum',
  },
}

export const Paragraph: Story = {
  args: {
    variant: 'condensed',
    size: 'paragraph',
    children: 'modern museum',
  },
}

export const Body: Story = {
  args: {
    variant: 'condensed',
    size: 'body',
    children: 'modern museum',
  },
}

export const Caption: Story = {
  args: {
    variant: 'condensed',
    size: 'caption',
    children: 'modern museum',
  },
}

export const Small: Story = {
  args: {
    variant: 'condensed',
    size: 'small',
    children: 'modern museum',
  },
}

export const RegularSmall: Story = {
  args: {
    variant: 'regular',
    size: 'sm',
    children: 'modern museum',
  },
}

export const RegularMedium: Story = {
  args: {
    variant: 'regular',
    size: 'md',
    children: 'modern museum',
  },
}

export const RegularLarge: Story = {
  args: {
    variant: 'regular',
    size: 'lg',
    children: 'modern museum',
  },
}

export const ResponsiveText: Story = {
  args: {
    variant: undefined,
    size: undefined,
    className: 'lg:typography-h1 md:typography-paragraph typography-sm',
    children: 'modern museum',
  },
}
