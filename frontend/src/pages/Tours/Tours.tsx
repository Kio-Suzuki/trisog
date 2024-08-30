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

function Tours() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [pageCount, setPageCount] = useState<number>(0);
  const itemsPerPage = 9;
  const location = useLocation();
  const navigate = useNavigate();
  const [toursCount, setToursCount] = useState<number>(0);
  
  const query = new URLSearchParams(location.search);
  const search = query.get('search') || '';
  const page = query.get('page') || '1';

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:3333/tours', {
          params: {
            search,
            page,
            take: itemsPerPage
          }
        });
        setTours(response.data.tours);
        setToursCount(response.data.toursCount);
        setPageCount(Math.ceil(response.data.toursCount / itemsPerPage));
        console.log(tours);
        console.log(response.data.toursCount)
      } catch (error) {
        console.error("Error fetching tours", error);
      }
    };

    fetchTours();
  }, [search, page]);

  const handleSearch = (search: string) => {
    navigate(`/tours?search=${search}&page=1`);
  };

  const handlePageClick = (e: { selected: number }) => {
    const newPage = e.selected + 1; // Page numbers start from 1
    navigate(`/tours?search=${search}&page=${newPage}`);
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
              <select>
                <option value="2">Price: Low to High</option>
                <option value="3">Price: High to Low</option>
                <option value="3">Title: A to Z</option>
                <option value="4">Title: Z to A</option>
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
    </div>
  );
}

export default Tours;
