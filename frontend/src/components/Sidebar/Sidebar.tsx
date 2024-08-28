import { useState } from 'react';
import style from './Sidebar.module.css';
import { useEffect } from 'react';
import axios from 'axios';

export type TourType = {
  id: number;
  type: string;
}

function Sidebar({ tour }: { tour: TourType }) {

  const [min, setMin] = useState<number>(0.00);
  const [max, setMax] = useState<number>(1000.00);
  const [value, setValue] = useState<number>(0.00);
  const [toursTypes, setToursTypes] = useState<Tour[]>([]);
  const [tours, setTours] = useState<Tour[]>([]);
  const [search, setSearch] = useState<string>('');
  const [filteredTours, setFilteredTours] = useState<Tour[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(e.target.value));
  }

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:3333/tourstypes');
        setToursTypes(response.data);
        console.log(response.data); 
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
        const response = await axios.get('http://localhost:3333/tours');
        setTours(response.data);
      } catch (error) {
        console.error("Error fetching tours", error);
      }
    };
    fetchTours();
  }, []);
   

  return (
    <div className={style.sidebarContainer}>
      <div className={style.sidebarSearch}>
        <h3>Search</h3>  
        <input 
          type="text" 
          placeholder='Type anything...'
          onChange={(e) => setSearch(e.target.value)}
          value={search}
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
          className={style.priceRange}
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
            <div key={tour.id}>
              <input type="checkbox"/>
              <label>{tour.type}</label>
            </div>
          ))}
        </form>
      </div>
      <div className={style.sidebarDestinations}>
        <h3>Destinations</h3>
        <form className={style.checkCategories}>
          {tours.map((tour) => (
            <div key={tour.id}>
              <h4>{tour.continent}</h4>
              <input type="checkbox"/>
              <label>{tour.country}</label>
            </div>
          ))}
        </form>
      </div>
      <div className={style.sidebarReviews}>
        <h3>Reviews</h3>
        <form className={style.checkStar}>
          <div>
            <input type="checkbox" />
            <label>5 Stars</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>4 Stars & Up</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>3 Stars & Up</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>2 Stars & Up</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>1 Star & Up</label>
          </div>
        </form>
      </div>  
    </div>
  )
}

export default Sidebar

