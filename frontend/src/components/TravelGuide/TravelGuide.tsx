import TitleBar from '../TitleBar/TitleBar';
import style from './TravelGuide.module.css';

function TravelGuide() {
  return (
    <div className={style.travelGuideContainer}>
      <div>
        <TitleBar title1="Updates" title2="Latest Travel Guide"/>
      </div>
      <div className={style.gridContainer}>
        <div className={style.gridItem}>
          <div className={style.gridImage}>
            <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Ftravel1.jpeg?alt=media&token=2912c278-62a3-4f33-b5a8-c74e62d91760'} alt="Tourist with map" />
          </div>
          <div className={style.gridInfo}>
            <span className={style.gridDate}>July 13, 2023 Admin</span>
            <span className={style.gridText}>The impact of Covid-19 on travel & tourism industry</span>
          </div>    
        </div>
        <div className={style.gridItem}>
          <div className={style.gridImage}>
            <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Ftravel2.jpeg?alt=media&token=40ce43e0-5a21-44cb-a423-66e772221a7e'} alt="Tourist watching" />
          </div>
          <div className={style.gridInfo}>
            <span className={style.gridDate}>July 13, 2023 Admin</span>
            <span className={style.gridText}>The impact of Covid-19 on travel & tourism industry</span>
          </div>    
        </div>
        <div className={style.gridItem}>
          <div className={style.gridImage}>
            <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Ftravel3.jpeg?alt=media&token=e225cc7d-2204-4965-9ce0-be064ba90324'} alt="Tourist in the free market" />
          </div>
          <div className={style.gridInfo}>
            <span className={style.gridDate}>July 13, 2023 Admin</span>
            <span className={style.gridText}>The impact of Covid-19 on travel & tourism industry</span>
          </div>    
        </div>
        <div className={style.gridItem}>
          <div className={style.gridImage}>
            <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Ftravel4.jpeg?alt=media&token=f97097fe-1f69-4ddc-bd8a-4fd750b065be'} alt="Tourist in the jungle" />
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
