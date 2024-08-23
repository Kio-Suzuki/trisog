import style from './Banner2.module.css';
import banner from '../../assets/banner.png';
import Search from '../Search/Search';

function Banner2({title1, title2, title3}: {title1: string, title2: string, title3: string}) {
  return (
    <div className={style.bannerContainer}>
      <div className={style.banner}>
        <img src={banner} alt="Hot Air Ballon" />
        <div className={style.bannerText}>
          <h1>{title1}</h1>
          <h3>{title2} / <span className={style.titleColor}>{title3}</span></h3>
        </div>
      </div>
      <div className={style.SearchBarPosition}>
        <Search />
      </div>
    </div>
  )
}

export default Banner2
