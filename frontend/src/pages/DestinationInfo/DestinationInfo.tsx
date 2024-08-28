import { useParams } from 'react-router-dom';
import Banner2 from '../../components/Banner2/Banner2';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import style from './DestinationInfo.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { format, parseISO } from 'date-fns';
import { enGB } from 'date-fns/locale';

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
  capital: string;
}

function DestinationInfo() {
  const { id } = useParams<{ id: string }>();
  const [destination, setDestination] = useState<Destination | null>(null);
  const [weather, setWeather] = useState<any>(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBkYwyHygzVcR0PJdMSXj8gwZIPYqhCP0o"
  });

  const apiWeatherKey = "68165e7c26ea619effd50e6f47dccc90";

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

  // useEffect(() => {
  //   if (destination) {
  //     const getWeatherData = async (destination: Destination, apiWeatherKey: string) => {
  //       try {
  //         const apiWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${destination.capital}&units=metric&appid=${apiWeatherKey}`;
  //         const response = await axios.get(apiWeatherURL);
  //         const data = response.data;

  //         // Process weather data to get daily temperatures
  //         const dailyTemperatures = data.list.reduce((acc: any, forecast: any) => {
  //           const date = format(new Date(forecast.dt * 1000), 'eeee dd', { locale: enGB }); // Get day and date
  //           if (!acc[date]) {
  //             acc[date] = [];
  //           }
  //           acc[date].push(forecast.main.temp);
  //           return acc;
  //         }, {});

  //         // Calculate the average temperature for each day
  //         const dailyAvgTemperatures = Object.keys(dailyTemperatures).map(date => {
  //           const temps = dailyTemperatures[date];
  //           const avgTemp = temps.reduce((sum: number, temp: number) => sum + temp, 0) / temps.length;
  //           return { date, avgTemp };
  //         });

  //         // Limit to the next 5 days
  //         setWeather(dailyAvgTemperatures.slice(0, 5));
  //       } catch (error) {
  //         console.error("Error fetching weather data", error);
  //       }
  //     }
  //     getWeatherData(destination, apiWeatherKey);
  //   }
  // }, [destination]);

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
          <div className={style.mapTitle}>
            <h3>City Map</h3>
          </div>
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
        <div className={style.weatherContainer}>
          <h3>Weather Forecast</h3>
          {weather ? (
            <ul>
              {weather.map((entry: any) => (
                <li key={entry.date}>
                  {entry.date}: {entry.avgTemp.toFixed(1)}°C
                </li>
              ))}
            </ul>
          ) : (
            <p>Loading weather data...</p>
          )}
        </div>
        <img src={destination.img} className={style.img4}/>
        <img src={destination.img} className={style.img5}/>
        <img src={destination.img} className={style.img6}/>
        <img src={destination.img} className={style.img7}/>
      </div>
      <div className={style.containerAbout}>
        <h2>About {destination.country}</h2>
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
            <p>{new Intl.NumberFormat('en-US').format(destination.population)}</p>
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
