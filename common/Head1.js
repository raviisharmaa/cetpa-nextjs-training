import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import Image from 'next/image';
import Head from 'next/head';

const Head1 = () => {
  return (
    <div className='col-6'>
        <Image src='/logo.png' width={75} height={50}/>
    </div>
  )
}

export default Head1
