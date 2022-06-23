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
  background: ${theme.colors.lightBg}; }

  img {
    width: 6.2rem;
  }

  h1 {
    font-size: 1.6rem;
    color: ${theme.colors.background}
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
  border: 1px solid gray;
  border-radius: 10px;
  padding: 1rem;

  a {
    display: flex;
    width: 16.4rem;
    color: ${theme.colors.background};
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    padding: 16px 8px;
    font-weight: bold;
    margin-bottom: 1rem;
    border: 1px solid gray;
    border-radius: 10px;

    img {
      width: 3.5rem;

    }

    h2 {
      text-align: left;
      width: 8rem;
      margin-left: 2rem;
    }


  }

  a:hover {
    background: ${theme.colors.background};
    color: white;
    transition: ease-in-out 500ms
  }

  `}
`;
export const SocialIconsContainer = styled.div`
  ${({ theme }) => css`

  display: flex;
  justify-content: center ;
  margin-top: 5rem;
  margin-bottom: 5rem;

  `}
`;

export const Icon = styled.img`
  ${({ theme }) => css`

  src: 'ttps://res.cloudinary.com/dscztnlqq/image/upload/v1656006491/portfolio/62898_pd8xlr.png';
  width: 64px;

  `}
`;
