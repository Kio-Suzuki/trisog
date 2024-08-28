import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BookNow from '../../components/BookNow/BookNow';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PopularTours from '../../components/PopularTours/PopularTours';
import TourInfoComponent from '../../components/TourInfo/TourInfo';
import style from './TourInfo.module.css';
import { ToastContainer } from 'react-toastify';

function TourInfo() {

  const [tours, setTours] = useState<Tour | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/tours/${id}`);  
        setTours(response.data);
      } catch (error) {
        console.error("Error fetching tour", error);
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
    </div>
  )
}

export default TourInfo;
