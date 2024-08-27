import style from './AverageReview.module.css';
import { IoStar } from "react-icons/io5";

function AverageReview({ average }: { average: number }) {

  return (
    <div className={style.averageReviewContainer}>
      <div className={style.score}>
        <h1>{average}</h1>
        <p><IoStar /> Excelent</p>
      </div> 
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default AverageReview
