import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`

  display: flex;
  width: 20rem;
  height:100%;
  padding: 0.8rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 4px 9px 27px -2px rgba(0,0,0,0.54);
  border-radius: 10px;
  background: ${theme.colors.menu.background};
  color: ${theme.colors.menu.primary};

  img {
    width: 6.2rem;
  }

  h1 {
    font-size: 1.6rem;
  }

  header {
    display: flex;
    width: 100%;
    margin-top: 1.2rem;
    margin-right: 1rem;
    padding: 1.2rem;
    justify-content: space-between;
    align-items: center;
  }

  `}
`;
export const PagesContainer = styled.div`
  ${({ theme }) => css`

  display: flex;
  flex-direction: column;
  padding: 1rem;

  `}
`;
export const SocialIconsContainer = styled.div`
  ${({ theme }) => css`

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  margin-bottom: 5rem;
  gap: 2rem;
  color: ${theme.colors.menu.bacground};



  a {
    border-radius: 10px;
    padding: 0.3rem;
    cursor: pointer;
  }



  a:hover {
    background: ${theme.colors.menu.primary};

    svg {
      color: ${theme.colors.menu.background};
    }
  }

  `}
`;
