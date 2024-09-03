import { Link } from 'react-router-dom';
import { BsSuitcase } from "react-icons/bs";
import style from './CardCategory.module.css';

export type TourType = {
  id: number;
  type: string;
  minPrice: number;
  count: number;
  iconimg: string;
}

function CardCategory({ tour }: { tour: TourType }) {

  return (
    <Link to={`/tours?type=${tour.type}`}>
      <div className={style.cardCategorieContainer}>
        <div className={style.cardIcon}>
          <img src={tour.iconimg} />
          <div className={style.iconBackground}></div>
        </div>
        <div className={style.cardInfo}>
          <span className={style.title}>{tour.type}</span>
          <span className={style.tours}>{tour.count} Tours+</span>
          <div className={style.cardPrice}>
            <span className={style.priceText}>From</span> 
            <span className={style.priceNumber}>${tour.minPrice}</span>
          </div>
        </div>
      </div>
      </Link>  
  )
}

export default CardCategory
