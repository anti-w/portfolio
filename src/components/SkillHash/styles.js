import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    font-size: 1.2rem;
    padding: 0.5rem;
    height: 5rem;
  `}
`;
