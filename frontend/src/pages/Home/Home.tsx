
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
import TitleBar from '../../components/TitleBar/TitleBar';
import { ToastContainer } from 'react-toastify';

function Home() {

  return (
    <div style={{height: '200vh'}} >
      <Header />
      <Banner />
      <TitleBar title1="Tours" title2="Most Popular Tours"/>
      <PopularTours />
      <InfoNumbers />
      <Destination />
      <Contact />
      <Categories />
      <Testimonials />
      <TravelGuide />
      <Logos />
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Home
