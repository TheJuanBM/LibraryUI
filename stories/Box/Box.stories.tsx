import type { StoryObj } from '@storybook/react'

import { Box, BoxProps } from './Box'

const meta = {
  title: 'Example/Box',
  component: Box
}

export default meta

type Story = StoryObj<BoxProps>

export const Normal: Story = {
  args: {
    children: 'Box'
  }
}
