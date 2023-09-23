import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllProducts = createAsyncThunk('products/fetchAll', async()=>{
    const response = await fetch("https://fakestoreapi.com/products");
    return await response.json();
})

const productSlice = createSlice({
    name: "products",
    initialState: {
        value: []
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchAllProducts.pending, (state, action)=>{
            state.loading = true;
        })
        builder.addCase(fetchAllProducts.fulfilled, (state, action)=>{
            state.value = action.payload;
            state.loading = false;
        })
    }
})

export default productSlice.reducer;