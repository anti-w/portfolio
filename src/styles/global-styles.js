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
}

.actualImage {
  background:  ${({ theme }) => theme.colors.lightBg};
}

.swiper-button-next, .swiper-button-prev {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20rem;
  padding: 0.5rem;
  width: 3.6rem;
  height: 3.6rem;
  background:  ${({ theme }) => theme.colors.lightBg};
  color: ${({ theme }) => theme.colors.background};
  border-radius: 100%;

}

.swiper-button-next::after, .swiper-button-prev::after {
  font-size: 2.2rem;
  font-weight: bold;
}

.swiper-pagination-bullet-active {
     background-color: ${({ theme }) => theme.colors.lightBg};
}



`;
