import style from './home.module.css';
import Header from '../../components/Header/Header';
import Banner from '../../components/Banner/Banner';
import PopularTours from '../../components/PopularTours/PopularTours';
import InfoNumbers from '../../components/InfoNumbers/InfoNumbers';
import Destination from '../../components/Destination/Destination';
import Contact from '../../components/Contact/Contact';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';
import TravelGuide from '../../components/TravelGuide/TravelGuide';
import Testimonials from '../../components/Testimonials/Testimonials';
import Logos from '../../components/Logos/Logos';

function Home() {

  return (
    <div className={style.home}>
      <Header />
      <Banner />
      <PopularTours />
      <InfoNumbers />
      <Destination />
      <Contact />
      <Categories />
      <Testimonials />
      <TravelGuide />
      <Logos />
      <Footer />
    </div>
  );
}

export default Home
