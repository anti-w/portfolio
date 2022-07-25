import { Hash } from 'phosphor-react';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
    font-size: 1.2rem;
    padding: 0.5rem;
    height: 4rem;


    @media ${theme.media.lteMedium} {
      font-size: 1rem;
      gap: 0
    }
  `}
`;

export const CustomHash = styled(Hash)`
  ${({ theme }) => css`

    width: 2.8rem;
    height: 2.8rem;

    @media ${theme.media.lteMedium} {
      width: 1.8rem;
    height: 1.8rem;
    }
  `}
`;
