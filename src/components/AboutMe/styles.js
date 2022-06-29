import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
  display: flex;
  width: 100%;
  padding-right: 10rem;
  margin: 1rem;
  padding: 0.6rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 4px 9px 27px -2px rgba(0,0,0,0.54);
  border-radius: 15px;
  background: ${theme.colors.background};
  `}
`;

export const ContainerFlex = styled.div`
  ${({ theme }) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 4.2rem;
  gap: 8rem;


  `}
`;
export const ResumeContainer = styled.div`
  ${({ theme }) => css`
  display: flex;
  justify-content: center;
  gap: 8rem;
  padding: 2rem;
  flex-direction: column;

  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 2rem;
    max-width: 44rem;
    font-family: ${theme.fonts.family.description};
    text-align: left;
    font-weight: lighter;
  }

  `}
`;
