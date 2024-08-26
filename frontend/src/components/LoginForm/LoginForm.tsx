import TitleBar from '../TitleBar/TitleBar';
import logo from '../../assets/logo-login.svg';
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FacebookAuthProvider } from "firebase/auth";
import { auth } from '../../services/firebase';
import style from './LoginForm.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const handleFacebook = async (e: React.FormEvent) => {
    e.preventDefault();
    const provider = new FacebookAuthProvider();
    provider.addScope('email');

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        const credential = FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential?.accessToken;

        console.log('User:', user);
        console.log('Credential:', credential);

        const [name, last_name] = user.displayName?.split(" ", 2) || [];
        const userPhoto = user.photoURL;

        const userObj = {
            id: user.uid,
            email: user.email,
            firstname: name || "",
            lastname: last_name || "",
            photoURL: userPhoto || "",
            accessToken: accessToken || "",
        };

        console.log('UserObj:', userObj);

        try {
            await axios.post("http://localhost:3333/user", userObj);
            toast.success("Signed in successfully");
        } catch (error) {
            console.log(error);
            toast.error("Signed in, but failed to save user to database");
        }
    } catch (error) {
        console.log(error);
        toast.error("Failed to sign in");
    }
}

  const handleGogle = async (e: React.FormEvent) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const [name, last_name] = user.displayName!.split(" ", 2);
      const userPhoto = user.photoURL;

      console.log('User:', user);

      const userObj = {
        id: user.uid,
        email: user.email,
        firstname: name || "",
        lastname: last_name || "",
      };

      console.log('UserObj:', userObj);

      try {
        await axios.post("http://localhost:3333/user", userObj);

        toast.success("Signed in successfully");
      } catch (error) {
        console.log(error);
        toast.error("Signed in, but failed to save user to database");
      }
    } catch (error) {
        console.log(error);
        toast.error("Failed to sign in");
      }
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

export default LoginForm;
