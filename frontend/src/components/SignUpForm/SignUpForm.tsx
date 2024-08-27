import TitleBar from '../TitleBar/TitleBar';
import logo from '../../assets/logo-login.svg';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebase';
import style from './SignUpForm.module.css';

const SignUpForm = () => {
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [image, setImage] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userObj = {
          id: user.uid,
          email: user.email,
          firstname: firstname,
          lastname: lastname,
          image: 'https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png',
        };

        console.log(userCredential);

        const saveUser = async () => {
          try {
            const response = await axios.post('http://localhost:3333/user', userObj);
            console.log(response.data);
          } catch (error) {
            console.error("Error saving user", error);
          }
        };

        saveUser();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error [${errorCode}]: ${errorMessage}`);
      });
  };

  return (
    <div className={style.signUpContainer}>
      <div className={style.loginInfo}>
        <img src={logo} alt="logo" />
        <TitleBar title1="Be part" title2="Sign Up" />
      </div>
      <div className={style.signUpForm}>
        <form onSubmit={handleSubmit}>
          <div className={style.formName}>
            <input
              type="text"
              placeholder="Enter your name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter your last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <input
            value={email}
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            value={password}
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Sign Up</button>
        </form>
      </div>
	    <div className={style.signin}>
        <p>Alredy have an account? <Link to='/login'>Sign In</Link></p>
      </div>	
    </div>
  );
};

export default SignUpForm;
