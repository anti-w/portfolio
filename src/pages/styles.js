import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    padding: 1rem;
    margin-right: 10rem;
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    background:  ${theme.colors.lightBg};
    overflow: hidden;
  `}
`;
