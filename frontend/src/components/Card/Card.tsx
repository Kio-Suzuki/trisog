import style from './Card.module.css';
import Card1Img from '../../assets/card1.jpg';
import { GoClock } from "react-icons/go";
import ReviewGrade from '../ReviewGrade/ReviewGrade';


function Card() {
  return (
    <div className={style.cardContainer}>
      <div className={style.cardImage}>
        <img src={Card1Img} alt="" />
      </div>
      <div className={style.cardInfo}>
        <div className={style.cardLocation}>
          <span>Budapest, Hungary</span>
        </div>
        <div className={style.cardTitle}>
          <span>Wonder of the West Coast & Kimberly</span>
        </div>
        <div className={style.cardReview}>
          <div className={style.review}>
            <ReviewGrade />
            <span> 15 reviews</span>
          </div>
          <span><GoClock /> 7 days</span>
        </div>
        <div className={style.cardPrice}>
          <span>Starting From</span>
          <span className={style.price}>$520</span>
        </div>
      </div>
    </div>
  )
}

export default Card
