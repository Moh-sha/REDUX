export const Add_TO_Cart = 'add_to_cart';
export const Remove_from_Cart = 'remove_to_cart';



export const AddTOCART = (serial) => {


     return {type : AddTOCART, serial}


}

export const REMOVEFROMCART = (serial) => {

 return {type : Remove_from_Cart, serial}

}
