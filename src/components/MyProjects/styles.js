import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`

  display: flex;
  justify-content: center;
  align-items: center;
  width: 110rem;
  height: 100%;
  padding: 3rem;

  `}
`;
