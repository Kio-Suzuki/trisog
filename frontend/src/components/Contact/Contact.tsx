import { GiCheckMark } from "react-icons/gi";
import style from './Contact.module.css';

function Contact() {
  return (
    <div className={style.contactContainer}>
      <div className={style.contactImage}>
        <img className={style.image1} src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2FExperiences4.jpeg?alt=media&token=1fff6df3-5066-4ec0-af71-f33fdaa8327d'} alt="contact" />
        <img className={style.image2} src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2FExperiences2.jpg?alt=media&token=e11b7137-0f85-4a33-9d3e-dd423a313fa4'} alt="contact" />
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
