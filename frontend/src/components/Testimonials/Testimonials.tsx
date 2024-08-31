import TitleBar from '../TitleBar/TitleBar';
import style from './testimonials.module.css';

function Testimonials() {
  return (
    <div className={style.testimonialsContainer}>
      <div className={style.testimonialsContent}>
        <div className={style.containerImage}>
          <img className={style.image1} src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Fphotographer.jpeg?alt=media&token=f7b089c1-dbad-4e7e-9c3c-6596c26984db'} alt="photographer" />
          <img className={style.image2} src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Fphotographer.jpeg?alt=media&token=f7b089c1-dbad-4e7e-9c3c-6596c26984db'} alt="photographer" />
          <img className={style.image3} src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Fphotographer.jpeg?alt=media&token=f7b089c1-dbad-4e7e-9c3c-6596c26984db'} alt="photographer" />
        </div> 
        <div className={style.containerInfo}>
          <div className={style.titleContainer}>
            <TitleBar title1="Testimonials" title2="What Travelers Say"/>
          </div>
          <div className={style.textContainer}>
            <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Faspas.svg?alt=media&token=31c70186-b0f1-4a28-84b7-e5ed4ea634c2'} alt="aspas" />
            <p className={style.text}>"The UI designs he crafted are top-notch, and the design sytem he integrated allows for straight forward fixes and bulk updates throughout almost every area of the app."</p>
            <p>-By Molie Rosa, Photographer</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials





