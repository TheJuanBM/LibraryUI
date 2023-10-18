import styled from 'styled-components'

import { BoxProps } from './Box'

const SHADOW = '0 1px 10px rgba(0, 0, 0, 0.3)'

export const BoxElement = styled.div<Pick<BoxProps, '$styles'>>`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  justify-content: space-between;

  box-shadow: ${SHADOW};
  -moz-box-shadow: ${SHADOW};
  -webkit-box-shadow: ${SHADOW};

  ${({ $styles }) => $styles};
`
