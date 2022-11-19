import React from 'react';
import Head1 from './Head1';
import Head2 from './Head2';
import Head3 from './Head3';

const Header = () => {
  return (
    <div className='bg-success bg-opacity-50'>
      <div class="container">
        <div class="row">
          <Head1/>
          <Head2/>
          <Head3/>
        </div>        
      </div>
    </div>
  )
}

export default Header
