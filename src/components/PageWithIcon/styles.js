import styled, { css } from 'styled-components';

export const TitleAndIcon = styled.button`
  ${({ theme, selected }) => css`



    display: flex;
    width: 16.4rem;
    color: ${theme.colors.background};
    background: transparent;
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

  :hover {
    background: ${theme.colors.background};
    color: white;
    transition: ease-in-out 500ms
  }

  `}
`;

export const Psedo = styled.div`
  ${({ theme }) => css`

  border-radius: 15% 85% 53% 47% / 27% 33% 67% 73%
  `}
`;
