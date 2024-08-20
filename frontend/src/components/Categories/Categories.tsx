import TitleBar from '../TitleBar/TitleBar';
import style from './Categories.module.css';
import CardCategory from '../CardCategory/CardCategory';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Categories() {

  const data = [
    { id: '1', image: <CardCategory /> },
    { id: '2', image: <CardCategory /> },
    { id: '3', image: <CardCategory /> },
    { id: '4', image: <CardCategory /> },
    { id: '5', image: <CardCategory /> },
    { id: '6', image: <CardCategory /> },
    { id: '7', image: <CardCategory /> },
    { id: '8', image: <CardCategory /> },
  ]

  return (
    <div className={style.categoriesContainer}>
      <div>
        <TitleBar title1="Browse by Category" title2="Pick A Tour Type"/>
      </div>
      <div className={style.carousel}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          slidesPerView={6}
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

export default Categories
