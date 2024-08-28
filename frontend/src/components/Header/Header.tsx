import style from './Header.module.css';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import logo1 from '../../assets/logo1.svg';
import { Link } from 'react-router-dom';	
import { NavLink } from 'react-router-dom';
import { signOut, getAuth } from 'firebase/auth';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Header() {
  const [userName, setUserName] = useState<string>('');
  const [userImage, setUserImage] = useState<string>('');
  const auth = getAuth();

  useEffect(() => {
    const user = auth.currentUser;
    console.log(user);
    if (user) {
      if (user.displayName === null) {
        (async function fetchUserData() {
          try {
            const response = await axios.get(`http://localhost:3333/user/${user.uid}`);
            if (response.data) {
              setUserName(response.data.firstname);
              setUserImage(response.data.image);
            }
          } catch (error) {
            console.log(error);
          }
        })();
      } else {
        setUserName(user.displayName);
        setUserImage(user.photoURL);
      }
    }
  }, [auth]);

  async function handleSignOut() {
    try {
      await signOut(auth);
      toast.info('You have been signed out', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setUserName('');
      setUserImage('');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={style.headerContainer}>
      <div className={style.header1}>
        <div className={style.headerInfo}>
          <p>(000)999-898-999 | info@trisog.com</p>
        </div>
        <div className={style.headerIcon}>
          <a href="https://br.linkedin.com/" target='blank'><FaLinkedinIn /></a>
          <a href="https://x.com/" target='blank'><FaTwitter /></a>
          <a href="https://www.google.com.br/?hl=pt-BR" target='blank'><FaGoogle /></a>
          <a href="https://br.pinterest.com/" target='blank'><FaPinterestP /></a>
          <span>| EUR </span>
        </div>
      </div>
      <div className={style.header2}>
        <div className={style.logo}>
          <Link to='/'><img src={logo1} alt="logo" /></Link> 
        </div>
        <div className={style.headerMenu}>
          <ul>
            <NavLink 
              to='/'
              className={({ isActive }) => isActive ? style.active : ''}
            >
              <li>Home</li>
            </NavLink>
            <li>About</li>
            <NavLink 
              to='/tours'
              className={({ isActive }) => isActive ? style.active : ''}
            >
              <li>Tours</li>
            </NavLink>
            <NavLink 
              to='/destination'
              className={({ isActive }) => isActive ? style.active : ''}
            >
              <li>Destination</li>
            </NavLink>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>    
        </div>
        <div className={style.user}>
          <CiSearch />
          {userName ? (
            <>
              <img 
                src={userImage} 
                alt="user" 
                className={style.userImage}
              />
              <p className={style.userName}>{userName}</p>
              <button onClick={handleSignOut}>Sign Out</button>
            </>
          ) : (
            <>
              <FiUser />
              <Link to='/login'><span className={style.login}>Login</span></Link>
              <span>/</span>
              <Link to='/signup'><span className={style.signup}>Signup</span></Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
