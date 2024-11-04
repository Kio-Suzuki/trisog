import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';
import style from './Sidebar.module.css';

export type TourType = {
  id: number;
  type: string;
}

function Sidebar() {

  const [toursTypes, setToursTypes] = useState<Tour[]>([]);
  const [tours, setTours] = useState<Tour[]>([]);
  const [search, setSearch] = useState<string>('');
  const [price, setPrice] = useState<number>(0.00);
  const [min, setMin] = useState<number>(0.00);
  const [max, setMax] = useState<number>(3200.00);
  const [value, setValue] = useState<number>(0.00);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [filteredTours, setFilteredTours] = useState<Tour[]>([]);
  const navigate = useNavigate();
  const location = useLocation(); 
  const [continentMap, setContinentMap] = useState<Map<string, Set<string>>>(new Map());
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedStars, setSelectedStars] = useState<string[]>([]);
  const [toursDistinations, setToursDistinations] = useState<Tour[]>([]);

  const handleTypeChange = (type: string) => {
    setSelectedTypes(prev => 
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };
 
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
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:3333/toursgroup');
        const mapaContinentes = new Map<string, Set<string>>();
        response.data.continentTours.forEach((tour: { continent: string; country: string }) => {
          const { continent, country } = tour;
          if (!mapaContinentes.has(continent)) {
            mapaContinentes.set(continent, new Set<string>());
          }
          mapaContinentes.get(continent)?.add(country);
        });
        setContinentMap(mapaContinentes);
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
      setSearch('');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setPrice(value);
    updateRangeBackground(value);
  };

  const updateRangeBackground = (value: number) => {
    const min = 0;
    const max = 3200;
    const percentage = ((value - min) / (max - min)) * 100;

    const inputElement = document.querySelector<HTMLInputElement>('input[type="range"]');
    if (inputElement) {
      inputElement.style.background = `linear-gradient(to right, #FC5056 ${percentage}%, #ddd ${percentage}%)`;
    }
  };
  
  const handlePrice = (e: React.FormEvent) => {
    e.preventDefault();
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('price', price.toString());
    navigate(`/tours?${queryParams.toString()}`);
  };

  const handleType = (category: string) => {
    setSelectedTypes(prevState => {
      const updatedTypes = prevState.includes(category)
        ? prevState.filter(c => c !== category)
        : [...prevState, category];

      const searchParams = new URLSearchParams(location.search);
      
      if (updatedTypes.length === 0) {
        searchParams.delete('type');
      } else {
        searchParams.set('type', updatedTypes.join(','));
      }
      navigate(`/tours?${searchParams.toString()}`);

      return updatedTypes;
    });
  };

  useEffect(() => {
    const fetchFilteredTours = async () => {
      if (selectedTypes.length > 0) {
        try {
          const searchParams = new URLSearchParams(window.location.search);
          searchParams.set('type', selectedTypes.join(','));
          navigate(`/tours?${searchParams.toString()}`);
        } catch (error) {
          console.error("Error fetching filtered tours", error);
        }
      }
    };
  
    fetchFilteredTours();
  }, [selectedTypes]);

  const handleStarFilter = (star: string) => {
    setSelectedStars(prevState => {
      const updatedStars = prevState.includes(star)
        ? prevState.filter(s => s !== star)
        : [...prevState, star];
  
      const searchParams = new URLSearchParams(location.search);
      if (updatedStars.length === 0) {
        searchParams.delete('rating');
      } else {
        searchParams.set('rating', updatedStars.join(','));
      }
      navigate(`/tours?${searchParams.toString()}`);
      return updatedStars;
    });
  };

  useEffect(() => {
    const fetchFilteredTours = async () => {
      if (selectedStars.length > 0) {
        try {
          const query = new URLSearchParams({
            rating: selectedStars.join(',')
          }).toString();
          console.log(query);
          navigate(`/tours?${query}`);
        } catch (error) {
          console.error("Error fetching filtered tours", error);
        }
      }
    };
    fetchFilteredTours();
  }, [selectedStars]);

  const handleCountries = (e: React.ChangeEvent<HTMLInputElement>, country: string) => {
    setSelectedCountries(prevState => {
      const updatedCountries = e.target.checked
        ? [...prevState, country]
        : prevState.filter(c => c !== country);
      const searchParams = new URLSearchParams(location.search);
      if (updatedCountries.length === 0) {
        searchParams.delete('countries');
      } else {
        searchParams.set('countries', updatedCountries.join(','));
      }
      navigate(`/tours?${searchParams.toString()}`);
      return updatedCountries;
    });
  };

  useEffect(() => {
    const fetchFilteredTours = async () => {
      if (selectedCountries.length > 0) {
        try {
          const query = new URLSearchParams({
            countries: selectedCountries.join(',')
          }).toString();
          navigate(`/tours?${query}`);
        } catch (error) {
          console.error("Error fetching filtered tours", error);
        }
      }
    };
    fetchFilteredTours();
  }, [selectedCountries]);

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
          value={price}
          step={50}
          className={style.inputRange}
        />
        <div className={style.priceField}>
         <span>$0.00</span>
        <span className={style.priceFilter}>${price.toFixed(2)}</span>
        </div>
        <button onClick={handlePrice}>Submit</button>
      </div>

      <div className={style.sidebarCategories}>
        <h3>Categories</h3>
        <form className={style.checkCategories}>
          {toursTypes.map((tour) => (
            <label key={tour.type} className={style.crwrapper}>
              <input 
                type="checkbox" 
                checked={selectedTypes.includes(tour.type)}
                onChange={() => handleType(tour.type)}
              />
              <div className={style.crinput}></div>
              <span>{tour.type}</span>
            </label>
          ))}
        </form>
      </div>
      <div className={style.sidebarDestinations}>
      <h3>Destinations</h3>
      <form className={style.checkCategories}>
        {Array.from(continentMap.entries()).map(([continent, countries]) => (
          <div key={continent}>
            <h4>{continent}</h4>
            {Array.from(countries).map(country => (
              <label key={country} className={style.crwrapper}>
                <input 
                  type="checkbox"
                  value={country}
                  onChange={(e) => handleCountries(e, country)}
                  checked={selectedCountries.includes(country)}
                />
                <div className={style.crinput}></div>
                <span>{country}</span>
              </label>
            ))}
          </div>
        ))}
      </form>
      </div>
      <div className={style.sidebarReviews}>
        <h3>Reviews</h3>
        <form className={style.checkStar}>
          <label className={style.crwrapper}>
            <input 
              type="checkbox" 
              checked={selectedStars.includes('5')}
              onChange={() => handleStarFilter('5')}
            />
            <div className={style.crinput}></div>
            <span>5 Stars</span>
          </label>
          <label className={style.crwrapper}>
            <input 
              type="checkbox" 
              checked={selectedStars.includes('4')}
              onChange={() => handleStarFilter('4')}
            />
            <div className={style.crinput}></div>
            <span>4 Stars & Up</span>
          </label>
          <label className={style.crwrapper}>
            <input 
              type="checkbox" 
              checked={selectedStars.includes('3')}
              onChange={() => handleStarFilter('3')}
            />
            <div className={style.crinput}></div>
            <span>3 Stars & Up</span>
          </label>
          <label className={style.crwrapper}>
            <input 
              type="checkbox" 
              checked={selectedStars.includes('2')}
              onChange={() => handleStarFilter('2')}
            />
            <div className={style.crinput}></div>
            <span>2 Stars & Up</span>
          </label>
          <label className={style.crwrapper}>
            <input 
              type="checkbox" 
              checked={selectedStars.includes('1')}
              onChange={() => handleStarFilter('1')}
            />
            <div className={style.crinput}></div>
            <span>1 Star & Up</span>
          </label>
        </form>
      </div>  
    </div>
  )
}

export default Sidebar

