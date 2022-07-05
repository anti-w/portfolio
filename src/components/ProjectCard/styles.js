import styled, { css } from 'styled-components';
import { Article, Atom, Code } from 'phosphor-react';

export const Container = styled.div`
  ${({ theme }) => css`
  display: flex;
  width: 32rem;
  background: #404040;
  flex-direction: column;
  padding: 2rem;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 13px;

  h1 {
    color: white
  }

  footer {
    display: flex;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    width: 100%;

    a {
      color: ${theme.colors.lightBg};
      cursor: pointer;
    }
    a:hover {
      color: white;
    }
  }


  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`

  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  align-items: center;
  font-weight: bold;
  padding: 1rem;

  p {
    color: white;
    font-size: 1.6rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background: #03A63C;
  }

  `}
`;

export const Navigator = styled.nav`
  ${({ theme }) => css`

  display: flex;
  width: 100%;
  justify-content: space-between;

  `}
`;

export const Header = styled.header`
  ${({ theme }) => css`

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  `}
`;

export const ViewDemo = styled.a`
  ${({ theme }) => css`

  text-decoration: none;
  font-size: 1.2rem;
  border: 1px solid gray;
  padding: 1rem;
  text-align: center;
  border-radius: 5px;



  &:hover {
      border: 1px solid white;

  }

  `}
`;

export const ProjectTitle = styled.h1`
  ${({ theme }) => css`

  position: relative;

  &::after {
      content: '';
      position: absolute;
      top: 2.5rem;
      left: 50%;
      width: 0;
      height: 0.2rem;
      background: white;
      transition: all 300ms ease-in-out;
    }
    &:hover::after {
      left: 25%;
      width: 50%;
    }

  `}
`;

export const AboutIcon = styled(Article)`
  ${({ selected, theme }) => css`

  color: ${theme.colors.lightBg};
  padding: 0.2rem;
  border-radius: 30%;
  cursor: pointer;


  ${
    selected &&
    css`
    color: white;
    background: ${theme.colors.lightBg};
  `
  }

  `}
`;
export const LanguagesIcon = styled(Code)`
  ${({ selected, theme }) => css`

  color: ${theme.colors.lightBg};
  padding: 0.2rem;
  border-radius: 30%;
    cursor: pointer;

  ${
    selected &&
    css`
    color: white;
    background: ${theme.colors.lightBg};
  `
  }

  `}
`;
export const TopicsIcon = styled(Atom)`
  ${({ selected, theme }) => css`

  color: ${theme.colors.lightBg};
  padding: 0.2rem;
  border-radius: 30%;
    cursor: pointer;



  ${
    selected &&
    css`
    color: white;
    background: ${theme.colors.lightBg};
  `
  }

  `}
`;
