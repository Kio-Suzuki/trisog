import style from './Header.module.css';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { GiAirplaneDeparture } from "react-icons/gi";
import { CiSearch } from "react-icons/ci";
import { FiUser } from "react-icons/fi";

function Header() {

  return (
    <div className={style.headerContainer}>
      <div className={style.header1}>
        <div className={style.headerInfo}>
          <p>(000)999-898-999 | info@trisog.com</p>
        </div>
        <div className={style.headerIcon}>
          <FaTwitter />
          <FaLinkedinIn />
          <FaGoogle />
          <FaPinterestP />
          <span>| EUR </span>
        </div>
      </div>
      <div className={style.header2}>
        <div className={style.logo}>
          <GiAirplaneDeparture />
          <span className={style.logoTitle}>Trisog</span>
        </div>
        <div className={style.headerMenu}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Tours</li>
            <li>Destination</li>
            <li>Blog</li>
            <li>Pages</li>
            <li>Contact</li>
          </ul>    
        </div>
        <div className={style.user}>
          <CiSearch />
          <FiUser />
          <span>Login / Signup</span>
        </div>
      </div>
    </div>
  )
}

export default Header
