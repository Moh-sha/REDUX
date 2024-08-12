import React from 'react';

const Product = (props) => {
     
    
    const {AddTOCART , products} = props;

    return (
        <div style={{border : '1px solid black'}}>
            <h1>This is product to name : {products} </h1>
            <h1>this product ID : {AddTOCART.serial}</h1>
            <button onClick={()=>AddTOCART(products.serial)}>Add to Cart </button>
        </div>
     );
};

export default Product;