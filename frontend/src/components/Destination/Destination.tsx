import style from './Destination.module.css';
import TitleBar from '../TitleBar/TitleBar';
import card1 from '../../assets/card1.jpg';

function Destination() {
  return (
    <div className={style.destinationContainer}>
      <div>
        <TitleBar title1="Destination" title2="Top Attractions Destinations"/>
      </div>
      <div className={style.gridContainer}>
        <img src={card1} alt="card1" className={style.img1}/>
        <img src={card1} alt="card1" className={style.img2}/>
        <img src={card1} alt="card1" className={style.img3}/>
        <img src={card1} alt="card1" className={style.img4}/>
        <img src={card1} alt="card1" className={style.img5}/>
        <img src={card1} alt="card1" className={style.img6}/>
      </div>
    </div>
  )
}

export default Destination
