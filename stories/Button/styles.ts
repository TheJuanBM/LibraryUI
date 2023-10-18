import styled, { css } from 'styled-components'

export interface ThemeButton {
  theme?: 'light' | 'dark'
}

export const ButtonElement = styled.button<ThemeButton>`
  flex: 1;
  color: #000;
  width: 100%;
  border: none;
  font-size: 16px;
  cursor: pointer;
  font-weight: 400;
  padding: 20px 10px;
  border-radius: 10px;
  background-color: #efefef;

  ${({ theme }) =>
    theme === 'dark' &&
    css`
      color: #fff;
      background-color: #000;
    `}
`
