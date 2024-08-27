import style from './Review.module.css';
import photo from '../../assets/photo.jpg';
import { IoStar } from "react-icons/io5";
import { format } from 'date-fns';

export type Review = {
  id: number;
  comment: string;
  overall: number;
  createdAt: string;
  user: {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
  };
};

const Review: FC<ReviewProps> = ({ comment, overall, user, createdAt }) => {

  const dateFormatted = format(new Date(createdAt), 'MMMM d, yyyy');
  
  return (
    <div className={style.reviewContainer}>
      <div className={style.reviewImage}>
        <img src={photo} alt="" />
      </div>
      <div className={style.reviewData}>
        <span className={style.reviewDate}>{dateFormatted}</span>
        <h1 className={style.reviewUser}>
          {user.firstname} {user.lastname}
        </h1>
        <div className={style.reviewGradeContainer}>
          <IoStar /><span> {overall}</span>
        </div>
        <p className={style.reviewText}>{comment}</p>
      </div>
    </div>
  );
}

export default Review;
