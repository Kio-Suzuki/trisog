import style from './SignUp.module.css';
import Header2 from '../../components/Header2/Header2';
import Bannerlogin from '../../components/BannerLogin/BannerLogin';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import { ToastContainer } from 'react-toastify';

function SignUp() {
  return (
    <div>
      <Header2 />
      <Bannerlogin />
      <SignUpForm /> 
      <footer className={style.footerContainer}>© 2023 Trisog All Right Reserved</footer> 
      <ToastContainer />
    </div>
  )
}

export default SignUp
