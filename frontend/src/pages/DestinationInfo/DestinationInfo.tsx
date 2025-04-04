import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';
import Banner2 from '../../components/Banner2/Banner2';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PopularToursByCountry from '../../components/PopularToursByCountry/PopularToursByCountry';
import { FaArrowRight } from 'react-icons/fa6';
import style from './DestinationInfo.module.css';

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
};

function DestinationInfo() {
  const { id } = useParams<{ id: string }>();
  const [destination, setDestination] = useState<Destination | null>(null);
  const [weather, setWeather] = useState<any>(null);
  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
  });

  const apiWeatherKey = import.meta.env.VITE_WEATHER_API_KEY || '';

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        const response = await axios.get(
          `http://trisog-production.up.railway.app/destinations/${id}`
        );
        setDestination(response.data);
      } catch (error) {
        console.error('Error fetching destination', error);
      }
    };

    if (id) {
      fetchDestination();
    }

    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (destination) {
      const getWeatherData = async (
        destination: Destination,
        apiWeatherKey: string
      ) => {
        try {
          const apiWeatherURL = `https://api.openweathermap.org/data/2.5/forecast?q=${destination.capital}&units=metric&appid=${apiWeatherKey}`;
          const response = await axios.get(apiWeatherURL);
          const data = response.data;
          const dailyData = data.list.reduce((acc: any, forecast: any) => {
            const date = format(new Date(forecast.dt * 1000), 'eee dd, MMMM', {
              locale: enGB,
            });
            if (!acc[date]) {
              acc[date] = {
                temps: [],
                icons: [],
              };
            }
            acc[date].temps.push(forecast.main.temp);
            acc[date].icons.push(forecast.weather[0].icon);
            return acc;
          }, {});

          const dailyWeather = Object.keys(dailyData).map((date) => {
            const temps = dailyData[date].temps;
            const minTemp = Math.min(...temps);
            const maxTemp = Math.max(...temps);
            const icon = `http://openweathermap.org/img/wn/${dailyData[date].icons[0]}.png`;
            return { date, minTemp, maxTemp, icon };
          });

          setWeather(dailyWeather.slice(0, 5));
        } catch (error) {
          console.error('Error fetching weather data', error);
        }
      };
      getWeatherData(destination, apiWeatherKey);
    }
  }, [destination]);

  if (!destination) {
    return <div>Loading...</div>;
  }

  const handleSeeAll = () => {
    window.scrollTo(0, 0);
    navigate(`/tours?search=${encodeURIComponent(destination.country)}`);
  };

  return (
    <div className={style.destinationInfoContainer}>
      <Header />
      <Banner2
        title1={destination.country}
        title2="Home / Destination"
        title3={destination.country}
      />
      <div className={style.container}>
        <img src={destination.img} alt="Destination" className={style.img1} />
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
            ></GoogleMap>
          ) : null}
        </div>
        <div className={style.weatherContainer}>
          <div className={style.weatherTitle}>
            <h3>Weather Forecast</h3>
          </div>
          {weather ? (
            <ul>
              {weather.map((data: any) => (
                <div key={data.date} className={style.weatherForecast}>
                  <div className={style.date}>{data.date}:</div>
                  <div className={style.tempMin}>
                    {data.minTemp.toFixed(0)}°C
                  </div>
                  <div className={style.split}>|</div>
                  <div className={style.tempMax}>
                    {data.maxTemp.toFixed(0)}°C
                  </div>
                </div>
              ))}
            </ul>
          ) : (
            <p>Loading weather data...</p>
          )}
        </div>
        <img src={destination.img} className={style.img4} />
        <img src={destination.img} className={style.img5} />
        <img src={destination.img} className={style.img6} />
        <div className={style.img7}>
          <img src={destination.img} />
          <div className={style.imageText}>
            <p className={style.imageText1}>12+</p>
            <p className={style.imageText2}>More photo</p>
          </div>
        </div>
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
            <p>
              {new Intl.NumberFormat('en-US').format(destination.population)}
            </p>
            <p>{destination.timezone}</p>
            <p>{destination.timetravel}</p>
          </div>
        </div>
      </div>
      <div className={style.popularContainer}>
        <h1>Popular Tours in {destination.country}</h1>
        <button onClick={handleSeeAll}>
          See All{' '}
          <span className={style.buttonPadding}>
            <FaArrowRight />
          </span>
        </button>
      </div>
      <PopularToursByCountry />
      <Footer />
    </div>
  );
}

export default DestinationInfo;
