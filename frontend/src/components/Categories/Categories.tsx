import TitleBar from '../TitleBar/TitleBar';
import CardCategory from '../CardCategory/CardCategory';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import style from './Categories.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Categories() {

  const [tours, setTours] = useState<Tour[]>([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:3333/tourstypes');
        setTours(response.data);
      } catch (error) {
        console.error("Error fetching tours", error);
      }
    };
    fetchTours();
  }, []);

  return (
    <div className={style.categoriesContainer}>
      <div>
        <TitleBar title1="Browse by Category" title2="Pick A Tour Type"/>
      </div>
      <div className={style.carousel}>
        <Swiper
          modules={[ Pagination ]}
          slidesPerView={6}
          pagination={{ clickable: true }}
        >
          {tours.map((tour) => (
            <SwiperSlide key={tour.type}>
              <CardCategory tour={tour} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Categories
