import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import style from './Search.module.css';

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
        const response = await axios.get(
          'http://trisog-production.up.railway.app/tourstypes'
        );
        setTypes(response.data);
      } catch (error) {
        console.error('Error fetching tours', error);
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
      guests: guests.toString(),
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
            type="text"
            placeholder="Where to go?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            required
          ></input>
          <span className={style.iconPosition1}>
            <img
              src={
                'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Fsearchbar1.svg?alt=media&token=485d1e70-73a8-4bb2-8011-9396d4cff831'
              }
              alt=""
            />{' '}
          </span>
        </div>
        <div className={style.searchField}>
          <label>Type</label>
          <select
            value={typeSelected}
            onChange={handleSelectChange}
            required
            title="Type"
          >
            <option value="" disabled>
              Activity
            </option>
            {types.map((tour) => (
              <option key={tour.type}>{tour.type}</option>
            ))}
          </select>
          <span className={style.iconPosition2}>
            <img
              src={
                'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Fsearchbar2.svg?alt=media&token=61618c97-6935-47e0-a1a8-b9da8a095031'
              }
              alt=""
            />{' '}
          </span>
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
        <span className={style.iconPosition3}>
          <img
            src={
              'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Fsearchbar3.svg?alt=media&token=3c467bc9-fb1a-4cef-93c1-20f525433c89'
            }
            alt=""
          />{' '}
        </span>
        <div className={style.searchField}>
          <label>Guests</label>
          <input
            type="number"
            placeholder="0"
            value={guests}
            onChange={(e) => setGuests(parseInt(e.target.value))}
            required
          ></input>
          <span className={style.iconPosition4}>
            <img
              src={
                'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Fsearchbar4.svg?alt=media&token=b3616424-bbdc-4db0-b186-81de63faa41e'
              }
              alt=""
            />{' '}
          </span>
        </div>
        <div className={style.buttonContainer}>
          <button className={style.searchButton} type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
