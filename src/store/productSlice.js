import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    products: [1, 2, 3, 4, 5],
};

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    },
})

export default productSlice.reducer;