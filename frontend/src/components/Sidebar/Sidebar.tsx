import { useState, useEffect, useRef } from 'react';
import style from './Sidebar.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export type TourType = {
  id: number;
  type: string;
}

function Sidebar() {

  const [min, setMin] = useState<number>(0.00);
  const [max, setMax] = useState<number>(1000.00);
  const [value, setValue] = useState<number>(0.00);
  const [toursTypes, setToursTypes] = useState<Tour[]>([]);
  const [tours, setTours] = useState<Tour[]>([]);
  const [search, setSearch] = useState<string>('');
  const [africaTours, setAfricaTours] = useState<Tour[]>([]);
  const [asiaTours, setAsiaTours] = useState<Tour[]>([]);
  const [europeTours, setEuropeTours] = useState<Tour[]>([]);
  const [northAmericaTours, setNorthAmericaTours] = useState<Tour[]>([]);
  const [oceaniaTours, setOceaniaTours] = useState<Tour[]>([]);
  const [southAmericaTours, setSouthAmericaTours] = useState<Tour[]>([]);
  const [filteredTours, setFilteredTours] = useState<Tour[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

  }, [])  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(e.target.value));
  }

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:3333/tourstypes');
        setToursTypes(response.data);
      } catch (error) {
        console.error("Error fetching tours", error);
      }
    };
    fetchTours();
  }, []);

  useEffect(() => {
    setFilteredTours(tours.filter((tour) => tour.title.includes(search)));
  }, [search]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:3333/toursgroup');
        setAfricaTours(response.data.africaTours);
        setAsiaTours(response.data.asiaTours);
        setEuropeTours(response.data.europeTours);
        setNorthAmericaTours(response.data.northAmericaTours);
        setOceaniaTours(response.data.oceaniaTours);
        setSouthAmericaTours(response.data.southAmericaTours);
      } catch (error) {
        console.error("Error fetching tours", error);
      }
    };
    fetchTours();
  }, []);


  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (search.trim()) {
        navigate(`/tours?search=${encodeURIComponent(search.trim())}`);
      }
    }
  };
  
  return (
    <div className={style.sidebarContainer}>
      <div className={style.sidebarSearch}>
        <h3>Search</h3>  
        <input 
          type="text" 
          placeholder='Type anything...'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className={style.sidebarFilter}>
        <h3>Filter By</h3> 
        <input 
          type="range" 
          min={min} 
          max={max}
          onChange={handleChange}
          value={value}
          step={10}
          className={style.inputRange}
        />
        <div className={style.priceField}>
         <span>$0.00</span>
        <span className={style.priceFilter}>${value.toFixed(2)}</span>
        </div>
        <button>Submit</button>
      </div>
      <div className={style.sidebarCategories}>
        <h3>Categories</h3>
        <form className={style.checkCategories}>
          {toursTypes.map((tour) => (
            <label key={tour.type} className={style.crwrapper}>
              <input type="checkbox" />
              <div className={style.crinput}></div>
              <span>{tour.type}</span>
            </label>
          ))}
        </form>
      </div>
      <div className={style.sidebarDestinations}>
        <h3>Destinations</h3>
        <form className={style.checkCategories}>
          <h4>Africa</h4>
          {africaTours.map((tour) => (
            <label key={tour.id} className={style.crwrapper}>
              <input type="checkbox" />
              <div className={style.crinput}></div>
              <span>{tour.country}</span>
            </label>
          ))}
          <h4>Asia</h4>
          {asiaTours.map((tour) => (
            <label key={tour.id} className={style.crwrapper}>
              <input type="checkbox" />
              <div className={style.crinput}></div>
              <span>{tour.country}</span>
            </label>
          ))}
          <h4>Europe</h4>
          {europeTours.map((tour) => (
            <label key={tour.id} className={style.crwrapper}>
              <input type="checkbox" />
              <div className={style.crinput}></div>
              <span>{tour.country}</span>
            </label>
          ))}
          <h4>North America</h4>
          {northAmericaTours.map((tour) => (
            <label key={tour.id} className={style.crwrapper}>
              <input type="checkbox" />
              <div className={style.crinput}></div>
              <span>{tour.country}</span>
            </label>
          ))}
          <h4>Oceania</h4>
          {oceaniaTours.map((tour) => (
            <label key={tour.id} className={style.crwrapper}>
              <input type="checkbox" />
              <div className={style.crinput}></div>
              <span>{tour.country}</span>
            </label>
          ))}
          <h4>South America</h4>
          {southAmericaTours.map((tour) => (
            <label key={tour.id} className={style.crwrapper}>
              <input type="checkbox" />
              <div className={style.crinput}></div>
              <span>{tour.country}</span>
            </label>
          ))}
        </form>
      </div>
      <div className={style.sidebarReviews}>
        <h3>Reviews</h3>
        <form className={style.checkStar}>
          <label className={style.crwrapper}>
            <input type="checkbox" />
            <div className={style.crinput}></div>
            <span>5 Stars</span>
          </label>
          <label className={style.crwrapper}>
            <input type="checkbox" />
            <div className={style.crinput}></div>
            <span>4 Stars & Up</span>
          </label>
          <label className={style.crwrapper}>
            <input type="checkbox" />
            <div className={style.crinput}></div>
            <span>3 Stars & Up</span>
          </label>
          <label className={style.crwrapper}>
            <input type="checkbox" />
            <div className={style.crinput}></div>
            <span>2 Stars & Up</span>
          </label>
          <label className={style.crwrapper}>
            <input type="checkbox" />
            <div className={style.crinput}></div>
            <span>1 Star & Up</span>
          </label>
        </form>
      </div>  
    </div>
  )
}

export default Sidebar

