import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cart-slice";
import productReducer from "./feature/product-slice";
import categoriesReducer from "./feature/category-slice";
export const store = configureStore({
    reducer:{
        cart: cartReducer,
        products: productReducer,
        categories: categoriesReducer
    }
});