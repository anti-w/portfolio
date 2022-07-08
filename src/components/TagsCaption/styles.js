import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
  display: flex;
  justify-content: center;
  gap: 6rem;
  `}
`;

export const Caption = styled.button`
  ${({ theme, isSelected }) => css`
  background: transparent;
  color: ${theme.colors.menu.background};
  border: none;
  display: flex;
  justify-content: center;
  padding: 0.1rem 1rem;
  cursor: pointer;

  ${
    isSelected &&
    css`
  color: ${theme.colors.menu.selected.primary};

  `
  }
  `}
`;
