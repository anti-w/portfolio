import { Moon, Sun } from 'phosphor-react';
import styled, { css } from 'styled-components';

export const ToggleTheme = styled.button`
  ${({ theme }) => css`

  cursor: pointer;
  background: transparent;
  aspect-ratio: 1/1;
  border: none;
  `}
`;

export const CustomSun = styled(Sun)`

  ${({ theme }) => css`
  color: ${theme.colors.menu.primary};
  `}
`;

export const CustomMoon = styled(Moon)`

  ${({ theme }) => css`
  color: ${theme.colors.menu.primary}
  `}
`;
