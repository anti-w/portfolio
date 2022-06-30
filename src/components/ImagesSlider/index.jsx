import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Autoplay, Pagination } from 'swiper';

const images = [
  {
    url: 'https://source.unsplash.com/random/360x360?r=2',
    title: 'random image2',
  },
  {
    url: 'https://source.unsplash.com/random/360x360?r=3',
    title: 'random image3',
  },
  {
    url: 'https://source.unsplash.com/random/360x360?r=4',
    title: 'random image4',
  },
  {
    url: 'https://source.unsplash.com/random/360x360?r=5',
    title: 'random image5',
  },
];

export const ImagesSlider = () => {
  return (
    <Swiper
      style={{
        width: '420px',
        height: '420px',
      }}
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      pagination={{
        bulletActiveClass: 'actualImage',
      }}
      autoplay={{
        delay: 1500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
    >
      {images.map((image) => (
        <SwiperSlide
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
          key={image.title + image.url}
        >
          <img src={image.url} style={{ borderRadius: '10px' }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
