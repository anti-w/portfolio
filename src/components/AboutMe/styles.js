import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
  display: flex;
  width: 120.4rem;
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
  width: 110rem;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 4.2rem;
  gap: 8rem;


  `}
`;
export const ResumeContainer = styled.div`
  ${({ theme }) => css`
  display: flex;
  width: 36rem;
  justify-content: center;
  gap: 8rem;
  padding: 2rem;
  margin-left: 4rem;
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
