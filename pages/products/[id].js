import React from 'react'
import { useRouter } from 'next/router';

// make api call using ID
// https://fakestoreapi.com/products/1
// SSR Page - e commerce
// export const getServerSideProps = async () => {
//     //api call
//     const response = await fetch('http://fakestoreapi.com/products');
//     //console.log response
//     const data = await response.json();  // to provide stringified json to parsed json
//     //console.log data
//     return {
//         props: {productData: data}
//     }
// }

const ProductID = (context) => {
    const router = useRouter();
    const {id} = router.query;
    console.log('id' - id);
    // console.log('props',props);
    // const {productData} = props;
    // console.log('ID - ', context.params.id);
  return (
    <div class='container'>
        <h2>This is Product page - {id}</h2>
        {/* {
            productData.map(item =>(
                <div>{item.title}</div>
            ))
        } */}
    </div>
  )
}

export default ProductID;