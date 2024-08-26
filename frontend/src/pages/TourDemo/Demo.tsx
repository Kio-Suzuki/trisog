import { useEffect, useState } from 'react';
import axios from 'axios';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useParams } from 'react-router-dom';
import BookNow from '../../components/BookNow/BookNow';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PopularTours from '../../components/PopularTours/PopularTours';
import TourInfo from '../../components/TourInfo/TourInfo';
import style from './Demo.module.css';
import { ToastContainer } from 'react-toastify';

function Demo() {

  const [tours, setTours] = useState<Tour | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/tours/${id}`);  
        console.log("Tour data:", response.data);
        setTours(response.data);
      } catch (error) {
        console.error("Error fetching tour", error);
      }
    };
    fetchTour();

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={style.demoContainer}>
      <ToastContainer />
      <Header />
      <div className={style.demoComponents}>
        <TourInfo tour={tours} />
        <BookNow tour={tours}/>
      </div>
      <h2>You may also like...</h2>
      <PopularTours />
      <Footer />
    </div>
  )
}

export default Demo
