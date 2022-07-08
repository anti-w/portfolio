import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
  display: flex;
  width: 120.4rem;
  margin: 1rem;
  padding: 0.6rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 4px 9px 27px -2px rgba(0,0,0,0.54);
  border-radius: 15px;
  background: ${theme.colors.menu.primary};
  `}
`;

export const ContainerFlex = styled.div`
  ${({ theme }) => css`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
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
  text-align: center;
  color: ${theme.colors.menu.background};

  h1 {
    font-size: 3rem;
    color: white;
    text-align: right;
    color: ${theme.colors.menu.selected.primary};



  }

  h2 {
    font-size: 2.2rem;
    margin-block: 1rem;
    margin-bottom: 4rem;
    text-align: right;
    color: ${theme.colors.menu.selected.primary};

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
