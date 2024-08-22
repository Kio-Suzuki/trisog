import style from './Search.module.css';

function Search() {
  return (
    <div className={style.searchContainer}>
      <div className={style.searchField}>
        <label>Destination</label>
        <input type='text' placeholder='Where to go?'></input>
      </div>
      <div className={style.searchField}>
        <label>Type</label>
        <input placeholder='Activity?'></input>
      </div>
      <div className={style.searchField}>
        <label>When</label>
        <input type='date' placeholder='Date'></input>
      </div>
      <div className={style.searchField}>
        <label>Guests</label>
        <input type='number' placeholder='0'></input>
      </div>
      <div className={style.buttonContainer}>
        <button className={style.searchButton}>Search</button>
      </div>
    </div>
  )
}

export default Search
