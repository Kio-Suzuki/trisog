import style from './Login.module.css';
import Header2 from '../../components/Header2/Header2';
import Bannerlogin from '../../components/BannerLogin/BannerLogin';
import LoginForm from '../../components/LoginForm/LoginForm';
import { ToastContainer } from 'react-toastify';

function Login() {
  return (
    <div className={style.loginContainer}>
      <Header2 />
      <Bannerlogin /> 
      <LoginForm />  
      <ToastContainer />
      <footer className={style.footerContainer}>© 2023 Trisog All Right Reserved</footer>
    </div>
  )
}

export default Login
