import style from './home.module.css';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Banner from '../../components/Banner/Banner';
import PopularTours from '../../components/PopularTours/PopularTours';
import InfoNumbers from '../../components/InfoNumbers/InfoNumbers';
import GridImages from '../../components/GridImages/GridImages';
import Contact from '../../components/Contact/Contact';
import Categories from '../../components/Categories/Categories';
import Footer from '../../components/Footer/Footer';
import TravelGuide from '../../components/TravelGuide/TravelGuide';
import Testimonials from '../../components/Testimonials/Testimonials';

function Home() {

  return (
    <div className={style.home}>
      <Header />
      <Banner />
      <Search />
      <PopularTours />
      <InfoNumbers />
      <GridImages />
      <Contact />
      <Categories />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home
