import { configureStore } from "@reduxjs/toolkit";
import { productsReducer, usersReducer, cartReducer } from "./productSlice"

export default configureStore({

    reducer: {
        products: productsReducer,
        users: usersReducer,
        cart: cartReducer,
    },
});