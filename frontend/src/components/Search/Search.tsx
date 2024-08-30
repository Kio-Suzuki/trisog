import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Search.module.css';

function Search() {

  const [destination, setDestination] = useState<string>('');
  const [types, setTypes] = useState<Tour[]>([]);
  const [typeSelected, setTypeSelected] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [guests, setGuests] = useState<number>(0);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:3333/tourstypes');
        setTypes(response.data);
        console.log(types);
      } catch (error) {
        console.error("Error fetching tours", error);
      }
    };
    fetchTours();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search submitted');
    console.log(destination, typeSelected, date, guests);
  }

  return (
    <div className={style.searchContainer}>
      <div className={style.searchField}>
        <label>Destination</label>
        <input 
          type='text' 
          placeholder='Where to go?'
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
        </input>
      </div>
      <div className={style.searchField}>
        <label>Type</label>
        <select value={typeSelected} onChange={(e) => setTypeSelected(e.target.value)}>
          {types.map((tour) => (
            <option key={tour.type}>{tour.type}</option>
          ))}
        </select>
      </div>
      <div className={style.searchField}>
        <label>When</label>
        <input 
          type='date' 
          placeholder='Date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
        >
        </input>
      </div>
      <div className={style.searchField}>
        <label>Guests</label>
        <input 
          type='number' 
          placeholder='0'
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
        >
        </input>
      </div>
      <div className={style.buttonContainer}>
        <button 
          className={style.searchButton}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default Search
