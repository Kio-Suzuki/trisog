import style from './Login.module.css';
import Header2 from '../../components/Header2/Header2';
import Bannerlogin from '../../components/BannerLogin/BannerLogin';

function Login() {
  return (
    <div className={style.loginContainer}>
      <Header2 />
      <Bannerlogin />   
    </div>
  )
}

export default Login
