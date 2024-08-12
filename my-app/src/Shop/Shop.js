import React from 'react';
import Product from '../Product/Product';
import { AddTOCART, Add_TO_Cart } from '../Redux/actions/Cart_Action';

import { connect } from'react-redux';

const Shop = (props) => {
    console.log(props)
  const{products, AddTOCART} = props.products;

    
    return (
        <div>
            <h1>Shop Component </h1>
        
         {
              
              products.map(pd=> <Product products={pd} key={pd.serial}  
              
             AddTOCART={AddTOCART}  
              
              ></Product>)

         }
        
        </div>
    );
};


const mapStateToProps = (state) =>
{
     
    return {

         cart : state.cart,
         products : state.products

    }



}

const mapDispatchToProps =  {

    AddTOCART : AddTOCART



}





export default connect(mapStateToProps, mapDispatchToProps)(Shop);