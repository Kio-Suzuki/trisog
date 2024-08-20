import style from './home.module.css';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import TitleBar from '../../components/TitleBar/TitleBar';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import InfoNumbers from '../../components/InfoNumbers/InfoNumbers';

function Home() {

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
    <div className={style.home}>
      <Header />
      <Banner />
      <Search />
      <TitleBar />
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
      <InfoNumbers />
    </div>
  );
}

export default Home
