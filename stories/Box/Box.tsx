import React from 'react'
import { CSSProp } from 'styled-components'

import { BoxElement } from './styles'

export interface BoxProps {
  $styles?: CSSProp
  children?: React.ReactNode | React.ReactElement
}

export function Box({ children, $styles }: BoxProps) {
  return <BoxElement $styles={$styles} role="banner">{children}</BoxElement>
}

export default Box
