import style from './Login.module.css';
import Header2 from '../../components/Header2/Header2';
import Bannerlogin from '../../components/BannerLogin/BannerLogin';
import LoginForm from '../../components/LoginForm/LoginForm';
import { ToastContainer } from 'react-toastify';

function Login() {
  return (
    <div className={style.loginContainer}>
      <ToastContainer />
      <Header2 />
      <Bannerlogin /> 
      <LoginForm />  
    </div>
  )
}

export default Login
