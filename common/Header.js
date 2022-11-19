import React from 'react';
import Head1 from './Head1';
import Head2 from './Head2';
import Head3 from './Head3';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div>
      <div class="container">
        <div class="row">          
          <div class="col-2">
            <Head1/>
          </div>
          <div class="col-5">
            <Navbar />
          </div>
          <div class="col-3">
            <Head2/>
          </div>
          <div class="col-2">
            <Head3/>
          </div>
        </div>        
      </div>
    </div>
  )
}

export default Header
