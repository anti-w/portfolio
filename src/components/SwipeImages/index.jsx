import { SwiperSlide } from 'swiper/react';
import 'swiper/css';

const images = [
  {
    url: 'https://source.unsplash.com/random/720x720?r=1',
    title: 'random image1',
  },
  {
    url: 'https://source.unsplash.com/random/720x720?r=2',
    title: 'random image2',
  },
];

export const SwipeImages = () => {
  return images.map((image) => (
    <SwiperSlide
      style={{
        background: 'red',
      }}
      key={image.url + image.title}
    >
      <img src={image.url} alt={image.title} />
    </SwiperSlide>
  ));
};
