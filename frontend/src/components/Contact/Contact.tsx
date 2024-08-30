import style from './Contact.module.css';
import { GiCheckMark } from "react-icons/gi";
import Experience1 from '../../assets/Experiences1.jpg';
import Experience2 from '../../assets/Experiences2.jpg';

function Contact() {
  return (
    <div className={style.contactContainer}>
      <div className={style.contactImage}>
        <img className={style.image1} src={Experience1} alt="contact" />
        <img className={style.image2} src={Experience2} alt="contact" />
      </div>

      <div className={style.contactInfo}>
        <h1 className={style.title1}>Why Choose Us</h1>
        <h2 className={style.title2}>Our Experiences Meet High Quality Standards</h2>
        <p className={style.text}>Holisticly optimize proactive strategic theme areas rather than effective manufactured products create.</p>
        <ul className={style.list}>
          <li><GiCheckMark /> <span className={style.listColor}>Travel Plan</span></li>
          <li><GiCheckMark /> <span className={style.listColor}>Cheap Rates</span></li>
          <li><GiCheckMark /> <span className={style.listColor}>Hand-picked Tour</span></li>
          <li><GiCheckMark /> <span className={style.listColor}>Private Guide</span></li>
        </ul>
        <button className={style.contactButton}>Contact Us</button>
      </div>
      
    </div>
    
  )
}

export default Contact
