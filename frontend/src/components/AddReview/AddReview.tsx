import style from './AddReview.module.css';

function AddReview() {
  return (
    <div className={style.addReviewContainer}>
      <h1>Add a review</h1>
      <form>
        <div className={style.formInfo}>
          <input type="text" placeholder='Your name' />
          <input type="email" placeholder='Email address' />
        </div>
        <div className={style.formText}>
          <textarea placeholder='Write your comment'></textarea>
        </div>
        <div className={style.formButton}>
          <button type="submit">Submit review</button>
        </div>
      </form>
    </div>
  )
}

export default AddReview
