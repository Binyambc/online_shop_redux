import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    products: [],
    users: [],
    cart: {
        cart: []
    },
};

const api = "https://fakestoreapi.com/products";
const userApi = "https://jsonplaceholder.typicode.com/users";

export const fetchProducts = createAsyncThunk("products/products", async () => {
    const response = await axios.get(api);
    return response.data;
})

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await axios.get(userApi);
    return response.data;
})

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.products = action.payload;
            })
    },
})

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = "loading";
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "succeeded";
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "failed";
                state.error = action.error.message;
            });
    }
})

const cartSlice = createSlice({
    name: "cart",
    initialState: { cart: [] },
    reducers: {
        addToCart: (state, action) => {
            state.cart.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const productsReducer = productSlice.reducer;
export const usersReducer = userSlice.reducer;
export const cartReducer = cartSlice.reducer;
