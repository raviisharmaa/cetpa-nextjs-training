import React from "react";
import Image from 'next/image';
import style from '../styles/ProductItem.module.css';

export const getStaticProps = async () => {
    const response = await fetch ('https://fakestoreapi.com/products');
    const data = await response.json(); //To convert stringify json to parsed json
    return {
        props : {productData : data}
    }
}   

const Product = (props) => {
    const {productData} = props;
    return(
        <div className = "container">
            <div class="row">
                <div class="col-sm-3">
                    <div className={style.filter_view}>
                        Upcoming filter area
                    </div>
                </div>
                <div class="col-sm-9">
                    <div class="row">
                        {productData.map(item => (
                            <div className={[style.product_view, "col-sm-3"].join(" ")} key={item.id}>
                                <div className = {style.product_wrap}>
                                    <Image className = {style.product_img} src="/bag.jpg" width={185} height={200} alt={item.title}></Image>
                                    <h3 className = {style.product_title}>{item.title}</h3>
                                    <h4 className = {style.product_desc}>{item.description}</h4>
                                    <h5 className = {style.product_rp}>{"Rs." + item.price}</h5>
                                </div>
                            </div>
                        ))}
                    </div>                    
                </div>
            </div>            
        </div>
    )
}

export default Product;