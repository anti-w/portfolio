import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Navigation, Pagination } from 'swiper';
import { ProjectCard } from '../ProjectCard';

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

export const ProjectsCarousel = () => {
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
      {projectsData.map((project) => (
        <SwiperSlide
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '1rem',
          }}
          key={project.slug}
        >
          <ProjectCard key={project.slug} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
