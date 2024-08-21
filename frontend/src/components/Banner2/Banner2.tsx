import style from './Banner2.module.css';
import banner from '../../assets/banner.png';
import Search from '../Search/Search';

function Banner2() {
  return (
    <div className={style.bannerContainer}>
      <div className={style.banner}>
        <img src={banner} alt="Hot Air Ballon" />
        <div className={style.bannerText}>
          <h1>Tour Package</h1>
          <h3>Home / Tour Package</h3>
        </div>
      </div>
      <div className={style.SearchBarPosition}>
        <Search />
      </div>
    </div>
  )
}

export default Banner2
