import style from './BannerLogin.module.css';
import banner from '../../assets/banner.png';
import LoginForm from '../LoginForm/LoginForm';

function BannerLogin() {
  return (
    <div className={style.bannerContainer}>
      <div className={style.banner}>
        <img src={banner} alt="Hot Air Ballon" />
        <LoginForm />
      </div>
    </div>
  )
}

export default BannerLogin
