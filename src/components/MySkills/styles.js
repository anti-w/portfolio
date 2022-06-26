import styled, { css } from 'styled-components';

export const CardsContainer = styled.div`
  ${({ theme }) => css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  padding: 3rem;


  `}
`;

export const CardContainer = styled.div`
  ${({ theme }) => css`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4.2rem;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 2.8rem;
  `}
`;

export const FilterContainer = styled.div`
  ${({ theme }) => css`

  display: flex;
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
  `}
`;
