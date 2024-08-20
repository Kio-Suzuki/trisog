import style from './Footer.module.css';

function Footer() {
  return (
    <div className={style.footerContainer}>
      <div className={style.footerInfo}>
        <p>Need any help?</p>
        <p>Call Us: (888)1234 5678</p>
        <p>Love Street, Muscat, Oman</p>
        <p>example@trisog.com</p>
      </div>
      <div className={style.footerList}>
        <ul>
          <li>Company</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Travel Guides</li>
          <li>Data Policy</li>
        </ul>
        <ul>
          <li>Top Destination</li>
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
      <div className={style.footerNewsletter}>
        <p>Sing up Newsletter</p>
        <input type="text" placeholder='Enter email...'/>
        <button>Submit</button>
        <span>© Trisog All Right Reserved</span> 
      </div>
    </div>
  )
}

export default Footer
