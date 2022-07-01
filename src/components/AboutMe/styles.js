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

export const All = styled.div`
  ${({ theme }) => css`
  display: flex;
  width: 110rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

 .title {
    font-size: 3rem;
    margin: 4rem;
    padding-top: 2rem;
  }

  `}
`;

export const ContainerFlex = styled.div`
  ${({ theme }) => css`
  display: flex;
  gap: 12rem;


  `}
`;
export const ResumeContainer = styled.div`
  ${({ theme }) => css`
  display: flex;
  width: 36rem;
  justify-content: center;
  margin-left: 4rem;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    margin-block: 1rem;
    margin-bottom: 4rem;
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
