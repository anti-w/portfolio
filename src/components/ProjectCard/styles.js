import styled, { css } from 'styled-components';
import { Brain, Code, DiamondsFour } from 'phosphor-react';

export const Container = styled.div`
  ${({ theme }) => css`
  display: flex;
  width: 32rem;
  background: #404040;
  flex-direction: column;
  padding: 2rem 3rem;
  gap: 2rem;
  padding-bottom: 0.5rem;
  justify-content: center;
  align-items: center;
  border-radius: 13px;


  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`

  display: flex;
  justify-content: center;
  background: ${theme.colors.lightBg};
  text-align: center;
  align-items: center;
  padding: 1.4rem;
  border-radius: 13px;
  color: white;

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
  gap: 2rem;

  `}
`;

export const AboutIcon = styled(DiamondsFour)`
  ${({ isSelected, theme }) => css`

  color: ${theme.colors.lightBg};
  padding: 0.2rem;
  border-radius: 30%;
  cursor: pointer;


  ${
    isSelected &&
    css`
    color: white;
    background: ${theme.colors.lightBg};
  `
  }

  `}
`;
export const LanguagesIcon = styled(Code)`
  ${({ isSelected, theme }) => css`

  color: ${theme.colors.lightBg};
  padding: 0.2rem;
  border-radius: 30%;
    cursor: pointer;

  ${
    isSelected &&
    css`
    color: white;
    background: ${theme.colors.lightBg};
  `
  }

  `}
`;
export const TopicsIcon = styled(Brain)`
  ${({ isSelected, theme }) => css`

  color: ${theme.colors.lightBg};
  padding: 0.2rem;
  border-radius: 30%;
    cursor: pointer;



  ${
    isSelected &&
    css`
    color: white;
    background: ${theme.colors.lightBg};
  `
  }

  `}
`;
