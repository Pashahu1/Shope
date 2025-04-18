import { ProductsType } from '../../types/Products';
import { createSlice } from '@reduxjs/toolkit';
import { loadNewProducts, saveNewProducts } from '../storage';

const initialState: ProductsType[] = loadNewProducts();

export const addNewProductSlice = createSlice({
  name: 'addNewProduct',
  initialState,
  reducers: {
    addNewProduct: (state, { payload }) => {
      const exists = state.some(product => product.id === payload.id);
      if (!exists) {
        state.push(payload);
        saveNewProducts(state);
      }
    },
  },
});

export const { actions, reducer } = addNewProductSlice;
