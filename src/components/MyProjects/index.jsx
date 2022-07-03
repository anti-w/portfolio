import * as Styled from './styles';

import { ProjectsCarousel } from '../ProjectsCarousel';
import { gql, useQuery } from '@apollo/client';

export const MyProjects = () => {
  return (
    <Styled.Container>
      <ProjectsCarousel />
    </Styled.Container>
  );
};
