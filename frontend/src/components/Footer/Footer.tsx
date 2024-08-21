import style from './Footer.module.css';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.footer}>
        <div className={style.footerInfo}>
          <p className={style.footerFont}>Need any help?</p>
          <p className={style.footerFontStyle}>Call Us: <span className={style.footerFontColor}>(888)1234 5678</span></p>
          <p>Love Street, Muscat, Oman</p>
          <p>example@trisog.com</p>
          <div className={style.footerIcon}>
            <FaFacebookSquare />
            <FaTwitter />
            <FaLinkedinIn />
          </div>
        </div>
        <div className={style.footerList}>
          <div>
            <span className={style.footerFont}>Company</span>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Travel Guides</li>
              <li>Data Policy</li>
            </ul>
          </div>
          <div className={style.footerList2}>
            <span className={style.footerFont}>Top Destination</span>
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
