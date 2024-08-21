import style from './TourInfo.module.css';
import card1 from '../../assets/card1.jpg';
import { IoLocationOutline } from "react-icons/io5";
import AverageReview from '../AverageReview/AverageReview';
import Review from '../Review/Review';
import AddReview from '../AddReview/AddReview';

function TourInfo() {
  return (
    <div className={style.tourInfoContainer}>
      <div className={style.tourImage}>
        <img src={card1} alt="card1" />
      </div>
      <div className={style.tourInfo}>
      <div className={style.tourLocation}>
          <span><IoLocationOutline /></span><span>Budapest, Hungary</span>
        </div>
        <div className={style.tourTitle}>
          <h1>Wonders of the West Coast & Kimberly</h1>
        </div>
        <div className={style.tourData}>
          <div className={style.tourPrice}>
            <h6>From</h6>
          </div>
          <div className={style.tourDuration}>
            <h6>Duration</h6>
          </div>
          <div className={style.tourPeople}>
            <h6>Max People</h6>
          </div>
          <div className={style.tourAge}>
            <h6>Min Age</h6>
          </div>
          <div className={style.tourType}>
            <h6>Tour Type</h6>
          </div>
          <div className={style.tourReview}>
            <h6>Reviews</h6>
          </div>
        </div>
        <div className={style.tourOverview}>
          <h2>Overview</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam eligendi dolorem alias itaque aperiam natus quo vitae quia totam! Quaerat consequuntur iusto quas. Necessitatibus similique aspernatur dolorem animi commodi!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsam eligendi dolorem alias itaque aperiam natus quo vitae quia totam! Quaerat consequuntur iusto quas. Necessitatibus similique aspernatur dolorem animi commodi!</p>
        </div>
        <div className={style.tourMap}>
          Map
        </div>
        <div className={style.tourAverageReview}>
          <AverageReview />
        </div>
        <div className={style.tourReview}>
          <Review />
          <AddReview />
        </div>

      </div>
    </div>
  )
}

export default TourInfo
