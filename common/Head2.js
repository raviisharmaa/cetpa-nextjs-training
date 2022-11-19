import React from 'react'

const Head2 = () => {
  return (
    <div>
      {/* <h2>search bar</h2> */}
      <form action="/send-data-here" method="post">
        <input type="text" id="search-bar" name="search-bar" placeholder="searchbar" />
      </form>
    </div>
  )
}

export default Head2
