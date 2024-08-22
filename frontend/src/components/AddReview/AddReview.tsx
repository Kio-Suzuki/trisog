import style from './AddReview.module.css';
import { IoStar } from "react-icons/io5";
import { SetStateAction, useState } from "react";

function AddReview() {

  const [servicesStars, setServicesStars] = useState<number>(0);

  const handleServices = (starNumber: SetStateAction<number>) => {
    setServicesStars(starNumber);
  };

  const [locationStars, setLocationStars] = useState<number>(0);

  const handleLocations = (starNumber: SetStateAction<number>) => {
    setLocationStars(starNumber);
  };

  const [amenitiesStars, setAmenitiesStars] = useState<number>(0);

  const handleAmenities = (starNumber: SetStateAction<number>) => {
    setAmenitiesStars(starNumber);
  };

  const [pricesStars, setPricesStars] = useState<number>(0);

  const handlePrices = (starNumber: SetStateAction<number>) => {
    setPricesStars(starNumber);
  };

  const [roomsStars, setRoomsStars] = useState<number>(0);

  const handleRooms = (starNumber: SetStateAction<number>) => {
    setRoomsStars(starNumber);
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
                className={servicesStars >= star ? `${style.star} ${style.clicked}` : style.star}
                onClick={() => handleServices(star)}
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
                className={locationStars >= star ? `${style.star} ${style.clicked}` : style.star}
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
                className={amenitiesStars >= star ? `${style.star} ${style.clicked}` : style.star}
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
                className={pricesStars >= star ? `${style.star} ${style.clicked}` : style.star}
                onClick={() => handlePrices(star)}
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
                className={roomsStars >= star ? `${style.star} ${style.clicked}` : style.star}
                onClick={() => handleRooms(star)}
              />
            ))}
          </div>
        </div>
      </div>
      <form>
        <div className={style.formInfo}>
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Email address' />
        </div>
        <div className={style.formText}>
          <textarea placeholder='Write your comment'></textarea>
        </div>
        <div className={style.formButton}>
          <button type="submit">Submit review</button>
        </div>
      </form>
    </div>
  )
}

export default AddReview
