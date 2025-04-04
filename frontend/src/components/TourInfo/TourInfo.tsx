import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { IoLocationOutline } from 'react-icons/io5';
import AverageReview from '../AverageReview/AverageReview';
import Review from '../Review/Review';
import AddReview from '../AddReview/AddReview';
import { IoStar } from 'react-icons/io5';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useParams } from 'react-router-dom';
import { IoShareSocialOutline } from 'react-icons/io5';
import { GrFavorite } from 'react-icons/gr';
import { PiVideoCamera } from 'react-icons/pi';
import { GoImage } from 'react-icons/go';
import { toast } from 'react-toastify';
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
};

type TourProps = {
  tour: Tour;
};

function TourInfo({ tour }: TourProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
  });

  const [reviews, setReviews] = useState<Review[]>([]);
  const [overallAverage, setOverallAverage] = useState<number>(0);
  const [overallService, setOverallService] = useState<number>(0);
  const [overallLocation, setOverallLocation] = useState<number>(0);
  const [overallAmenities, setOverallAmenities] = useState<number>(0);
  const [overallPrices, setOverallPrices] = useState<number>(0);
  const [overallFood, setOverallFood] = useState<number>(0);
  const [overallRooms, setOverallRooms] = useState<number>(0);
  const [reviewsCount, setReviewsCount] = useState<number>(0);
  const { id } = useParams<{ id: string }>();
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(
        `https://trisog-production.up.railway.app/reviews/tour/${id}`
      );

      if (response.data) {
        setReviews(response.data.reviews);
        setOverallAverage(response.data.overallAverage.toFixed(1));
        setOverallService(response.data.overallService.toFixed(1));
        setOverallLocation(response.data.overallLocation.toFixed(1));
        setOverallAmenities(response.data.overallAmenities.toFixed(1));
        setOverallPrices(response.data.overallPrices.toFixed(1));
        setOverallFood(response.data.overallFood.toFixed(1));
        setOverallRooms(response.data.overallRooms.toFixed(1));
        setReviewsCount(response.data.reviewsCount);
      }
    } catch (error) {
      console.error('Error fetching reviews', error);
    }
  };

  const scrollToMap = () => {
    if (mapContainerRef.current) {
      mapContainerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [id]);

  const handleReviewAdded = async () => {
    await fetchReviews();
  };

  const handleNotification = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    toast.success('Tour added to favorites', {
      position: 'top-center',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  return (
    <div className={style.tourInfoContainer}>
      <div className={style.tourImage}>
        <img src={tour?.image} alt="card1" />
        <div className={style.buttonsImage}>
          <div className={style.buttonsImage1}>
            <p>Video</p> <PiVideoCamera />
          </div>
          <div className={style.buttonsImage2}>
            <p>Gallery</p> <GoImage />
          </div>
        </div>
      </div>
      <div className={style.tourInfo}>
        <div className={style.tourLocation}>
          <p className={style.locationColor}>
            <IoLocationOutline />
            {tour?.location}, {tour?.country}{' '}
            <span className={style.linkMap} onClick={scrollToMap}>
              View on map
            </span>
          </p>
          <div onClick={handleNotification}>
            <IoShareSocialOutline className={style.icon1Color} />{' '}
            <GrFavorite className={style.icon2Color} />
          </div>
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
            <p>
              <IoStar className={style.starColor} /> {overallAverage}{' '}
              <span className={style.reviewCounter}>
                ({reviewsCount} reviews)
              </span>
            </p>
          </div>
        </div>
        <div className={style.tourOverview}>
          <h3>Overview</h3>
          <p>{tour?.overview}</p>
        </div>
        <div className={style.tourMap} ref={mapContainerRef}>
          <h3>Map</h3>
          <div className={style.mapContainer}>
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={{
                  lat: tour?.latitude,
                  lng: tour?.longitude,
                }}
                zoom={7}
              ></GoogleMap>
            ) : null}
          </div>
        </div>
        <div className={style.tourAverageReview}>
          <div>
            <h3>Average Review</h3>
          </div>
          <AverageReview
            overallAverage={overallAverage}
            overallLocation={overallLocation}
            overallService={overallService}
            overallAmenities={overallAmenities}
            overallPrices={overallPrices}
            overallFood={overallFood}
            overallRooms={overallRooms}
          />
        </div>
        {reviews.length > 0 ? (
          <h4 className={style.showReviewCount}>
            Showing {reviewsCount} review
          </h4>
        ) : null}
        <div className={style.tourReviewContainer}>
          {reviews.length > 0 ? (
            reviews.map((review) => <Review key={review.id} {...review} />)
          ) : (
            <p className={style.noReview}>
              No reviews available for this tour.
            </p>
          )}
        </div>
        <AddReview onReviewAdded={handleReviewAdded} />
      </div>
    </div>
  );
}

export default TourInfo;
