import style from './Tours.module.css';
import Header from '../../components/Header/Header';
import Banner2 from '../../components/Banner2/Banner2';
import Sidebar from '../../components/Sidebar/Sidebar';
import Footer from '../../components/Footer/Footer';
import SortBar from '../../components/SortBar/SortBar';
import CardGrid from '../../components/CardGrid/CardGrid';

function Tour() {
  return (
    <div className={style.tourContainer}>
      <Header />
      <Banner2 title1='Tour Package' title2='Home' title3='Tour Package'/>
      <div className={style.tourContent}>
        <Sidebar />
        <div className={style.toursCards}>
          <div className={style.sortBar}>
            <SortBar />
          </div>
          <div className={style.cards}>
            <CardGrid />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Tour
