import { Link } from 'react-router-dom';
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
	import style from './Header2.module.css';

function Header2() {

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
          <Link to='/'><img src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Flogo1.svg?alt=media&token=4a737a07-53b5-4778-8f70-4046f267dadd'} alt="logo" /></Link>
        </div>
      </div>
    </div>
  )
}

export default Header2
