import {
  BracketsAngle,
  FinnTheHuman,
  GithubLogo,
  LinkedinLogo,
  Rocket,
} from 'phosphor-react';
import * as Styled from './styles';

export const Menu = () => {
  const avatarUrl =
    '"https://res.cloudinary.com/dscztnlqq/image/upload/v1656006491/portfolio/62898_pd8xlr.png"';

  return (
    <Styled.Container>
      <header>
        <img src="https://cdn-icons.flaticon.com/png/512/924/premium/924915.png?token=exp=1656004840~hmac=238e16b47b9649e11d798caf01402936" />
        <h1>@antiw</h1>
      </header>
      <nav>
        <Styled.PagesContainer>
          <a>
            <FinnTheHuman size={35} />
            <h2>Sobre mim</h2>
          </a>
          <a>
            <BracketsAngle size={35} />
            <h2>Habilidades</h2>
          </a>
          <a>
            <Rocket size={35} />
            <h2>Projetos</h2>
          </a>
        </Styled.PagesContainer>
      </nav>
      <footer>
        <Styled.SocialIconsContainer>
          <a>
            <LinkedinLogo size={42} color="#262626" />
          </a>
          <a>
            <GithubLogo size={42} color="#262626" />
          </a>
        </Styled.SocialIconsContainer>
      </footer>
    </Styled.Container>
  );
};
