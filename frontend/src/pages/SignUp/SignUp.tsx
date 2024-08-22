import style from './SignUp.module.css';
import Header2 from '../../components/Header2/Header2';
import Bannerlogin from '../../components/BannerLogin/BannerLogin';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

function SignUp() {
  return (
    <div>
      <Header2 />
      <Bannerlogin />
      <SignUpForm />  
    </div>
  )
}

export default SignUp
