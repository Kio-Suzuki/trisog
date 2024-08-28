import { useState, useEffect } from 'react';
import axios from 'axios';
import TitleBar from '../TitleBar/TitleBar';
import style from './Destination.module.css';
import { Link } from 'react-router-dom';

export type Destination = {
  id: number;
  img: string;
  latitude: number;
  longitude: number;
  about: string;
  country: string;
  language: string;
  currency: string;
  area: number;
  population: number;
  timezone: string;
  timetravel: string;
  travelers: number;
}
function Destination() {

  const [destinations, setDestinations] = useState<Destination[] | null>(null);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await axios.get('http://localhost:3333/destinations');
        const sixDestinations = response.data.slice(0, 6);
        setDestinations(sixDestinations); 
      } catch (error) {
        console.error("Error fetching tour", error);
      }
    };
    fetchTour();

    window.scrollTo(0, 0);
  }, []);

  if (!destinations) {
    return <div>Loading...</div>; 
  }

  return (
    <div className={style.destinationContainer}>
      <div>
        <TitleBar title1="Destination" title2="Top Attractions Destinations"/>
      </div>
      <div className={style.gridContainer}>
        {destinations.map((destination, index) => (
          <Link 
            key={destination.id} 
            to={`/destination/${destination.id}`}
            className={`${style.imageBase} ${style[`img${(index % 6) + 1}`]}`}
          >
            <img 
              src={destination.img}
              alt={`image-${index + 1}`} 
            />
            <div className={style.destinationCountry}>
              <p>{new Intl.NumberFormat('en-US').format(destination.travelers)} Travelers</p>
              <h2>{destination.country}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Destination


