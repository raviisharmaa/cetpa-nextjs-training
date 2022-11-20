import React from 'react';
import Image from 'next/image';
import styles from '../styles/Search.module.css';

const Head2 = () => {
  return (
    <div>
      {/* <h2>search bar</h2> */}
      <form action="#" method="post">
        <Image src='/search.png' width={20} height={20}/>
        <input type="text" id="search-bar"  
        className={styles.search_text} 
        name="search-bar" 
        placeholder="Search for products" />
      </form>
    </div>
  )
}

export default Head2
