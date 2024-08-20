import styles from './ReviewGrade.module.css';
import { IoStarOutline } from "react-icons/io5";
import { IoStar } from "react-icons/io5";

function ReviewGrade() {
  return (
    <div className={styles.reviewGradeContainer}>
      <IoStar /><span> 4.8</span>
    </div>
  )
}

export default ReviewGrade
