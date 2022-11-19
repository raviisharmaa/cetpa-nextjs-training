import React from 'react';
import Head1 from './Head1';
import Head2 from './Head2';
import Head3 from './Head3';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className='bg-success bg-opacity-50'>
      <div class="container">
        <div class="row">
          {/* <Head1/>
          <Head2/>
          <Head3/> */}
          <div class="col-2">
            <Head1/>
          </div>
          <div class="col-5">
            <Navbar />
          </div>
          <div class="col-3">

          </div>
          <div class="col-2">

          </div>
        </div>        
      </div>
    </div>
  )
}

export default Header
