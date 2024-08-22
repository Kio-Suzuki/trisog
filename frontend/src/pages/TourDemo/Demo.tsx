import BookNow from '../../components/BookNow/BookNow';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import PopularTours from '../../components/PopularTours/PopularTours';
import TourInfo from '../../components/TourInfo/TourInfo';
import style from './Demo.module.css';

function Demo() {
  return (
    <div className={style.demoContainer}>
      <Header />
      <div className={style.demoComponents}>
        <TourInfo />
        <BookNow />
      </div>
      <h2>You may also like...</h2>
      <PopularTours />
      <Footer />
    </div>
  )
}

export default Demo
