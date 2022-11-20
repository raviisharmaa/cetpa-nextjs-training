import React from 'react';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Navbar from '../common/Navbar';
import styles from '../styles/ProductItem.module.css';
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
                                
                                <div  className={styles.product_view}>
                                    <div class="product-img">
                                        <Image src='/bag.jpg' width={175} height={250}/>
                                    </div>
                                    <div className="product-details">
                                        <h3 className={styles.product_title}>american tourister</h3>
                                        <h4 className={styles.product_desc}>Kansas 57 Cabin Trolley</h4>
                                        <div>
                                            <span className={styles.product_rp}>Rs. 2799</span> 
                                            <span className={styles.product_dp}>Rs 7180</span> 
                                            <span className={styles.product_off}>(Rs 4381 OFF)</span> 
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-sm-3">
                                {/* <productitem /> */}

                                <div  className={styles.product_view}>
                                    <div class="product-img">
                                        <Image src='/bag.jpg' width={175} height={250}/>
                                    </div>
                                    <div className="product-details">
                                        <h3 className={styles.product_title}>american tourister</h3>
                                        <h4 className={styles.product_desc}>Kansas 57 Cabin Trolley</h4>
                                        <div>
                                            <span className={styles.product_rp}>Rs. 2799</span> 
                                            <span className={styles.product_dp}>Rs 7180</span> 
                                            <span className={styles.product_off}>(Rs 4381 OFF)</span> 
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-sm-3">
                                {/* <productitem /> */}

                                <div  className={styles.product_view}>
                                    <div class="product-img">
                                        <Image src='/bag.jpg' width={175} height={250}/>
                                    </div>
                                    <div className="product-details">
                                        <h3 className={styles.product_title}>american tourister</h3>
                                        <h4 className={styles.product_desc}>Kansas 57 Cabin Trolley</h4>
                                        <div>
                                            <span className={styles.product_rp}>Rs. 2799</span> 
                                            <span className={styles.product_dp}>Rs 7180</span> 
                                            <span className={styles.product_off}>(Rs 4381 OFF)</span> 
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div class="col-sm-3">
                                {/* <productitem /> */}

                                <div className={styles.product_view}>
                                    <div class="product-img">
                                        <Image src='/bag.jpg' width={175} height={250}/>
                                    </div>
                                    <div className="product-details">
                                        <h3 className={styles.product_title}>american tourister</h3>
                                        <h4 className={styles.product_desc}>Kansas 57 Cabin Trolley</h4>
                                        <div>
                                            <span className={styles.product_rp}>Rs. 2799</span> 
                                            <span className={styles.product_dp}>Rs 7180</span> 
                                            <span className={styles.product_off}>(Rs 4381 OFF)</span> 
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-sm-3">
                                {/* <productitem /> */}

                                <div className={styles.product_view}>
                                    <div class="product-img">
                                        <Image src='/bag.jpg' width={175} height={250}/>
                                    </div>
                                    <div className="product-details">
                                        <h3 className={styles.product_title}>american tourister</h3>
                                        <h4 className={styles.product_desc}>Kansas 57 Cabin Trolley</h4>
                                        <div>
                                            <span className={styles.product_rp}>Rs. 2799</span> 
                                            <span className={styles.product_dp}>Rs 7180</span> 
                                            <span className={styles.product_off}>(Rs 4381 OFF)</span> 
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-sm-3">
                                {/* <productitem /> */}

                                <div className={styles.product_view}>
                                    <div class="product-img">
                                        <Image src='/bag.jpg' width={175} height={250}/>
                                    </div>
                                    <div className="product-details">
                                        <h3 className={styles.product_title}>american tourister</h3>
                                        <h4 className={styles.product_desc}>Kansas 57 Cabin Trolley</h4>
                                        <div>
                                            <span className={styles.product_rp}>Rs. 2799</span> 
                                            <span className={styles.product_dp}>Rs 7180</span> 
                                            <span className={styles.product_off}>(Rs 4381 OFF)</span> 
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-sm-3">
                                {/* <productitem /> */}

                                <div className={styles.product_view}>
                                    <div class="product-img">
                                        <Image src='/bag.jpg' width={175} height={250}/>
                                    </div>
                                    <div className="product-details">
                                        <h3 className={styles.product_title}>american tourister</h3>
                                        <h4 className={styles.product_desc}>Kansas 57 Cabin Trolley</h4>
                                        <div>
                                            <span className={styles.product_rp}>Rs. 2799</span> 
                                            <span className={styles.product_dp}>Rs 7180</span> 
                                            <span className={styles.product_off}>(Rs 4381 OFF)</span> 
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div class="col-sm-3">
                                {/* <productitem /> */}

                                <div className={styles.product_view}>
                                    <div class="product-img">
                                        <Image src='/bag.jpg' width={175} height={250}/>
                                    </div>
                                    <div className="product-details">
                                        <h3 className={styles.product_title}>american tourister</h3>
                                        <h4 className={styles.product_desc}>Kansas 57 Cabin Trolley</h4>
                                        <div>
                                            <span className={styles.product_rp}>Rs. 2799</span> 
                                            <span className={styles.product_dp}>Rs 7180</span> 
                                            <span className={styles.product_off}>(Rs 4381 OFF)</span> 
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;