import { useState, useEffect } from 'react';
import axios from 'axios';
import Card, { Tour } from '../Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import style from './PopularToursByCountry.module.css';

function PopularToursByCountry() {
  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const id = location.pathname.split('/')[2];
        const response = await axios.get(
          `https://trisog-production.up.railway.app/tourscountry/${id}`
        );
        let carouselTours = response.data.tours;
        if (carouselTours.length < 8) {
          const repeatedTours = [];
          while (repeatedTours.length < 8) {
            repeatedTours.push(
              ...carouselTours.slice(0, 8 - repeatedTours.length)
            );
          }
          carouselTours = repeatedTours;
        }
        setTours(carouselTours);
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
          {tours.map((tour, index) => (
            <SwiperSlide key={`${tour.id}-${index}`}>
              <Card tour={tour} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default PopularToursByCountry;
