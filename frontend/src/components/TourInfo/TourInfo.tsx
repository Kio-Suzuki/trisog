import { useState, useEffect } from 'react';
import axios from 'axios';
import { IoLocationOutline } from "react-icons/io5";
import AverageReview from '../AverageReview/AverageReview';
import Review from '../Review/Review';
import AddReview from '../AddReview/AddReview';
import { IoStar } from "react-icons/io5";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useParams } from 'react-router-dom';
import style from './TourInfo.module.css';

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

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBkYwyHygzVcR0PJdMSXj8gwZIPYqhCP0o"
  });

  return (
    <div className={style.tourInfoContainer}>
       
      <div className={style.tourImage}>
        <img src={tour?.image} alt="card1" />
      </div>
      <div className={style.tourInfo}>
      <div className={style.tourLocation}>
          <span className={style.locationColor}><IoLocationOutline />{tour?.location}, {tour?.country}</span>
        </div>
        <div className={style.tourTitle}>
          <h1>{tour?.title}</h1>
        </div>
        <div className={style.tourData}>
          <div className={style.tourPrice}>
            <h6>From</h6>
            <p className={style.priceColor}>${tour?.price}</p>
          </div>
          <div className={style.tourDuration}>
            <h6>Duration</h6>
            <p>{tour?.days} days</p>
          </div>
          <div className={style.tourPeople}>
            <h6>Max People</h6>
            <p>{tour?.maxPeople}</p>
          </div>
          <div className={style.tourAge}>
            <h6>Min Age</h6>
            <p>{tour?.minAge}+</p>
          </div>
          <div className={style.tourType}>
            <h6>Tour Type</h6>
            <p>{tour?.type}</p>
          </div>
          <div className={style.tourReview}>
            <h6>Reviews</h6>
            <p><IoStar className={style.starColor}/> {tour?.review}</p>
          </div>
        </div>
        <div className={style.tourOverview}>
          <h3>Overview</h3>
          <p>{tour?.overview}</p>
        </div>
        <div className={style.tourMap}>
          <h3>Map</h3>
          <div className={style.mapContainer}> 
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={{
                  lat: tour?.latitude,
                  lng: tour?.longitude, 
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
