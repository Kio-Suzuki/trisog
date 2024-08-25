import { GoClock } from "react-icons/go";
import { Link } from 'react-router-dom';
import style from './Card.module.css';
import { IoStar } from "react-icons/io5";

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
    <Link to={`/tours/${tour.id}`}>
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
              <span className={style.reviewGradeContainer}><IoStar /> 4.8</span><span>{tour.review} reviews</span>
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
