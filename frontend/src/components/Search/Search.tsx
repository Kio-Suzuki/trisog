import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './Search.module.css';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function Search() {

  const [search, setSearch] = useState<string>('');
  const [types, setTypes] = useState<Tour[]>([]);
  const [typeSelected, setTypeSelected] = useState<string>('');
  const [date, setDate] = useState<Date | null>(null);
  const [guests, setGuests] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:3333/tourstypes');
        setTypes(response.data);
      } catch (error) {
        console.error("Error fetching tours", error);
      }
    };
    fetchTours();
  }, []);

  
  const formatDate = (date: Date | null): string => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = e.target.value;
    setTypeSelected(selectedType);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedDate = date ? formatDate(date) : '';
    const query = new URLSearchParams({
      search: search,
      type: typeSelected,
      date: formattedDate,
      guests: guests.toString()
    }).toString();
    navigate(`/tours?${query}`);
    setSearch('');
    setTypeSelected('');
    setDate(null);
    setGuests(0);
  };

  return (
    <div className={style.searchContainer}>
      <form className={style.formContainer} onSubmit={handleSubmit}>
        <div className={style.searchField}>
          <label>Destination</label>
          <input 
            type='text' 
            placeholder='Where to go?'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          >
          </input>
        </div>
        <div className={style.searchField}>
          <label>Type</label>
          <select 
            value={typeSelected} 
            onChange={handleSelectChange} 
            required 
            title="Type"
          >
            <option value="" disabled>Activity</option>
            {types.map((tour) => (
              <option key={tour.type}>{tour.type}</option>
            ))}
          </select>
        </div>
        <div className={style.searchField}>
          <label>When</label>
          <DatePicker 
            selected={date}
            onChange={(date: Date | null) => setDate(date)}
            placeholderText={'Date'} 
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
            required
          />
        </div>
        <div className={style.searchField}>
          <label>Guests</label>
          <input 
            type='number' 
            placeholder='0'
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            required
          >
          </input>
        </div>
        <div className={style.buttonContainer}>
          <button 
            className={style.searchButton}
            type='submit'
          >
            Search
          </button>
        </div>
      </form>
      
    </div>
  )
}

export default Search
