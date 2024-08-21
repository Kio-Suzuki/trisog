import ReviewGrade from '../ReviewGrade/ReviewGrade';
import style from './Review.module.css';
import photo from '../../assets/photo.jpg';

function Review() {
  return (
    <div className={style.reviewContainer}>
      <div className={style.reviewImage}>
        <img src={photo} alt="" />
      </div>
      <div className={style.reviewData}>
        <span className={style.reviewDate}>March 20, 2022</span>
        <h1 className={style.reviewUser}>Sindy Simmons</h1> 
        <span><ReviewGrade /></span>	
        <p className={style.reviewText}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit ut iure provident, nihil odio ipsam earum explicabo porro laborum, saepe possimus obcaecati. Odio sed ipsam molestias maiores nemo numquam? Voluptate?</p>
      </div>
    </div>
  )
}

export default Review
