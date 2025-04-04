import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import TitleBar from '../TitleBar/TitleBar';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FacebookAuthProvider } from 'firebase/auth';
import { auth } from '../../services/firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './LoginForm.module.css';

function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success('Signed in successfully', {
          position: 'top-center',
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        setTimeout(() => navigate('/'), 2000);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        switch (errorCode) {
          case 'auth/invalid-credential':
            toast.error('Invalid email or password. Please try again', {
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

  const handleFacebook = async (e: React.FormEvent) => {
    e.preventDefault();
    const provider = new FacebookAuthProvider();
    provider.addScope('email');

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken;
      const [name, last_name] = user.displayName?.split(' ', 2) || [];
      const userPhoto = user.photoURL;
      const userObj = {
        id: user.uid,
        email: user.email,
        firstname: name || '',
        lastname: last_name || '',
        image: userPhoto || '',
        accessToken: accessToken || '',
      };
      try {
        const response = await axios.get(
          `https://trisog-production.up.railway.app/user/${user.uid}`
        );
        if (response.data) {
          toast.success('Signed in successfully', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          setTimeout(() => navigate('/'), 2000);
        } else {
          await axios.post(
            'https://trisog-production.up.railway.app/user',
            userObj
          );
          toast.success('Signed in successfully', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          setTimeout(() => navigate('/'), 2000);
        }
      } catch (error) {
        toast.error('Signed in, but failed to save user to database');
      }
    } catch (error) {
      toast.error('Failed to sign in');
    }
  };

  const handleGoogle = async (e: React.FormEvent) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const [name, last_name] = user.displayName!.split(' ', 2);
      const userPhoto = user.photoURL;
      const userObj = {
        id: user.uid,
        email: user.email,
        firstname: name || '',
        lastname: last_name || '',
        image: userPhoto || '',
      };
      try {
        const response = await axios.get(
          `https://trisog-production.up.railway.app/user/${user.uid}`
        );
        if (response.data) {
          toast.success('Signed in successfully', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          setTimeout(() => navigate('/'), 2000);
        } else {
          await axios.post(
            'https://trisog-production.up.railway.app/user',
            userObj
          );
          toast.success('Signed in successfully', {
            position: 'top-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
          setTimeout(() => navigate('/'), 2000);
        }
      } catch (error) {
        toast.error('Failed to check user in database');
      }
    } catch (error) {
      console.log(error);
      toast.error('Failed to sign in');
    }
  };

  return (
    <div className={style.loginContainer}>
      <div className={style.loginInfo}>
        <img
          src={
            'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Flogo-login.svg?alt=media&token=8b4706da-84b1-4e61-bdd4-88b809d3eabf'
          }
          alt="logo"
        />
        <TitleBar title1="Be part" title2="Sign In" />
      </div>
      <div className={style.loginForm}>
        <form onSubmit={handleSubmit}>
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
          <button onClick={handleSubmit}>Sign In</button>
        </form>
      </div>
      <div className={style.loginButtons}>
        <button onClick={handleFacebook} className={style.signButton}>
          <FaFacebook className={style.facebookIcon} />
          Facebook
        </button>
        <button onClick={handleGoogle} className={style.signButton}>
          <FcGoogle className={style.googleIcon} />
          Google
        </button>
      </div>
      <div className={style.signup}>
        <p>
          New to Trisog? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
