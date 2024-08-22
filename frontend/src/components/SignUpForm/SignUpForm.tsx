import style from './SignUpForm.module.css';
import TitleBar from '../TitleBar/TitleBar';
import logo from '../../assets/logo-login.svg';
import { Link } from 'react-router-dom';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebase';

function SignUpForm() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(userCredential);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  
  return (
    <div className={style.signUpContainer}>
      <div className={style.loginInfo}>
        <img src={logo} alt="logo" />
        <TitleBar title1="Be part" title2="Sign Up"/>
      </div>
      <div className={style.signUpForm}>
        <form onSubmit={handleSubmit}>
          <div className={style.formName}>
            <input type="text" placeholder='Enter your name'/>
            <input type="text" placeholder='Enter your last name'/>
          </div>
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
          <button onClick={handleSubmit}>Sign Up</button>
        </form>
      </div>
      
      <div className={style.signin}>
      <p>Alredy have an account? <Link to='/login'>Sign In</Link></p>
      </div>
    </div>
  )
}

export default SignUpForm
