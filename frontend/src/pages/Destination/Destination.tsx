import Banner2 from '../../components/Banner2/Banner2';
import Header from '../../components/Header/Header';
import DestinationGrid from '../../components/DestinationGrid/DestinationGrid';
import Footer from '../../components/Footer/Footer';
import style from './Destination.module.css';

function Destination() {
  return (
    <div className={style.destinatonContainer}>
      <Header />
      <Banner2 title1='Destination' title2='Home' title3='Destination'/>
      <DestinationGrid />
      <Footer />
    </div>
  )
}

export default Destination
