import { useState } from 'react';
import axios from 'axios';

import Card1Img from '../../assets/card1.jpg';
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

  const [tours, setTours] = useState<Tour[]>([]);

  const fetchTours = async () => {
    const response = await axios.get('http://localhost:3333/tours');
    setTours(response.data);
    console.log(response.data);
  }

  return (
    <Link to='/demo'>
    <div className={style.cardContainer}>
      <div className={style.cardImage}>
        <img src={Card1Img} alt="" />
      </div>
      <div className={style.cardInfo}>
        <div className={style.cardLocation}>
          <span>{tour.location}, {tour.country} Budapest, Hungary</span>
        </div>
        <div className={style.cardTitle}>
          <span>{tour.title}Wonder of the West Coast & Kimberly</span>
        </div>
        <div className={style.cardReview}>
          <div className={style.review}>
            <ReviewGrade />
            <span>{tour.review} 15 reviews</span>
          </div>
          <span><GoClock />{tour.days} 7 days</span>
        </div>
        <div className={style.cardPrice}>
          <span>Starting From</span>
          <span className={style.price}>$520{tour.price}</span>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Card
