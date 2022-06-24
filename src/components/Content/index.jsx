import P from 'prop-types';

import { AboutMe } from '../AboutMe';
import { Container } from '../AboutMe/styles';
import { MyProjects } from '../MyProjects';
import { MySkills } from '../MySkills';

export const Content = ({ selectedPage }) => {
  return (
    <Container>
      {selectedPage === 'Sobre mim' && <AboutMe />}
      {selectedPage === 'Habilidades' && <MySkills />}
      {selectedPage === 'Projetos' && <MyProjects />}
    </Container>
  );
};

Content.propTypes = {
  selectedPage: P.string.isRequired,
};
