import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import Image from 'next/image';
import Head from 'next/head';

const Head1 = () => {
  return (
    <div>
        <Image src='/logo.png' width={75} height={50} alt="img"/>
    </div>
  )
}

export default Head1
