import React from 'react'

import { ButtonElement, ThemeButton } from './styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ThemeButton {
  label: string
}

export function Button({ label, theme, ...props }: ButtonProps) {
  return (
    <ButtonElement theme={theme} {...props}>
      {label}
    </ButtonElement>
  )
}

Button.defaultProps = {
  theme: 'light'
}

export default Button
