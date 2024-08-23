
import Card from '../Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import style from './PopularTours.module.css';


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
          modules={[Pagination]}
          slidesPerView={4}
          pagination={{ clickable: true }}
          spaceBetween={38}
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