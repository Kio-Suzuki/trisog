import TitleBar from '../TitleBar/TitleBar';
import style from './PopularTours.module.css';
import Card from '../Card/Card';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          slidesPerView={4}
          pagination={{ clickable: true }}
        >
          {data.map((card) => (
            <SwiperSlide key={card.id}>
              {card.image}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default PopularTours
