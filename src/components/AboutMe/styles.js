import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
  display: flex;
  width: 100%;
  margin: 1rem;
  padding: 0.6rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${theme.colors.lightBg};
  border-radius: 10px;
  background: ${theme.colors.background};
  `}
`;
