import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../feature/product/productSlice.js';
import loaderReducer from '../feature/product/loaderSlice.js';


export const store = configureStore({
  reducer: {
    product: productReducer,
    loader : loaderReducer
  }
});