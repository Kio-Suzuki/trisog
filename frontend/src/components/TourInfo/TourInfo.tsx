import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './TourInfo.module.css';
import card1 from '../../assets/card1.jpg';
import { IoLocationOutline } from "react-icons/io5";
import AverageReview from '../AverageReview/AverageReview';
import Review from '../Review/Review';
import AddReview from '../AddReview/AddReview';
import { IoStar } from "react-icons/io5";

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useParams } from 'react-router-dom';

export type Tour = {
  id: number;
  location: string;
  country: string;
  title: string;
  review: number;
  days: number;
  price: number;
  image: string;
  maxPeople: number;
  minAge: number;
  type: string;
  overview: string;
  latitude: number;
  longitude: number;
}

type TourProps = {
  tour: Tour;
}

function TourInfo({ tour }: TourProps) {

  const [tours, setTours] = useState<Tour | null>(null);
  const { id } = useParams<{ id: string }>();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBkYwyHygzVcR0PJdMSXj8gwZIPYqhCP0o"
  })

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
    <div className={style.tourInfoContainer}>
       

      <div className={style.tourImage}>
        <img src={tours?.image} alt="card1" />
      </div>
      <div className={style.tourInfo}>
      <div className={style.tourLocation}>
          <span className={style.locationColor}><IoLocationOutline />{tours?.location}, {tours?.country}</span>
        </div>
        <div className={style.tourTitle}>
          <h1>{tours?.title}</h1>
        </div>
        <div className={style.tourData}>
          <div className={style.tourPrice}>
            <h6>From</h6>
            <p className={style.priceColor}>${tours?.price}</p>
          </div>
          <div className={style.tourDuration}>
            <h6>Duration</h6>
            <p>{tours?.days} days</p>
          </div>
          <div className={style.tourPeople}>
            <h6>Max People</h6>
            <p>{tours?.maxPeople}</p>
          </div>
          <div className={style.tourAge}>
            <h6>Min Age</h6>
            <p>{tours?.minAge}+</p>
          </div>
          <div className={style.tourType}>
            <h6>Tour Type</h6>
            <p>{tours?.type}</p>
          </div>
          <div className={style.tourReview}>
            <h6>Reviews</h6>
            <p><IoStar className={style.starColor}/> {tours?.review}</p>
          </div>
        </div>
        <div className={style.tourOverview}>
          <h3>Overview</h3>
          <p>{tours?.overview}</p>
        </div>
        <div className={style.tourMap}>
          <h3>Map</h3>
          <div className={style.mapContainer}> 
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={{
                  lat: tours?.latitude,
                  lng: tours?.longitude, 
                }}
                zoom={10}
              >
              </GoogleMap>
            ) : null}
          </div>
        </div>
        <div className={style.tourAverageReview}>
          <AverageReview />
        </div>
        <div className={style.tourReview}>
          <Review />
          <AddReview />
        </div>

      </div>
    </div>
  )
}

export default TourInfo
