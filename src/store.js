import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cart-slice";
import productReducer from "./feature/product-slice";
export const store = configureStore({
    reducer:{
        cart: cartReducer,
        products: productReducer
    }
});