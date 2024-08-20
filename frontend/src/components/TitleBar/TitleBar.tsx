import style from './TitleBar.module.css';

function TitleBar() {

  return (
    <div className={style.titleBarContainer}>
      <div className={style.lineAround}>
        <h2 className={style.title1}>Tours</h2>
      </div>
      <div>
        <h2 className={style.title2}>Most Popular Tours</h2>
      </div>
    </div>
  )
}

export default TitleBar
