import React from 'react';
import Card from '../Card/Card';
import style from './CardGrid.module.css';
import ReactPaginate from 'react-paginate';

interface CardGridProps {
  tours: Tour[];
  pageCount: number;
  onPageChange: (e: { selected: number }) => void;
}

const CardGrid: React.FC<CardGridProps> = ({ tours, pageCount, onPageChange }) => {
  return (
    <div className={style.cardGridContainer}>
      {tours.length > 0 ? (
        tours.map((tour) => (
          <Card key={tour.id} tour={tour} />
        ))
      ) : (
        <p>No tours available.</p>
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
          onPageChange={onPageChange}
          containerClassName={style.pagination}
          subContainerClassName={'pages pagination'}
          activeClassName={style.active}
        />
      </div>
    </div>
  );
}

export default CardGrid;
