import React from "react";


//ssg
export const getStaticProps = async () => {
    //api call
    const response = await fetch('https://fakestoreapi.com/products')
    const data = await response.json();  // to convert stringified json to parsed json
    return {
        props: {productData: data}
    }
}

const Courses = (props) => {
    console.log('props',props);
    const {productData} = props;
    return(
        <div>
            <h2>This is courses file.</h2>
            {productData.map(item => (
                <div>{item.title}</div>
            ))}
        </div>
    )
}

export default Courses;