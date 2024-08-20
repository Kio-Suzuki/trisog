import TitleBar from '../TitleBar/TitleBar';
import style from './TravelGuide.module.css';
import Card1 from '../../assets/card1.jpg';

function TravelGuide() {
  return (
    <div className={style.travelGuideContainer}>
      <div>
        <TitleBar title1="Updates" title2="Latest Travel Guide"/>
      </div>
      <div className={style.gridContainer}>
        <div className={style.gridItem}>
          <img src={Card1} alt="" />
        </div>
        <div className={style.gridItem}>

        </div>
        <div className={style.gridItem}>

        </div>
        <div className={style.gridItem}>

        </div>
      </div>
      
    </div>
  )
}

export default TravelGuide
