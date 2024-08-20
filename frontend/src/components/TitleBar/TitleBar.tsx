import style from './TitleBar.module.css';

function TitleBar({title1, title2}: {title1: string, title2: string}) {

  return (
    <div className={style.titleBarContainer}>
      <div className={style.lineAround}>
        <h2 className={style.title1}>{title1}</h2>
      </div>
      <div>
        <h2 className={style.title2}>{title2}</h2>
      </div>
    </div>
  )
}

export default TitleBar
