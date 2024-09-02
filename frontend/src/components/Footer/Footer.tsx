import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { useForm } from "react-hook-form";
import style from './Footer.module.css';

function Footer() {

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className={style.footerContainer}>
      <div className={style.footer}>
        <div className={style.footerInfo}>
          <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Flogo-footer.svg?alt=media&token=afd3c9d2-56e4-47f6-ae34-369492b068da'} alt="logo" />
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
              <li>Dubai</li>
            </ul>
          </div>
          
        </div>
        <div className={style.footerNewsletter}>
          <p className={style.footerFont}>Sing up Newsletter</p>
          <form onSubmit={handleSubmit(onSubmit)} className={style.formFooter}>
            <input 
              type="email"
              {...register("email", { required: true , pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,}$/i })}
              placeholder='Enter email...'/>
            <button type="submit">Submit</button>
          </form>
          {errors!.email ? (<p className={style.error}>Please enter a valid email</p>) : <p>Success!</p>}
          <span className={style.footerEnd}>© 2023 Trisog All Right Reserved</span> 
        </div>
      </div>
    </div>
  )
}

export default Footer
