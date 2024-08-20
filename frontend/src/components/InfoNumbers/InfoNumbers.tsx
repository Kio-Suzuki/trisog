import style from './InfoNumbers.module.css';

function InfoNumbers() {
  return (
    <div className={style.InfoNumbersContainer}>
      <div>
        <span className={style.fontNumber}>120+ </span>
        <span className={style.fontText}>Destinations</span>
      </div>
       <div>
        <span className={style.fontNumber}>500+ </span>
        <span className={style.fontText}>Travel Packages</span>
       </div>
       <div>
        <span className={style.fontNumber}>12k+ </span>
        <span className={style.fontText}>Total Travelers</span>
       </div>
       <div>
        <span className={style.fontNumber}>7k+ </span>
        <span className={style.fontText}>Positive Reviews</span>
       </div>
    </div>
  )
}

export default InfoNumbers
