import style from './Destination.module.css';
import TitleBar from '../TitleBar/TitleBar';
import card1 from '../../assets/card1.jpg';

function Destination() {
  return (
    <div className={style.destinationContainer}>
      <div>
        <TitleBar title1="Destination" title2="Top Attractions Destinations"/>
      </div>
      <div className={style.destinationImages}>
        <div >
          <div className={style.imagesColumn1}>
            <img src={card1} alt="card1" />
            <img src={card1} alt="card1" />
            <img src={card1} alt="card1" />
          </div>
          <div className={style.imagesColumn2}>
            <img src={card1} alt="card1" />
            <img src={card1} alt="card1" />
          </div>
        </div>
        <div className={style.imageLarge}>
          <img src={card1} alt="card1" />
        </div> 
      </div>
    </div>
  )
}

export default Destination
