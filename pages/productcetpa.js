import React from 'react'

export const getServerSideProps = async () => {
    //api call
    const response = await fetch('http://fakestoreapi.com/products');
    //console.log response
    const data = await response.json();  // to provide stringified json to parsed json
    //console.log data
    return {
        props: {productData: data}
    }
}

const Productcetpa = (props) => {
    console.log('props',props);
    const {productData} = props;
  return (
    <div class='container'>
        <h2>This is product cetpa file</h2>
        {
            productData.map(item =>(
            <div>{item.title}</div>
        ))

        }
    </div>
  )
}

export default Productcetpa;