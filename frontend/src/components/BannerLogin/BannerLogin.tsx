import style from './BannerLogin.module.css';

function BannerLogin() {
  return (
    <div className={style.bannerContainer}>
      <div className={style.banner}>
        <img src={'https://firebasestorage.googleapis.com/v0/b/trisog-3db22.appspot.com/o/Assets%2Fbanner.png?alt=media&token=77063985-8a2d-4b85-88e1-7db1e3ee3e61'} alt="Hot Air Ballon" />
        
      </div>
    </div>
  )
}

export default BannerLogin
