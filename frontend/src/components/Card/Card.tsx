import { GoClock } from "react-icons/go";
import { Link } from 'react-router-dom';
import { IoStar } from "react-icons/io5";
import { GrFavorite } from "react-icons/gr";
import style from './Card.module.css';
import { useTourContext } from '../../context/TourContext';

export type Tour = {
  id: number;
  location: string;
  country: string;
  title: string;
  review: number;
  days: number;
  price: number;
  image: string;
  average: number | null;
  reviewsCount: number;
}

type CardProps = {
  tour: Tour;
}

function Card({ tour }: CardProps) {

  const { tours } = useTourContext();
  
  return (
    <Link to={`/tours/${tour.id}`}>
      <div className={style.cardContainer}>
        <div className={style.cardImage}>
          <div className={style.iconFavorite}>
            <GrFavorite className={style.favorite} />
          </div>
          <img src={tour.image} alt={tour.title} />
        </div>
        <div className={style.cardInfo}>
          <div className={style.cardLocation}>
            <span>{tour.location}, {tour.country}</span>
          </div>
          <div className={style.cardTitle}>
            <span>{tour.title}</span>
          </div>
          <div className={style.cardReview}>
            <div className={style.review}>
              <span className={style.reviewGradeContainer}><IoStar />
                {tour.average !== null && tour.average !== undefined
                  ? tour.average.toFixed(1)
                  : "N/A"}
              </span>
              <span>{tour.reviewsCount} reviews</span>
            </div>
            <span className={style.iconPosition}><GoClock /> {tour.days} days</span>
          </div>
          <div className={style.cardPrice}>
            <span>Starting From</span>
            <span className={style.price}>${tour.price}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
