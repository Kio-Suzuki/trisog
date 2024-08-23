import { GoClock } from "react-icons/go";
import ReviewGrade from '../ReviewGrade/ReviewGrade';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

export type Tour = {
  id: number;
  location: string;
  country: string;
  title: string;
  review: number;
  days: number;
  price: number;
  image: string;
}

type CardProps = {
  tour: Tour;
}

function Card({ tour }: CardProps) {
  return (
    <Link to='/demo'>
      <div className={style.cardContainer}>
        <div className={style.cardImage}>
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
              <ReviewGrade />
              <span>{tour.review} reviews</span>
            </div>
            <span><GoClock /> {tour.days} days</span>
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
