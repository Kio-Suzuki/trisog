import style from './Search.module.css';

function Search() {
  return (
    <div className={style.searchContainer}>
      <div className={style.searchField}>
        <label>Destination</label>
        <input placeholder='Where to go?'></input>
      </div>
      <div className={style.searchField}>
        <label>Type</label>
        <input placeholder='Activity?'></input>
      </div>
      <div className={style.searchField}>
        <label>When</label>
        <input placeholder='Date'></input>
      </div>
      <div className={style.searchField}>
        <label>Guests</label>
        <input placeholder='0'></input>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.searchButton}>Search</button>
      </div>
    </div>
  )
}

export default Search
