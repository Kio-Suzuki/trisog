import { useState } from 'react';
import style from './Sidebar.module.css';

function Sidebar() {

  const [min, setMin] = useState<number>(0.00);
  const [max, setMax] = useState<number>(1000.00);
  const [value, setValue] = useState<number>(0.00);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseFloat(e.target.value));
  }

  return (
    <div className={style.sidebarContainer}>
      <div className={style.sidebarSearch}>
        <h3>Search</h3>  
        <input type="text" placeholder='Type anything...'/>
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
          <div>
            <input type="checkbox" id="adventure"/>
            <label>Adventure</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Beaches</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Boat Tours</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>City Tours</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Food</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Hiking</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Honeymoon</label>
          </div>
          <div>
            <input type="checkbox"/>
            <label>Museum Tours</label>
          </div>
        </form>
      </div>
      <div className={style.sidebarDestinations}>
        <h3>Destinations</h3>
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

