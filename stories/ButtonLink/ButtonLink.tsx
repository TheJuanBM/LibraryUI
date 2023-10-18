import React from 'react'

import { ButtonLinkElement, ButtonLinkElementProps } from './styles'

export interface ButtonLinkProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonLinkElementProps {
  label: string
}

export function ButtonLink({ label, $isActive, ...props }: ButtonLinkProps) {
  return (
    <ButtonLinkElement $isActive={$isActive} {...props}>
      {label}
    </ButtonLinkElement>
  )
}

export default ButtonLink
