import styled, { css } from 'styled-components';

export const ContainerFlex = styled.div`
  ${({ theme }) => css`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 12rem;


  @media ${theme.media.lteMedium} {
    flex-direction: column;
    gap: 0rem;
  }

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

  @media ${theme.media.lteMedium} {
    margin-left: 0;
    width: 100%;
    padding: 2rem;
    text-align: center;

    h1 {
      font-size: 2.6rem;
    }

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.8rem;
    }
  }

  `}
`;
