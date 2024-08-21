import BookNow from '../../components/BookNow/BookNow';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
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
      <Footer />
    </div>
  )
}

export default Demo
