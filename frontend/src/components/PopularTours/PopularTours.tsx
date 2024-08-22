
import style from './PopularTours.module.css';
import Card from '../Card/Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { WiDayCloudy } from 'react-icons/wi';

function PopularTours() {

  const data = [
    { id: '1', image: <Card /> },
    { id: '2', image: <Card /> },
    { id: '3', image: <Card /> },
    { id: '4', image: <Card /> },
    { id: '5', image: <Card /> },
    { id: '6', image: <Card /> },
    { id: '7', image: <Card /> },
    { id: '8', image: <Card /> },
  ]

  return (
    <div className={style.popularToursContainer}>
      <div className={style.carousel}>
        <Splide
          options={ {
            width: '100%',
            perPage: 4,
            gap   : '1em',
          } }
        >
          {data.map((card) => (
              <SplideSlide key={card.id}>
                {card.image}
              </SplideSlide>
            ))}
        </Splide>
      </div>
    </div>
  )
}

export default PopularTours
