import { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';
import { signOut, getAuth } from 'firebase/auth';
import axios from 'axios';
import { FaTwitter, FaLinkedinIn, FaGoogle, FaPinterestP } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { toast } from 'react-toastify';

import style from './Header.module.css';

function Header() {
  const [userName, setUserName] = useState<string>('');
  const [userImage, setUserImage] = useState<string>('');
  const [showInput, setShowInput] = useState<boolean>(false);
  const [search, setSearch] = useState<string>('');
  const auth = getAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      if (user.displayName === null) {
        (async function fetchUserData() {
          try {
            const response = await axios.get(`http://localhost:3333/user/${user.uid}`);
            if (response.data) {
              console.log(response.data);
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (search.trim()) {
        navigate(`/tours?search=${encodeURIComponent(search.trim())}`);
      }
      setSearch('');
    }
    
  };

  const handleSearch = () => {
    setShowInput(!showInput);
  };

  return (
    <div className={style.headerContainer}>
      <div className={style.header1}>
        <div className={style.headerInfo}>
          <p>(000)999-898-999 | info@trisog.com</p>
        </div>
        <div className={style.headerIcon}>
          <a href="https://br.linkedin.com/" target='_blank' rel='noopener noreferrer'><FaLinkedinIn /></a>
          <a href="https://x.com/" target='_blank' rel='noopener noreferrer'><FaTwitter /></a>
          <a href="https://www.google.com.br/?hl=pt-BR" target='_blank' rel='noopener noreferrer'><FaGoogle /></a>
          <a href="https://br.pinterest.com/" target='_blank' rel='noopener noreferrer'><FaPinterestP /></a>
          <select name="" id="" className={style.selectContainer}>
            <option value="eur">EUR</option>
            <option value="usd">USD</option>
            <option value="gpb">GPB</option>
          </select>
        </div>
      </div>
      <div className={style.header2}>
        <div className={style.logo}>
          <Link to='/'><img src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Flogo1.svg?alt=media&token=4a737a07-53b5-4778-8f70-4046f267dadd'} alt="logo" /></Link> 
        </div>
        <div className={style.headerMenu}>
          <ul>
            <NavLink 
              to='/' 
              className={({ isActive }) => (isActive ? style.active : '')}
            >
              <li>Home</li>
            </NavLink>
            <li>About</li>
            <NavLink 
              to='/tours' 
              className={({ isActive }) => (isActive ? style.active : '')}
            >
              <li>Tours</li>
            </NavLink>
            <NavLink 
              to='/destination' 
              className={({ isActive }) => (isActive ? style.active : '')}
            >
              <li>Destination</li>
            </NavLink>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>    
        </div>
        <div className={style.user}>
          <div className={style.searchContainer}>
            <CiSearch className={style.searchIcon} onClick={handleSearch} />
            <input
              type="text"
              className={`${style.searchInput} ${showInput ? style.show : ''}`}
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          {userName ? (
            <>
              <img src={userImage} alt="user" className={style.userImage} />
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
  );
}

export default Header;
