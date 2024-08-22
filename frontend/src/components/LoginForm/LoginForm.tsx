import style from './LoginForm.module.css';
import TitleBar from '../TitleBar/TitleBar';
import logo from '../../assets/logo1.svg';

function LoginForm() {
  return (
    <div className={style.loginContainer}>
      <div className={style.loginInfo}>
        <img src={logo} alt="logo" />
        <TitleBar title1="Be part" title2="Sign In"/>
      </div>
      <div className={style.loginForm}>
        <form>
          <input type="email" placeholder='Enter your email'/>
          <input type="password" placeholder='Enter your password'/>
          <button>Sign In</button>
        </form>
      </div>
      <span>New to Trisog? Sign Up</span>
    </div>
  )
}

export default LoginForm
