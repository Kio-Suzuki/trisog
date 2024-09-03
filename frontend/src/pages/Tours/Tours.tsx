import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Sidebar from '../../components/Sidebar/Sidebar';
import Header from '../../components/Header/Header';
import Banner2 from '../../components/Banner2/Banner2';
import Footer from '../../components/Footer/Footer';
import style from './Tours.module.css';
import ReactPaginate from 'react-paginate';
import { AiOutlineSortAscending } from "react-icons/ai";
import { useTourContext } from '../../context/TourContext';
import { ToastContainer } from 'react-toastify';

function Tours() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const itemsPerPage = 9;
  const location = useLocation();
  const navigate = useNavigate();
  const [toursCount, setToursCount] = useState<number>(0);
  const { orderQuery, setOrderQuery, fetchTours } = useTourContext();
  const query = new URLSearchParams(location.search);
  const search = query.get('search') || '';
  const type = query.get('type') || '';
  const date = query.get('date') || '';
  const guests = query.get('guests') || '';
  const page = query.get('page') || '1';
  const price = query.get('price') || '';
  const order = orderQuery || 'asc';
  const rating = query.get('rating') || '';
  const countries = query.get('countries') || '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:3333/tours', {
          params: {
            search,
            type,
            date,
            guests,
            price,
            rating,
            countries,
            page,
            order,
            take: itemsPerPage
          }
        });
        setTours(response.data.tours);
        setToursCount(response.data.toursCount);
        setPageCount(Math.ceil(response.data.toursCount / itemsPerPage));
      } catch (error) {
        console.error("Error fetching tours", error);
      }
    };

    fetchTours();
  }, [search, type, date, guests, page, price, order, rating, countries, orderQuery]);

  const handleSearch = (search: string) => {
    navigate(`/tours?search=${search}&page=1`);
  };

  const handlePageClick = (e: { selected: number }) => {
    const newPage = e.selected + 1;
    navigate(`/tours?search=${search}&page=${newPage}`);
    window.scrollTo({
      top: 500,
      left: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={style.tourContainer}>
      <Header />
      <Banner2 title1='Tour Package' title2='Home' title3='Tour Package'/>
      <div className={style.tourContent}>
        <Sidebar onSearch={handleSearch} />
        <div className={style.toursCards}>
          <div className={style.sortBar}>
            <div><p>{toursCount} Tours</p></div>
            <div>
              <span>Sort by</span> <span className={style.iconSort}><AiOutlineSortAscending /></span>
              <select value={orderQuery} onChange={(e) => setOrderQuery(e.target.value)}>
                <option value="titleAZ">Country: A to Z</option>
                <option value="titleZA">Country: Z to A</option>
                <option value="lowPrice">Price: Low to High</option>
                <option value="highPrice">Price: High to Low</option>
              </select>
            </div>
          </div>
          {tours.length > 0 ? (
            <div className={style.cardContainer}>
              {tours.map((tour) => (
                <Card key={tour.id} tour={tour} />
              ))}
            </div>
          ) : (
            <p className={style.result}>No tours available.</p>
          )}
          <div className={style.paginateContainer}>
            <ReactPaginate
              previousLabel={'<'}
              nextLabel={'>'}
              breakLabel={'...'}
              breakClassName={'break-me'}
              pageCount={pageCount}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={style.pagination}
              subContainerClassName={'pages pagination'}
              activeClassName={style.active}
            />
          </div>
        </div>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default Tours;
