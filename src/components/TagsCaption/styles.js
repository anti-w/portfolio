import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 6rem;


  @media ${theme.media.lteMedium} {
  }
  `}
`;

export const Caption = styled.button`
  ${({ theme, isSelected }) => css`
  margin: 0.2rem;
  background: transparent;
  color: ${theme.colors.menu.background};
  font-family: ${theme.fonts.family.header};
  width: 8rem;
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

  @media ${theme.media.lteMedium} {
      width: 4rem;

  }
  `}
`;
