import * as Styled from './styles';

import { ProjectsCarousel } from '../ProjectsCarousel';
import { gql, useQuery } from '@apollo/client';

const GET_GITHUB_REPOS_DATA = gql`
  query {
  viewer {
    login
    repositories(last: 20) {
      edges {
        node {
          id
          description
          createdAt
          homepageUrl
          name
          repositoryTopics(last: 10) {
            edges {
              node {
                topic {
                  name
                }
              }
            }
          }
          updatedAt
          url
        }
      }
    }
  }
}
  `;

export const MyProjects = () => {
  const { data, loading } = useQuery(GET_GITHUB_REPOS_DATA);
  console.log(data);
  return (
    <Styled.Container>
      <ProjectsCarousel />
    </Styled.Container>
  );
};
