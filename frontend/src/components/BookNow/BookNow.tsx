import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './BookNow.module.css';
import { set } from 'date-fns';

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
  startDate: string;
}

type TourProps = {
  tour: Tour;
}

function BookNow({ tour }: TourProps) {

  const [countAdults, setCountAdults] = useState<number>(0);
  const [countKids, setCountKids] = useState<number>(0);
  const [countChildren, setCountChildren] = useState<number>(0);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const updateTotalPrice = (adults: number, kids: number, children: number) => {
    const newTotal = (
      adults * parseFloat(tour.price.toString()) +
      kids * parseFloat(tour.price.toString()) +
      children * parseFloat(tour.price.toString())
    ).toFixed(2);
    setTotalPrice(parseFloat(newTotal));
  };

  const handleIncrementAdults = () => {
    setCountAdults((prevAdults) => {
      const newCount = prevAdults + 1;
      updateTotalPrice(newCount, countKids, countChildren);
      return newCount;
    });
  };

  const handleDecrementAdults = () => {
    setCountAdults((prevAdults) => {
      if (prevAdults > 0) {
        const newCount = prevAdults - 1;
        updateTotalPrice(newCount, countKids, countChildren);
        return newCount;
      } else {
        toast.warning('Invalid number of people. You cannot book for less than one person.', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return prevAdults;
      }
    });
  };

  const handleIncrementKids = () => {
    setCountKids((prevKids) => {
      const newCount = prevKids + 1;
      updateTotalPrice(countAdults, newCount, countChildren);
      return newCount;
    });
  };

  const handleDecrementKids = () => {
    setCountKids((prevKids) => {
      if (prevKids > 0) {
        const newCount = prevKids - 1;
        updateTotalPrice(countAdults, newCount, countChildren);
        return newCount;
      } else {
        toast.warning('Invalid number of people. You cannot book for less than one person.', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return prevKids;
      }
    });
  };

  const handleIncrementChildren = () => {
    setCountChildren((prevChildren) => {
      const newCount = prevChildren + 1;
      updateTotalPrice(countAdults, countKids, newCount);
      return newCount;
    });
  };

  const handleDecrementChildren = () => {
    setCountChildren((prevChildren) => {
      if (prevChildren > 0) {
        const newCount = prevChildren - 1;
        updateTotalPrice(countAdults, countKids, newCount);
        return newCount;
      } else {
        toast.warning('Invalid number of people. You cannot book for less than one person.', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return prevChildren;
      }
    });
  };
  
  const handleNotification = () => {
    toast.success('Your reservation is confirmed!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setCountAdults(0);
    setCountKids(0);
    setCountChildren(0);
    setTotalPrice(0);
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
          <option value="Time1">{tour?.days} days</option>
          <option value="Time2">{tour?.days + 1} days</option>
          <option value="Time3">{tour?.days + 2} days</option>
          <option value="Time4">{tour?.days + 3} days</option>
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
          <button onClick={handleNotification}>Book now</button>
        </div> 
    </div>
  )
}

export default BookNow;
