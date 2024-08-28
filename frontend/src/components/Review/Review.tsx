import style from './Review.module.css';
import { IoStar } from "react-icons/io5";
import { format } from 'date-fns';

export type Review = {
  id: number;
  name: string,
  comment: string;
  overall: number;
  createdAt: string;
  user: {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    image: string;
    userReviewCount: number;
  };
  
};

const Review: FC<ReviewProps> = ({ name, comment, overall, user, createdAt, userReviewCount }: { name: string, comment: string, overall: number, user: string, createdAt: string, userReviewCount: number }) => {

  const dateFormatted = format(new Date(createdAt), 'MMMM d, yyyy');

  return (
    <div className={style.reviewContainer}>
      <div className={style.reviewImage}>
        <img src={name.toLowerCase() !== user.firstname.toLowerCase() ? 'https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png' : user.image} alt="" />
      </div>
      <div className={style.reviewData}>
        <span className={style.reviewDate}>{dateFormatted}</span>
        <h1 className={style.reviewUser}>
          {name.toLowerCase() !== user.firstname.toLowerCase() ? name : `${user.firstname} ${user.lastname}`}
        </h1>
        <div className={style.gradeContainer}>
          <div className={style.reviewGradeContainer}>
            <IoStar /><span>{overall}</span>
          </div>
          <div>{userReviewCount} reviews</div>
        </div>
        <p className={style.reviewText}>{comment}</p>
      </div>
    </div>
  );
}

export default Review;
