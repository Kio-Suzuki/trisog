import { useState, SetStateAction } from 'react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
import { IoStar } from 'react-icons/io5';
import style from './AddReview.module.css';

export type Review = {
  id: number;
  name: string;
  email: string;
  image: string;
  comment: string;
  services: number;
  locations: number;
  amenities: number;
  prices: number;
  food: number;
  rooms: number;
  overall: number;
  tourId: number;
  user: {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
  };
  overallAverage: number;
  reviewsCount: number;
};

function AddReview({ onReviewAdded }: { onReviewAdded: () => void }) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [services, setServices] = useState<number>(0);
  const [locations, setLocations] = useState<number>(0);
  const [amenities, setAmenities] = useState<number>(0);
  const [prices, setPrices] = useState<number>(0);
  const [food, setFood] = useState<number>(0);
  const [rooms, setRooms] = useState<number>(0);
  const [servicesStars, setServicesStars] = useState<number>(0);
  const [locationStars, setLocationStars] = useState<number>(0);
  const [amenitiesStars, setAmenitiesStars] = useState<number>(0);
  const [pricesStars, setPricesStars] = useState<number>(0);
  const [foodStars, setFoodStars] = useState<number>(0);
  const [roomsStars, setRoomsStars] = useState<number>(0);

  const handleServices = (starNumber: SetStateAction<number>) => {
    setServicesStars(starNumber);
    setServices(starNumber);
  };

  const handleLocations = (starNumber: SetStateAction<number>) => {
    setLocationStars(starNumber);
    setLocations(starNumber);
  };

  const handleAmenities = (starNumber: SetStateAction<number>) => {
    setAmenitiesStars(starNumber);
    setAmenities(starNumber);
  };

  const handlePrices = (starNumber: SetStateAction<number>) => {
    setPricesStars(starNumber);
    setPrices(starNumber);
  };

  const handleFood = (starNumber: SetStateAction<number>) => {
    setFoodStars(starNumber);
    setFood(starNumber);
  };

  const handleRooms = (starNumber: SetStateAction<number>) => {
    setRoomsStars(starNumber);
    setRooms(starNumber);
  };

  async function getTokenId() {
    try {
      const auth = getAuth();
      const user = auth.currentUser;
      if (user) {
        const token = await user.getIdToken();
        return user;
      }
    } catch (error) {
      console.error('Error getting token:', error);
    }
  }
  getTokenId();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = await getTokenId();

    const urlSegments = window.location.pathname.split('/');
    const tourId = parseInt(urlSegments[urlSegments.length - 1]);

    const review = {
      name: name,
      email: email,
      image,
      comment,
      services,
      locations,
      amenities,
      prices,
      food,
      rooms,
      tourId: tourId,
      userId: token?.uid,
    };

    if (
      services === 0 ||
      locations === 0 ||
      amenities === 0 ||
      prices === 0 ||
      food === 0 ||
      rooms === 0
    ) {
      toast.error('Please select a rating for each category, at least 1 star');
      return;
    }

    try {
      const response = await axios.post(
        'https://trisog-production.up.railway.app/reviews',
        review
      );
      toast.success('Review added successfully', {
        position: 'top-center',
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      onReviewAdded();
      setName('');
      setEmail('');
      setComment('');
      setServicesStars(0);
      setLocationStars(0);
      setAmenitiesStars(0);
      setPricesStars(0);
      setFoodStars(0);
      setRoomsStars(0);
      setServices(0);
      setLocations(0);
      setAmenities(0);
      setPrices(0);
      setFood(0);
      setRooms(0);
    } catch (error) {
      toast.error('Error adding review');
    }
  };

  return (
    <div className={style.addReviewContainer}>
      <h1>Add a review</h1>
      <div className={style.grade}>
        <div className={style.t}>
          <p>Services</p>
          <div className={style.starContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <IoStar
                key={star}
                className={
                  servicesStars >= star
                    ? `${style.star} ${style.clicked}`
                    : style.star
                }
                onClick={() => handleServices(star)}
                values="services"
              />
            ))}
          </div>
        </div>
        <div className={style.t}>
          <p>Locations</p>
          <div className={style.starContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <IoStar
                key={star}
                className={
                  locationStars >= star
                    ? `${style.star} ${style.clicked}`
                    : style.star
                }
                onClick={() => handleLocations(star)}
              />
            ))}
          </div>
        </div>
        <div className={style.t}>
          <p>Amenities</p>
          <div className={style.starContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <IoStar
                key={star}
                className={
                  amenitiesStars >= star
                    ? `${style.star} ${style.clicked}`
                    : style.star
                }
                onClick={() => handleAmenities(star)}
              />
            ))}
          </div>
        </div>
        <div className={style.t}>
          <p>Prices</p>
          <div className={style.starContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <IoStar
                key={star}
                className={
                  pricesStars >= star
                    ? `${style.star} ${style.clicked}`
                    : style.star
                }
                onClick={() => handlePrices(star)}
              />
            ))}
          </div>
        </div>
        <div className={style.t}>
          <p>Food</p>
          <div className={style.starContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <IoStar
                key={star}
                className={
                  foodStars >= star
                    ? `${style.star} ${style.clicked}`
                    : style.star
                }
                onClick={() => handleFood(star)}
              />
            ))}
          </div>
        </div>
        <div className={style.t}>
          <p>Room conmfort and quality</p>
          <div className={style.starContainer}>
            {[1, 2, 3, 4, 5].map((star) => (
              <IoStar
                key={star}
                className={
                  roomsStars >= star
                    ? `${style.star} ${style.clicked}`
                    : style.star
                }
                onClick={() => handleRooms(star)}
              />
            ))}
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={style.formInfo}>
          <input
            type="text"
            placeholder="Your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className={style.formText}>
          <textarea
            typeof="text"
            placeholder="Write your comment"
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            required
          ></textarea>
        </div>
        <div className={style.formButton}>
          <button type="submit">Submit review</button>
        </div>
      </form>
    </div>
  );
}

export default AddReview;
