import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
  display: grid;
  width: 100%;
  height: 100%;
  padding: 3.2rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 4rem;
  `}
`;

export const CardContainer = styled.div`
  ${({ theme }) => css`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2.8rem;
  `}
`;

export const TagsContainer = styled.div`
  ${({ theme }) => css`

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.colors.lightBg};
  border-radius: 30px;
  width: 37.5rem;
  height: 27.5rem;
    box-shadow: 4px 9px 27px -2px rgba(0,0,0,0.54);

  padding-bottom: 2rem;
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
  `}
`;
