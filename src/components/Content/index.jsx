import P from 'prop-types';
import * as Styled from './styles';

import { AboutMe } from '../AboutMe';
import { MyProjects } from '../MyProjects';
import { MySkills } from '../MySkills';

export const Content = ({ selectedPage }) => {
  return (
    <Styled.Container>
      {selectedPage === 'Sobre mim' && <AboutMe />}
      {selectedPage === 'Habilidades' && <MySkills />}
      {selectedPage === 'Projetos' && <MyProjects />}
    </Styled.Container>
  );
};

Content.propTypes = {
  selectedPage: P.string.isRequired,
};
