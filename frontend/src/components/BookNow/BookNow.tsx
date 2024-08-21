import style from './BookNow.module.css';

function BookNow() {
  return (
    <div className={style.bookNowContainer}>
      <div className={style.price}>
        <h3>$104</h3>
        <p>/ per person</p>
      </div>   
      <div className={style.option}>
        <h4>Date</h4>
        <input type="date" />
        <h4>Time</h4>
        <select>         
          <option>Select </option>
          <option value="Time 1">Time 1</option>
          <option value="Time 2">Time 2</option>
          <option value="Time 3">Time 3</option>
          <option value="Time 4">Time 4</option>
          <option value="Time 5">Time 5</option>
          <option value="Time 6">Time 6</option>
          <option value="Time 7">Time 7</option>
      </select>
      </div> 
      <div className={style.ticket}>
        <h4>Ticket</h4>
        <div>
          <p>Adults (18+ years)</p>
        </div>
        <div>
          <p>Kids (12+ years)</p>
        </div>
        <div>
          <p>Children (3+ years)</p>
        </div>
      </div> 
      <div className={style.total}>
          <p>Total</p>
          <p className={style.value}>$104</p>
        </div>
        <div className={style.buttonContainer}>
          <button>Book now</button>
        </div> 
    </div>
  )
}

export default BookNow
