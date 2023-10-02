import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cart-slice";
import productReducer from "./feature/products-slice";
import categoriesReducer from "./feature/categories-slice";
export const store = configureStore({
    reducer:{
        cart: cartReducer,
        products: productReducer,
        categories: categoriesReducer
    }
});