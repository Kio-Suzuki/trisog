import style from './Footer.module.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import logo from '../../assets/logo-footer.svg';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.footer}>
        <div className={style.footerInfo}>
          <img src={logo} alt="logo" />
          <p className={style.footerFont}>Need any help?</p>
          <p className={style.footerFontStyle}>Call Us: <span className={style.footerFontColor}>(888)1234 5678</span></p>
          <p className={style.footerFontMargin}>Love Street, Muscat, Oman</p>
          <p className={style.footerFontMargin}>example@trisog.com</p>
          <div className={style.footerIcon}>
            <a href="https://facebook.com" target='blank'><FaFacebookSquare /></a>
            <a href="https://x.com/" target='blank'><FaTwitter /></a>
            <a href="https://br.linkedin.com/" target='blank'><FaLinkedinIn /></a>
          </div>
        </div>
        <div className={style.footerList}>
          <div>
            <p className={style.footerFont}>Company</p>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Travel Guides</li>
              <li>Data Policy</li>
            </ul>
          </div>
          <div className={style.footerList2}>
            <p className={style.footerFont}>Top Destination</p>
            <ul className={style.list}>
              <li>Las Vegas</li>
              <li>New York City</li>
              <li>San Francisco</li>
              <li>Hawaii</li>
              <li>Tokyo</li>
              <li>Sydney</li>
              <li>Melbourne</li>
              <li>Bubai</li>
            </ul>
          </div>
          
        </div>
        <div className={style.footerNewsletter}>
          <p className={style.footerFont}>Sing up Newsletter</p>
          <input type="text" placeholder='Enter email...'/>
          <button>Submit</button>
          <span className={style.footerEnd}>© 2023 Trisog All Right Reserved</span> 
        </div>
      </div>
    </div>
  )
}

export default Footer
