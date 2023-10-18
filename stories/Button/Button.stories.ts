import type { StoryObj } from '@storybook/react'

import { Button, ButtonProps } from './Button'

const meta = {
  title: 'Example/Button',
  component: Button
}

export default meta

type Story = StoryObj<ButtonProps>

export const Light: Story = {
  args: {
    label: 'Light'
  }
}

export const Dark: Story = {
  args: {
    label: 'Dark',
    theme: 'dark'
  }
}
