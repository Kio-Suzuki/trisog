import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './BookNow.module.css';

export type Tour = {
  id: number;
  location: string;
  country: string;
  title: string;
  review: number;
  days: number;
  price: number;
  image: string;
  maxPeople: number;
  minAge: number;
  type: string;
  overview: string;
  latitude: number;
  longitude: number;
}

type TourProps = {
  tour: Tour;
}

function BookNow({ tour }: TourProps) {

  const [countAdults, setCountAdults] = useState(0);
  const [countKids, setCountKids] = useState(0);
  const [countChildren, setCountChildren] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateTotalPrice = (adults, kids, children) => {
    const newTotal = (
      adults * parseFloat(tour.price.toString()) +
      kids * parseFloat(tour.price.toString()) +
      children * parseFloat(tour.price.toString())
    ).toFixed(2);
    setTotalPrice(newTotal);
  };

  const handleIncrementAdults = () => {
    setCountAdults((prevCountAdults) => {
      const newCount = prevCountAdults + 1;
      updateTotalPrice(newCount, countKids, countChildren);
      return newCount;
    });
  };

  const handleDecrementAdults = () => {
    setCountAdults((prevCountAdults) => {
      if (prevCountAdults > 0) {
        const newCount = prevCountAdults - 1;
        updateTotalPrice(newCount, countKids, countChildren);
        return newCount;
      } else {
        toast.warning('Número mínimo');
        return prevCountAdults;
      }
    });
  };

  const handleIncrementKids = () => {
    setCountKids((prevCountKids) => {
      const newCount = prevCountKids + 1;
      updateTotalPrice(countAdults, newCount, countChildren);
      return newCount;
    });
  };

  const handleDecrementKids = () => {
    setCountKids((prevCountKids) => {
      if (prevCountKids > 0) {
        const newCount = prevCountKids - 1;
        updateTotalPrice(countAdults, newCount, countChildren);
        return newCount;
      } else {
        toast.warning('Número mínimo');
        return prevCountKids;
      }
    });
  };

  const handleIncrementChildren = () => {
    setCountChildren((prevCountChildren) => {
      const newCount = prevCountChildren + 1;
      updateTotalPrice(countAdults, countKids, newCount);
      return newCount;
    });
  };

  const handleDecrementChildren = () => {
    setCountChildren((prevCountChildren) => {
      if (prevCountChildren > 0) {
        const newCount = prevCountChildren - 1;
        updateTotalPrice(countAdults, countKids, newCount);
        return newCount;
      } else {
        toast.warning('Número mínimo');
        return prevCountChildren;
      }
    });
  };
  
  

  return (
    <div className={style.bookNowContainer}>
      <div className={style.price}>
        <h3>${tour?.price}</h3>
        <p>/</p><p>per person</p>
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
        <div className={style.ticketContainer}>
          <p>Adults (18+ years)</p>
          <div className={style.counter}>
            <button onClick={handleDecrementAdults}>-</button>
            <p>{countAdults}</p>
            <button onClick={handleIncrementAdults}>+</button>
          </div>
        </div>
        <div className={style.ticketContainer}>
          <p>Kids (12+ years)</p>
          <div className={style.counter}>
            <button onClick={handleDecrementKids}>-</button>
            <p>{countKids}</p>
            <button onClick={handleIncrementKids}>+</button>
          </div>
        </div>
        <div className={style.ticketContainer}>
          <p>Children (3+ years)</p>
          <div className={style.counter}>
            
            <button onClick={handleDecrementChildren}>-</button>
            <p>{countChildren}</p>
            <button onClick={handleIncrementChildren}>+</button>
          </div>
        </div>
      </div> 
      <div className={style.total}>
          <p>Total</p>
          <p className={style.value}>${totalPrice}</p>
        </div>
        <div className={style.buttonContainer}>
          <button>Book now</button>
        </div> 
    </div>
  )
}

export default BookNow;
