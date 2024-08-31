import style from './Logos.module.css';

function Logos() {
  return (
    <div className={style.logosContainer}>
      <div className={style.logosContent}>
        <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Flogo2.svg?alt=media&token=86a138ac-57fb-48b8-84b4-24e0b5d3c0b5'} alt="Summer" />
        <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Flogo4.svg?alt=media&token=c44c7908-b5e8-4469-a348-da1d53d4fc4d'} alt="Summer" />
        <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Flogo3.svg?alt=media&token=b5857006-9b14-4b95-be69-3ffdbc23dac3'} alt="Summer" />
        <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Flogo5.svg?alt=media&token=cdb41ca6-9352-48a8-ba53-815a9b01bed7'} alt="Summer" />
        <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Flogo6.svg?alt=media&token=9d35701b-bde1-42ab-b1dc-9a18dfff1fd8'} alt="Summer" />
      </div>
    </div>
  )
}

export default Logos
