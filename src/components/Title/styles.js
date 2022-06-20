import styled, { css } from 'styled-components';

export const Title = styled.h1`
  ${({ theme }) => css`
  font-family: ${theme.fonts.family.header};
  font-size: ${theme.fonts.sizes.huge};
  `}
`;
