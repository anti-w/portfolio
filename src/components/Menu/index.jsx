import P from 'prop-types';

import * as Styled from './styles';

import {
  BracketsAngle,
  FinnTheHuman,
  GithubLogo,
  LinkedinLogo,
  Rocket,
} from 'phosphor-react';
import { PageWithIcon } from '../PageWithIcon';

export const Menu = ({ pages, handleSelectedPage }) => {
  return (
    <Styled.Container>
      <header>
        <img src="https://cdn-icons.flaticon.com/png/512/924/premium/924915.png?token=exp=1656004840~hmac=238e16b47b9649e11d798caf01402936" />
        <h1>@antiw</h1>
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
};
