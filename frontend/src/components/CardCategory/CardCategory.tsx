import style from './CardCategory.module.css';
import { BsSuitcase } from "react-icons/bs";


function CardCategory() {
  return (
    <div className={style.cardCategorieContainer}>
      <div className={style.cardIcon}>
        <BsSuitcase />
        <div className={style.iconBackground}></div>
      </div>
      <div className={style.cardInfo}>
        <span className={style.title}>Adventure</span>
        <span className={style.tours}>10 Tours+</span>
        <div className={style.cardPrice}>
          <span className={style.priceText}>From</span> 
          <span className={style.priceNumber}>$250</span>
        </div>
      </div>
    </div>
  )
}

export default CardCategory
