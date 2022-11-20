import React from 'react';
import styles from '../styles/Search.module.css';

const Head2 = () => {
  return (
    <div>
      {/* <h2>search bar</h2> */}
      <form action="#" method="post">
        <input type="text" id="search-bar"  
        className={styles.search_text} 
        name="search-bar" 
        placeholder="Search for products" />
      </form>
    </div>
  )
}

export default Head2
