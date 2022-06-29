import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Autoplay, Pagination } from 'swiper';
import { SwipeImages } from '../SwipeImages';

const images = [
  {
    url: 'https://source.unsplash.com/random/300x300?r=1',
    title: 'random image1',
  },
  {
    url: 'https://source.unsplash.com/random/300x300?r=2',
    title: 'random image2',
  },
  {
    url: 'https://source.unsplash.com/random/300x300?r=3',
    title: 'random image3',
  },
  {
    url: 'https://source.unsplash.com/random/300x300?r=4',
    title: 'random image4',
  },
  {
    url: 'https://source.unsplash.com/random/300x300?r=5',
    title: 'random image5',
  },
];

export const SwiperComponent = () => {
  return (
    <Swiper
      style={{
        width: '420px',
        height: '420px',
      }}
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      pagination
      autoplay={{ delay: 1500 }}
    >
      {images.map((image) => (
        <SwiperSlide
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          key={image.title + image.url}
        >
          <img src={image.url} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
