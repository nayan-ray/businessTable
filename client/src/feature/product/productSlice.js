import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
     productList: [],
     totalProducts: 0,
     },
  reducers: {
    setProductList: (state, action) => {
      state.productList = action.payload;
    },
    setTotalProducts: (state, action) => {
      state.totalProducts = action.payload;
    }
    
  }
});

export const { setProductList, setTotalProducts } = productSlice.actions;
export default productSlice.reducer;
