import Product from "../../Product/Product";
import {  Add_TO_Cart, Remove_from_Cart  } from "../actions/Cart_Action";

const initial_State = {


       cart :[],
       products :[
        { 
           name:'Lenovo' , serial : 1
        
        },
        
        { 
            name:'Asus' , serial : 2
         
         }
        ,
        
        { 
            name:'HP' , serial : 3
         
         }
        ],
}


const cartReducer = (state=initial_State,action) =>{

     switch(action.type){
     
     case  Add_TO_Cart :
        
             const new_id = action.serial;
             const new_cart = [...state.cart,new_id]; 
             return {products: state.products ,cart : new_cart}
     case Remove_from_Cart  : 
            const id = action.serial;
            const Remain_cart = state.cart.filter(c => c.id !== id);
            return {cart : Remain_cart}
        default : 
             return state;
       

     }

}

export default cartReducer;