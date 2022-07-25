import { Brain, TerminalWindow } from 'phosphor-react';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`

  display: flex;
  height: 100%;
  width: 100%;
  padding: 1rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${theme.colors.menu.selected.primary};
  `}
`;

export const CardsContainer = styled.div`
  ${({ theme }) => css`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 6rem;

  @media ${theme.media.lteMedium} {
    flex-direction: column;
    gap: 1rem;
  }


  `}
`;

export const CardContainer = styled.div`
  ${({ theme }) => css`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4.2rem;

   @media ${theme.media.lteMedium} {
    gap: 1rem;
  }
  `}
`;

export const FilterContainer = styled.div`
  ${({ theme }) => css`

  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  width: 100%;
  flex-direction: column;

  `}
`;

export const TitleWithIcon = styled.div`
  ${({ theme }) => css`

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4.2rem;
  width: 100%;
  height: 20%;
  font-size: 14px;

  @media ${theme.media.lteMedium} {
    font-size: 10px;
    gap: 2rem;
  }


  `}
`;

export const CustomTerminal = styled(TerminalWindow)`
  ${({ theme }) => css`
  width: 6.4rem;
  height: 6.4rem;

  @media ${theme.media.lteMedium} {
    width: 3.6rem;
  height: 3.6rem;
  }

  `}
`;

export const CustomBrain = styled(Brain)`
  ${({ theme }) => css`
  width: 6.4rem;
  height: 6.4rem;

  @media ${theme.media.lteMedium} {
    width: 3.6rem;
  height: 3.6rem;
  }

  `}
`;
