import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import styles from '../styles/About.module.css';
import Image from 'next/image';
import Head from 'next/head';
import productitem from '../component/productitem';

export const getStaticProps = async () => {
    //api call
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();  // to convert stringified json to parsed json
    return {
        props: {productData: data}
    }
}

const Products = (props) => {
    console.log('props',props);
    const {productData} = props;
    return(
        <div>
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        Upcoming filter area
                    </div>
                    <div class="col-sm-9">
                        <div class="row">
                            <div class="col-sm-3">
                                {/* <productitem /> */}
                                
                            </div>
                            <div class="col-sm-3">
                                <productitem />
                            </div>
                            <div class="col-sm-3">
                                <productitem />
                            </div>
                            <div class="col-sm-3">
                                <productitem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;