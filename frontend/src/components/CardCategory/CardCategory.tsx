import style from './CardCategory.module.css';
import { BsSuitcase } from "react-icons/bs";

export type TourType = {
  id: number;
  type: string;
  count: number;
}

function CardCategory({ tour }: { tour: TourType }) {

  return (
    <div className={style.cardCategorieContainer}>
      <div className={style.cardIcon}>
        <BsSuitcase />
        <div className={style.iconBackground}></div>
      </div>
      <div className={style.cardInfo}>
        <span className={style.title}>{tour.type}</span>
        <span className={style.tours}>{tour.count} Tours+</span>
        <div className={style.cardPrice}>
          <span className={style.priceText}>From</span> 
          <span className={style.priceNumber}>$250</span>
        </div>
      </div>
    </div>
  )
}

export default CardCategory
