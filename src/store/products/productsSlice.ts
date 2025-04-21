import { createSlice } from '@reduxjs/toolkit';
import { loadProducts, saveProducts } from '../storage';

const initialState = loadProducts();

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProducts: (state, { payload }) => {
      state.length = 0;
      state.push(...payload);
      saveProducts(payload);
    },
  },
});

export const { actions, reducer } = productsSlice;
