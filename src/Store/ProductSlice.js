import { createSlice } from "@reduxjs/toolkit";
import { Dispatch } from "@reduxjs/toolkit";



export const STATUSES = Object.freeze({
  IDEL:'idel',
  
  ERROR:'error',
  
  LOADING:'loading'
})


const productSlice = createSlice({
  name: "product",

  initialState: {

    data :[],

    status : STATUSES.IDEL
  },
  reducers: {
    setProduct(state, action) {
      state.data=action.payload;
    },
    setStatus(state, action) {
      state.status=action.payload ;
    },

  },
});

export const { setProduct,setStatus } = productSlice.actions;
export default productSlice.reducer;





export function fetchProducts() {

return async function fetchProductsThunk(dispatch,getState) {
  dispatch(setStatus(STATUSES.LOADING));

  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    
    dispatch(setProduct(data))
    dispatch(setStatus(STATUSES.IDEL));

  }catch(error){

    console.log(error)
    dispatch(setStatus(STATUSES.ERROR));

  }


}

}