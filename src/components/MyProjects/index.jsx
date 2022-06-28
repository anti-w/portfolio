import { ProjectCard } from '../ProjectCard';
import * as Styled from './styles';

const projectsData = [
  {
    slug: 'can-eat-web',
    about: 'Projeto WEB e tals tal tal tal tal tal e tal',
    languages: ['Javascript', 'HTML', 'CSS'],
    topics: ['mongoDB', 'styled-components'],
  },
  {
    slug: 'can-eat-web',
    about: 'Projeto WEB e tals tal tal tal tal tal e tal',
    languages: ['Javascript', 'HTML', 'CSS'],
    topics: ['mongoDB', 'styled-components'],
  },
  {
    slug: 'can-eat-web',
    about: 'Projeto WEB e tals tal tal tal tal tal e tal',
    languages: ['Javascript', 'HTML', 'CSS'],
    topics: ['mongoDB', 'styled-components'],
  },
];

export const MyProjects = () => {
  return (
    <Styled.Container>
      {projectsData.map((project) => (
        <ProjectCard key={project.slug} />
      ))}
    </Styled.Container>
  );
};
