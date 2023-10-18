import type { StoryObj } from '@storybook/react'

import { ButtonLink, ButtonLinkProps } from './ButtonLink'

const meta = {
  title: 'Example/ButtonLink',
  component: ButtonLink
}

export default meta

type Story = StoryObj<ButtonLinkProps>

export const Normal: Story = {
  args: {
    label: 'Normal'
  }
}

export const Active: Story = {
  args: {
    label: 'Active',
    $isActive: true
  }
}
