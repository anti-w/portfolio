import { Swiper, SwiperSlide } from 'swiper/react';

import * as Styled from './styles';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper';
import { ProjectCard } from '../ProjectCard';
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
          languages(first: 10) {
            nodes {
              name
              id
              color
            }
          }
        }
      }
    }
  }
}
  `;

export const ProjectsCarousel = () => {
  const { data, loading, error } = useQuery(GET_GITHUB_REPOS_DATA, {
    fetchPolicy: 'network-only',
  });

  var githubRepos = [];

  if (data === undefined) {
    return <h1>Carregando...</h1>;
  } else {
    githubRepos = data.viewer.repositories.edges;
  }

  if (loading) {
    return <h1>Carregando</h1>;
  }

  return (
    <Styled.Container>
      <Swiper
        className="swiper-custom"
        breakpoints={{
          768: {
            slidesPerView: 1,
          },

          1080: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Navigation]}
        navigation
        pagination={{
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
      >
        {githubRepos.map(({ node }) => (
          <SwiperSlide key={node.id}>
            <ProjectCard
              key={node.id}
              name={node.name}
              url={node.homepageUrl}
              githubUrl={node.url}
              description={node.description}
              topics={node.repositoryTopics.edges}
              languages={node.languages.nodes}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Styled.Container>
  );
};
