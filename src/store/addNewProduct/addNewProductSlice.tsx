import { ProductsType } from '../../types/Products';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ProductsType[] = [];

export const addNewProductSlice = createSlice({
  name: 'addNewProduct',
  initialState,
  reducers: {
    addNewProduct: (state, { payload }) => {
      const exists = state.some(product => product.id !== payload.id);
      if (exists) {
        state.push(payload);
      }
    },
  },
});

export const { actions, reducer } = addNewProductSlice;
