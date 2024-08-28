import { useState, useEffect } from 'react';
import axios from 'axios';
import style from './SortBar.module.css';
import { AiOutlineSortAscending } from "react-icons/ai";

function SortBar() {

  const [toursCount, setToursCount] = useState<number>(0);

  useEffect(() => {

    const fetchTours = async () => {
      try {
        const response = await axios.get('http://localhost:3333/tours');
        setToursCount(response.data.toursCount);
        console.log("Tours count: ", toursCount);
      } catch (error) {
        console.error("Error fetching tours", error);
      }
    };
    fetchTours();
  }, []);

  return (
    <div className={style.sortContainer}>
      <div>
        <span>{toursCount} Tours</span>
      </div>
      <div>
        <span>Sort by</span> <span className={style.iconSort}><AiOutlineSortAscending /></span>
        <select className={style.select}>
          <option value="1">Sort by</option>
          <option value="2">Price: Low to High</option>
          <option value="3">Price: High to Low</option>
          <option value="4">Newest</option>
          <option value="5">Oldest</option>
        </select>
      </div>
    </div>
  )
}

export default SortBar
