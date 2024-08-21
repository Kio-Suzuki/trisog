import style from './Logos.module.css';
import Logo2 from '../../assets/logo2.svg';
import Logo3 from '../../assets/logo3.svg';
import Logo4 from '../../assets/logo4.svg';
import Logo5 from '../../assets/logo5.svg';
import Logo6 from '../../assets/logo6.svg';

function Logos() {
  return (
    <div className={style.logosContainer}>
      <img src={Logo2} alt="Summer" />
      <img src={Logo3} alt="Summer" />
      <img src={Logo4} alt="Summer" />
      <img src={Logo5} alt="Summer" />
      <img src={Logo6} alt="Summer" />
    </div>
  )
}

export default Logos
