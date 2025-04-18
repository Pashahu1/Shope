import { ProductsType } from '../../types/Products';
import { createSlice } from '@reduxjs/toolkit';
import { loadNewProducts, saveNewProducts } from '../storage';

const initialState: ProductsType[] = loadNewProducts();
console.log('Initial state from localStorage:', initialState);
export const addNewProductSlice = createSlice({
  name: 'addNewProduct',
  initialState,
  reducers: {
    addNewProduct: (state, { payload }) => {
      state.push(payload);
      saveNewProducts(state);
    },
  },
});

export const { actions, reducer } = addNewProductSlice;
