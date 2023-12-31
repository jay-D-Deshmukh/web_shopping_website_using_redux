import { createSlice } from "@reduxjs/toolkit";

const wishlistSclice =createSlice({

    name : "Wishlist",
    initialState : [],
    reducers:{
        addTOWish(state,action){
          state.push(action.payload)
        },

        // removeFromWish(state,action){

        // }
    }

})
export const {addTOWish} = wishlistSclice.actions;
export default wishlistSclice.reducer