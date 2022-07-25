import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`

  .swiper-custom {
    width: 1080px;
    height: 800px;


    @media ${theme.media.lteMedium} {
      width: 360px;
      height: 600px;
    }
  }

  `}
`;
