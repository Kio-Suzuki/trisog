import style from './TitleBar.module.css';

function TitleBar({title1, title2}: {title1: string, title2: string}) {

  return (
    <div className={style.titleBarContainer}>
      <div className={style.titleContainer}>
        <div className={style.lineContainer}>
          <div className={style.line}></div>
          <div></div>
        </div>
        <div  className={style.title1Container}>
          <h2 >{title1}</h2>
        </div>
        <div className={style.lineContainer}>
          <div className={style.line}></div>
          <div></div>
        </div>
      </div>
      <div>
        <h2 className={style.title2}>{title2}</h2>
      </div>
    </div>
  )
}

export default TitleBar
