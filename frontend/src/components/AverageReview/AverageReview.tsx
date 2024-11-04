import { IoStar } from "react-icons/io5";
import style from './AverageReview.module.css';

export type AverageReviewProps = {
  overallAverage: number;
  overallService: number;
  overallLocation: number;
  overallAmenities: number;
  overallPrices: number;
  overallFood: number;
  overallRooms: number;
}

function AverageReview({ overallAverage, overallService, overallLocation, overallAmenities, overallPrices, overallFood, overallRooms } : AverageReviewProps ) {

  return (
    <div className={style.averageReviewContainer}>
      <div className={style.score}>
        <h1>{overallAverage}</h1>
        {overallAverage == 0 ? (
            <p>
              <IoStar /> No Reviews
            </p>
          ): overallAverage < 1.9 ? (
            <p>
              <IoStar /> Poor
            </p>
          ) : overallAverage < 2.9 ? (
            <p>
              <IoStar /> Fair
            </p>
          ) : overallAverage < 3.9 ? (
            <p>
              <IoStar /> Good
            </p>
          ) : overallAverage < 4.9 ? (
            <p>
              <IoStar /> Very Good
            </p>
          ) : (
            <p>
              <IoStar /> Excellent
            </p>
          )}
      </div> 
      <div className={style.details}>
        <div className={style.details1}>

          <h3>Services</h3>
          <div className={style.chartContainer}>
            <div className={style.serviceChart}>
              <div 
                className={style.serviceChartColor}
                style={{ width: `${overallService * 3}vw` }}></div>
            </div>
            <p>{overallService}</p>
          </div>
          <h3>Locations</h3>
          <div className={style.chartContainer}>
            <div className={style.serviceChart}>
              <div 
                className={style.locationsChartColor}
                style={{ width: `${overallLocation * 3}vw` }}></div>
            </div>
            <p>{overallLocation}</p>
          </div>
          <h3>Amenities</h3>
          <div className={style.chartContainer}>
            <div className={style.serviceChart}>
              <div 
                className={style.amenitiesChartColor}
                style={{ width: `${overallAmenities * 3}vw` }}></div>
            </div>
            <p>{overallAmenities}</p>
          </div>
        </div>
        <div className={style.details2}>
          <h3>Prices</h3>
          <div className={style.chartContainer}>
            <div className={style.serviceChart}>
              <div 
                className={style.priceChartColor}
                style={{ width: `${overallPrices * 3}vw` }}></div>
            </div>
            <p>{overallPrices}</p>
          </div>
          <h3>Food</h3>
          <div className={style.chartContainer}>
            <div className={style.serviceChart}>
              <div 
                className={style.foodChartColor}
                style={{ width: `${overallFood * 3}vw` }}></div>
            </div>
            <p>{overallFood}</p>
          </div>
          <h3>Rooms</h3>
          <div className={style.chartContainer}>
            <div className={style.serviceChart}>
              <div 
                className={style.roomsChartColor}
                style={{ width: `${overallRooms * 3}vw` }}></div>
            </div>
            <p>{overallRooms}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AverageReview
