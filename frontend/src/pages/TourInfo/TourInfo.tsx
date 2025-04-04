import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BookNow from '../../components/BookNow/BookNow';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PopularTours from '../../components/PopularTours/PopularTours';
import TourInfoComponent from '../../components/TourInfo/TourInfo';
import { ToastContainer } from 'react-toastify';
import style from './TourInfo.module.css';

function TourInfo() {
  const [tours, setTours] = useState<Tour | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await axios.get(
          `http://trisog-production.up.railway.app/tours/${id}`
        );
        setTours(response.data);
      } catch (error) {
        console.error('Error fetching tour', error);
      }
    };
    fetchTour();

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.tourInfoContainer}>
      <ToastContainer />
      <Header />
      <div className={style.tourInfoComponents}>
        <TourInfoComponent tour={tours} />
        <BookNow tour={tours} />
      </div>
      <h2>You may also like...</h2>
      <PopularTours />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default TourInfo;
