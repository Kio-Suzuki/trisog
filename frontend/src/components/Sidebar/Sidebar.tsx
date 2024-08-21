import style from './Sidebar.module.css';

function Sidebar() {
  return (
    <div className={style.sidebarContainer}>
      <div className={style.sidebarSearch}>
        <h3>Search</h3>  
        <input type="text" placeholder='Type anything...'/>
      </div>
      <div className={style.sidebarFilter}>
        <h3>Filter By</h3> 
        <input type="range" />
        <button>Submit</button>
      </div>
      <div className={style.sidebarCategories}>
        <h3>Categories</h3>
        
      </div>
      <div className={style.sidebarDestinations}>
        <h3>Destinations</h3>
      </div>
      <div className={style.sidebarReviews}>
        <h3>Reviews</h3>
      </div>  
    </div>
  )
}

export default Sidebar
