import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    font-size: 62.5%;
    scroll-behavior: smooth;
}


body {
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.family.header};
}

a:visited {
  color: inherit;
}

.selected {
  background: ${({ theme }) => theme.colors.menu.selected.background};
  color: ${({ theme }) => theme.colors.menu.selected.primary};
}

.selected::after {
  content: '-';
  display: flex;
  position: absolute;
  left: 19.1rem;
  width: 4.2rem;
  background: ${({ theme }) => theme.colors.menu.selected.background};
  color: ${({ theme }) => theme.colors.menu.selected.background};

  @media ${({ theme }) => theme.media.lteMedium} {
    left: 7rem
  }
}


.swiper {
  height: 42rem;
  width: 42rem;

  @media ${({ theme }) => theme.media.lteMedium} {
    width: 28rem;
    height: 34rem;
  }
}

.swiper-slide {

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 34rem;
    border-radius: 1rem;
  }

  @media ${({ theme }) => theme.media.lteMedium} {
    img {
      width: 24rem;
      margin-bottom: 4rem;
    }
  }
}


.swiper-button-next, .swiper-button-prev {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20rem;
  padding: 0.5rem;
  width: 3.6rem;
  height: 3.6rem;
  background:  ${({ theme }) => theme.colors.menu.background};
  color: ${({ theme }) => theme.colors.menu.primary};
  border-radius: 100%;

}

.swiper-button-next::after, .swiper-button-prev::after {
  font-size: 2rem;
  font-weight: bold;
}

.swiper-pagination-bullet-active {
     background-color: ${({ theme }) => theme.colors.menu.background};
}



`;
