import style from './SortBar.module.css';
import { AiOutlineSortAscending } from "react-icons/ai";

function SortBar() {
  return (
    <div className={style.sortContainer}>
      <div>
        <span>16 Tours</span>
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
