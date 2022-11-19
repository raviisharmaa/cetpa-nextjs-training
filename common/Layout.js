import React from 'react'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'

const Layout = (props) => {
  const {children, footerstatus} = props;
  console.log('footerstatus', footerstatus);
  return (
    <>
        {true ? (<div>
            <Header/>
            <Navbar />
            {children}
            {!footerstatus && (<Footer />) }
        </div>): (<div>
            <Header/>
            <Navbar />
            {children}
            {!footerstatus && (<Footer />) }
          </div>
        )}
    </>
  )
}

export default Layout
