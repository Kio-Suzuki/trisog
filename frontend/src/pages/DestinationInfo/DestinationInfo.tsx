import { useParams } from 'react-router-dom';
import Banner2 from '../../components/Banner2/Banner2';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import style from './DestinationInfo.module.css';
import card1 from '../../assets/card1.jpg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

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
}

function DestinationInfo() {
  const { id } = useParams<{ id: string }>();
  const [destination, setDestination] = useState<Destination | null>(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBkYwyHygzVcR0PJdMSXj8gwZIPYqhCP0o"
  });

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await axios.get(`http://localhost:3333/destinations/${id}`);
        setDestination(response.data);  
      } catch (error) {
        console.error("Error fetching destination", error);
      }
    };

    if (id) {
      fetchDestination ();
    }

    window.scrollTo(0, 0);
  }, [id]);

  if (!destination) {
    return <div>Loading...</div>; 
  }

  return (
    <div className={style.destinationInfoContainer}>
      <Header />
      <Banner2 />
      <div className={style.container}>
        <img src={destination.img} alt="Destination" className={style.img1}/>
        <div className={style.mapContainer}> 
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={{
                  lat: destination.latitude,
                  lng: destination.longitude, 
                }}
                zoom={5}
              >
              </GoogleMap>
            ) : null}
        </div>
        <img src={card1} alt="card1" className={style.img3}/>
        <img src={destination.img} className={style.img4}/>
        <img src={destination.img} className={style.img5}/>
        <img src={destination.img} className={style.img6}/>
        <img src={destination.img} className={style.img7}/>
      </div>
      <div className={style.container2}>
        <h2>About</h2>
        <p>{destination.about}</p>
      </div>
      
      <div className={style.container3}>
        <div className={style.informationTitle}>
          <h2>Basic Information</h2>
        </div>
        <div className={style.informationData}>
          <div className={style.informationLabel}>
            <p>Country</p>
            <p>Language</p>
            <p>Currency</p>
            <p>Area</p>
            <p>Population</p>
            <p>Time Zone</p>
            <p>Time to Travel</p>
          </div>
          <div className={style.information}>
            <p>{destination.country}</p>
            <p>{destination.language}</p>
            <p>{destination.currency}</p>
            <p>{destination.area}</p>
            <p>{destination.population}</p>
            <p>{destination.timezone}</p>
            <p>{destination.timetravel}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DestinationInfo;
