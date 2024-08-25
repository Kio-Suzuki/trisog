import { useState, useEffect } from 'react';
import axios from 'axios';
import Card, { Tour } from '../Card/Card';
import style from './CardGrid.module.css';
import ReactPaginate from 'react-paginate';

function CardGrid() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [currentItems, setCurrentItems] = useState<Tour[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 9;

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:3333/tours');
        setTours(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching tours", error);
      }
    };
    fetchTours();
  }, []);

  useEffect(() => {
    // Update current items and page count whenever tours or itemOffset changes
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(tours.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(tours.length / itemsPerPage));
  }, [tours, itemOffset]);

  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % tours.length;
    setItemOffset(newOffset);
  };

  return (
    <div className={style.cardGridContainer}>
      {currentItems.map((tour) => (
        <Card key={tour.id} tour={tour} />
      ))}
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
  )
}

export default CardGrid;
