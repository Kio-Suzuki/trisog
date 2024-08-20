import style from './Banner.module.css';
import banner from '../../assets/banner.png';

function Banner() {
  return (
    <div className={style.bannerContainer}>
      <img src={banner} alt="Hot Air Ballon" />
    </div>
  )
}

export default Banner
