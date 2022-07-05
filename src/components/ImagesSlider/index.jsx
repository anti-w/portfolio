import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

import { Autoplay, Pagination } from 'swiper';
import { useEffect, useState } from 'react';

const images = [
  {
    url: 'https://i.pinimg.com/originals/a0/73/46/a0734619ab594b1120a68c4134795caa.png',
    title: 'stranger things logo',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/2560px-Naruto_logo.svg.png',
    title: 'naruto logo',
  },
  {
    url: 'https://i.pinimg.com/originals/67/52/3a/67523a1ccc306c30a360533b3b0ae5d8.png',
    title: 'pluuuus ultra text',
  },
  {
    url: 'https://logosmarcas.net/wp-content/uploads/2022/01/Umbrella-Academy-Logo.png',
    title: 'umbrella academy logo',
  },
  {
    url: 'https://logodownload.org/wp-content/uploads/2018/01/steam-logo-1.png',
    title: 'steam logo',
  },
  {
    url: 'https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png',
    title: 'spotify logo',
  },
  {
    url: 'https://logodownload.org/wp-content/uploads/2018/02/blizzard-logo.png',
    title: 'blizzard enterteiment logo',
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Netflix_logo.svg/2560px-Netflix_logo.svg.png',
    title: 'netflix logo',
  },
  {
    url: 'https://logosmarcas.net/wp-content/uploads/2022/01/Rick-And-Morty-Logo.png',
    title: 'rick and morty logo',
  },
  {
    url: 'https://cdn.awsli.com.br/443/443472/arquivos/flip-skateboard2s.png',
    title: 'flip logo',
  },
  {
    url: 'https://raichu-uploads.s3.amazonaws.com/logo_null_pvumsG.png',
    title: 'random image5',
  },
];

export const ImagesSlider = () => {
  const [randImg, setRangImg] = useState(images);

  useEffect(() => {
    const sortedImages = images.sort(() => Math.random() - 0.5);

    setRangImg(sortedImages);
  }, []);
  return (
    <Swiper
      style={{
        width: '420px',
        height: '420px',
      }}
      modules={[Pagination, Autoplay]}
      slidesPerView={1}
      pagination={{
        dynamicBullets: true,
        dynamicMainBullets: 3,
      }}
      autoplay={{
        delay: 1500,
        pauseOnMouseEnter: true,
        disableOnInteraction: false,
      }}
    >
      {randImg.map((image) => (
        <SwiperSlide
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}
          key={image.title + image.url}
        >
          <img
            src={image.url}
            alt={image.title}
            style={{ borderRadius: '10px', width: '340px' }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
