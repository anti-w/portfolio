import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background: #404040;
  border-radius: 20px;
  width: 36rem;
  height: 27.5rem;
  color: #efefef;

  padding: 1.4rem;

  `}
`;
