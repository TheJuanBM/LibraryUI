import styled, { css } from 'styled-components'

export interface ButtonLinkElementProps {
  $isActive?: boolean
}

export const ButtonLinkElement = styled.button<ButtonLinkElementProps>`
  padding: 0;
  color: #000;
  border: none;
  cursor: pointer;
  background-color: transparent;

  ${({ $isActive }) =>
    $isActive &&
    css`
      border-bottom: solid #000 1px;
    `}
`
