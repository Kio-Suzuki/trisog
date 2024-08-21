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
          <div className={style.gridImage}>
            <img src={Card1} alt="card1" />
          </div>
          <div className={style.gridInfo}>
            <span className={style.gridDate}>July 13, 2023 Admin</span>
            <span className={style.gridText}>The impact of Covid-19 on travel & tourism industry</span>
          </div>    
        </div>
        <div className={style.gridItem}>
          <div className={style.gridImage}>
            <img src={Card1} alt="card1" />
          </div>
          <div className={style.gridInfo}>
            <span className={style.gridDate}>July 13, 2023 Admin</span>
            <span className={style.gridText}>The impact of Covid-19 on travel & tourism industry</span>
          </div>    
        </div>
        <div className={style.gridItem}>
          <div className={style.gridImage}>
            <img src={Card1} alt="card1" />
          </div>
          <div className={style.gridInfo}>
            <span className={style.gridDate}>July 13, 2023 Admin</span>
            <span className={style.gridText}>The impact of Covid-19 on travel & tourism industry</span>
          </div>    
        </div>
        <div className={style.gridItem}>
          <div className={style.gridImage}>
            <img src={Card1} alt="card1" />
          </div>
          <div className={style.gridInfo}>
            <span className={style.gridDate}>July 13, 2023 Admin</span>
            <span className={style.gridText}>The impact of Covid-19 on travel & tourism industry</span>
          </div>    
        </div>
      </div>
      
    </div>
  )
}

export default TravelGuide
