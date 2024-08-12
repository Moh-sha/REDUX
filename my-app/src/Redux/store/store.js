import cartReducer from "../reducers/cart_reducers";
import {createStore} from "redux";


export const store = createStore(cartReducer)