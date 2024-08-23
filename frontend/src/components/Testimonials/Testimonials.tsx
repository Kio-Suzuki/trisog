import TitleBar from '../TitleBar/TitleBar';
import style from './testimonials.module.css';
import aspas from '../../assets/aspas.svg';

import photographer from '../../assets/photographer.jpeg';

function Testimonials() {
  return (
    <div className={style.testimonialsContainer}>
      <div className={style.testimonialsContent}>
        <div className={style.containerImage}>
          <img className={style.image1} src={photographer} alt="photographer" />
          <img className={style.image2} src={photographer} alt="photographer" />
          <img className={style.image3} src={photographer} alt="photographer" />
        </div> 
        <div className={style.containerInfo}>
          <div className={style.titleContainer}>
            <TitleBar title1="Testimonials" title2="What Travelers Say"/>
          </div>
          <div className={style.textContainer}>
            <img src={aspas} alt="aspas" />
            <p className={style.text}>"The UI designs he crafted are top-notch, and the design sytem he integrated allows for straight forward fixes and bulk updates throughout almost every area of the app."</p>
            <p>-By Molie Rosa, Photographer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials





