import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.colors.lightBg};
  border-radius: 30px;
  width: 36rem;
  height: 27.5rem;

  padding: 1rem;

  `}
`;
