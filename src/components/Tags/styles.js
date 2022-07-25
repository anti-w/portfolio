import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #404040;
  border-radius: 20px;
  height: 30rem;
  padding: 1rem;
  aspect-ratio: 1.25/1;
  color: white;

  @media ${theme.media.lteMedium} {
    height: 22rem;
  }

  `}
`;
