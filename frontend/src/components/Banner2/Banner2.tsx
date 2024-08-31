import style from './Banner2.module.css';
import Search from '../Search/Search';

function Banner2({title1, title2, title3}: {title1: string, title2: string, title3: string}) {
  return (
    <div className={style.bannerContainer}>
      <div className={style.banner}>
        <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Fbanner.png?alt=media&token=77063985-8a2d-4b85-88e1-7db1e3ee3e61'} alt="Hot Air Ballon" />
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
