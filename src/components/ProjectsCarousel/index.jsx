import { Swiper, SwiperSlide } from 'swiper/react';

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
                id
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

export const ProjectsCarousel = () => {
  const { data, loading, error } = useQuery(GET_GITHUB_REPOS_DATA, {
    fetchPolicy: 'network-only',
  });

  var githubRepos = [];

  if (data === undefined) {
    return <h1>Undefined</h1>;
  } else {
    githubRepos = data.viewer.repositories.edges;
    console.log(githubRepos);
  }

  if (loading) {
    return <h1>Carregando</h1>;
  }

  return (
    <Swiper
      style={{ height: '100%', width: '100%' }}
      modules={[Pagination, Navigation]}
      slidesPerView={3}
      spaceBetween={25}
      navigation
      pagination={{
        bulletActiveClass: 'actualImage',
      }}
    >
      {githubRepos.map(({ node }) => (
        <SwiperSlide
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          }}
          key={node.id}
        >
          <ProjectCard
            key={node.id}
            name={node.name}
            url={node.homepageUrl ? node.homepageUrl : 'sla'}
            githubUrl={node.url}
            // notionUrl={}
            description={node.description}
            topics={node.repositoryTopics.edges}
            // languages={}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
