import style from './LoginForm.module.css';
import TitleBar from '../TitleBar/TitleBar';
import logo from '../../assets/logo-login.svg';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { auth } from '../../services/firebase';

function LoginForm() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  const handleFacebook = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Facebook');

    const provider = new FacebookAuthProvider();
    provider.addScope('email');
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        console.log('User:', user);
        console.log('Credential:', credential);
      })
      .catch((error) => {
        console.error('Error code:', error.code);
        console.error('Error message:', error.message);
        console.error('Email associated with error:', error.customData.email);
        const credential = FacebookAuthProvider.credentialFromError(error);
        console.error('Credential from error:', credential);
      });
  }

  const handleGogle = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Google'); 

    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        console.log(result);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }   

  return (
    <div className={style.loginContainer}>
      <div className={style.loginInfo}>
        <img src={logo} alt="logo" />
        <TitleBar title1="Be part" title2="Sign In"/>
      </div>
      <div className={style.loginForm}>
        <form onSubmit={handleSubmit}>
          <input 
            value={email} 
            type="email" 
            placeholder='Enter your email'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            value={password} 
            type="password" 
            placeholder='Enter your password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleSubmit}>Sign In</button>
        </form>
      </div>
      <div className={style.loginButtons}>
        <button 
          onClick={handleFacebook}
          className={style.signButton}
        >
          <FaFacebook className={style.facebookIcon}/>
          Facebook
        </button>
        <button 
          onClick={handleGogle}
          className={style.signButton}
        >
          <FcGoogle className={style.googleIcon}/>
          Google
        </button>
      </div>
      <div className={style.signup}>
        <p>New to Trisog? <Link to='/signup'>Sign Up</Link></p>
      </div>
    </div>
  )
}

export default LoginForm
