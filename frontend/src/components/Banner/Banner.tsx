import style from './Banner.module.css';
import Search from '../Search/Search';

function Banner() {
  return (
    <div className={style.bannerContainer}>
      <div className={style.banner}>
        <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Fbanner.png?alt=media&token=77063985-8a2d-4b85-88e1-7db1e3ee3e61'} alt="Hot Air Ballon" />
        <div className={style.bannerText}>
          <h2>Save 15% off in Worldwide</h2>
          <h1>Travel & Adventures</h1>
          <h3>Find awesome hotel, tour, car and activities in London</h3>
        </div>
      </div>
      <div className={style.SearchBarPosition}>
        <Search />
      </div>
    </div>
  )
}

export default Banner
