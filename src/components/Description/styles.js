import styled, { css } from 'styled-components';

export const Description = styled.p`
  ${({ theme }) => css`

  font-family: ${theme.fonts.family.description} ;
  font-size: ${theme.fonts.sizes.small};

  `}
`;
