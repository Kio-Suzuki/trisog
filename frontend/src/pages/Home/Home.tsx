import style from './home.module.css';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import TitleBar from '../../components/TitleBar/TitleBar';

function Home() {
  return (
    <div className={style.home}>
      <Header />
      <Banner />
      <Search />
      <TitleBar />
      <Card />
    </div>
  )
}

export default Home
