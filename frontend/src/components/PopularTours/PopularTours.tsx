import { useState, useEffect } from 'react';
import axios from 'axios';
import Card, { Tour } from '../Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from './PopularTours.module.css';

function PopularTours() {
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get(
          'http://trisog-production.up.railway.app/toursall'
        );
        const shuffledTours = response.data.tours
          .sort(() => 0.5 - Math.random())
          .slice(0, 8);
        setTours(shuffledTours);
      } catch (error) {
        console.error('Error fetching tours', error);
      }
    };
    fetchTours();
  }, []);

  return (
    <div className={style.popularToursContainer}>
      <div className={style.carousel}>
        <Swiper
          modules={[Pagination]}
          slidesPerView={4}
          spaceBetween={38}
          pagination={{ clickable: true }}
        >
          {tours.map((tour) => (
            <SwiperSlide key={tour.id}>
              <Card tour={tour} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PopularTours;
