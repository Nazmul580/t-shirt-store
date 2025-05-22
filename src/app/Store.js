import { configureStore } from "@reduxjs/toolkit";
import ProductApi from "../features/ProductApi";
import CartApiSlice from "../features/CartApi";


const store = configureStore({
    reducer: {
        [ProductApi.reducerPath]: ProductApi.reducer,
        [CartApiSlice.reducerPath]: CartApiSlice.reducer,
    },
    middleware: (defaultMiddleware) => defaultMiddleware().concat(ProductApi.middleware).concat(CartApiSlice.middleware),
})

export default store;