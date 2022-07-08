import P from 'prop-types';

import * as Styled from './styles';

import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import { PageWithIcon } from '../PageWithIcon';
import { Toggle } from '../ToggleTheme';

export const Menu = ({ pages, handleSelectedPage, theme, toggleTheme }) => {
  return (
    <Styled.Container>
      <header>
        <img src="https://res.cloudinary.com/dscztnlqq/image/upload/v1656099031/portfolio/924915_euttiy.png" />
        <h1>@antiw</h1>
        <Toggle theme={theme} toggleTheme={toggleTheme} />
      </header>
      <nav>
        <Styled.PagesContainer>
          {pages.map((page) => {
            return (
              <PageWithIcon
                title={page.title}
                icon={page.icon}
                key={page.title}
                selected={page.selected}
                handleSelectedPage={handleSelectedPage}
              />
            );
          })}
        </Styled.PagesContainer>
      </nav>
      <footer>
        <Styled.SocialIconsContainer>
          <a>
            <LinkedinLogo size={42} />
          </a>
          <a>
            <GithubLogo size={42} />
          </a>
        </Styled.SocialIconsContainer>
      </footer>
    </Styled.Container>
  );
};

Menu.propTypes = {
  pages: P.array.isRequired,
  handleSelectedPage: P.func.isRequired,
  theme: P.string.isRequired,
  toggleTheme: P.func.isRequired,
};
