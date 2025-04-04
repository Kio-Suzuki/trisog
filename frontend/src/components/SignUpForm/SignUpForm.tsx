import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TitleBar from '../TitleBar/TitleBar';
import style from './SignUpForm.module.css';

const SignUpForm = () => {
  const [firstname, setFirstname] = useState<string>('');
  const [lastname, setLastname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

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
          image:
            'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Fuser_default3.png?alt=media&token=88603352-3bb1-4292-8a8c-261ad65736e4',
        };

        console.log(userCredential);

        const saveUser = async () => {
          try {
            const response = await axios.post(
              'https://trisog-production.up.railway.app/user',
              userObj
            );
            console.log(response.data);
            toast.success('Signed up successfully', {
              position: 'top-center',
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
            setFirstname('');
            setLastname('');
            setEmail('');
            setPassword('');
          } catch (error) {
            console.error('Error saving user', error);
            toast.error('Failed to create user', {
              position: 'top-center',
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
          }
        };

        saveUser();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Error [${errorCode}]: ${errorMessage}`);
        switch (errorCode) {
          case 'auth/email-already-in-use':
            toast.error('Email already in use', {
              position: 'top-center',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
            break;
          case 'auth/weak-password':
            toast.error(
              'Weak password, Password should be at least 6 characters',
              {
                position: 'top-center',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
              }
            );
            break;
          default:
            toast.error('Failed to sign up', {
              position: 'top-center',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
            break;
        }
      });
  };

  return (
    <div className={style.signUpContainer}>
      <div className={style.loginInfo}>
        <img
          src={
            'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Flogo-login.svg?alt=media&token=8b4706da-84b1-4e61-bdd4-88b809d3eabf'
          }
          alt="logo"
        />
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
        <p>
          Alredy have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
