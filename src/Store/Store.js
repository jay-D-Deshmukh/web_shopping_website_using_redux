import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice";
import productReducer from './ProductSlice'
import wishListReducer from './WishlistSlice'
const store = configureStore({
  reducer: {
    cart: CartReducer,

    product : productReducer,

    wishlist : wishListReducer
  },
});
export default store;
