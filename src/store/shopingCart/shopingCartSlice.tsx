import { createSlice } from '@reduxjs/toolkit';
import { ProductsType } from '../../types/Products';
import { loadCart } from '../storage';

const initialState: ProductsType[] = loadCart();

export const shopingCartSlice = createSlice({
  name: 'shopingCart',
  initialState,
  reducers: {
    toggleShopingCart: (state, { payload: product }) => {
      const isExists: boolean = state.some(
        (p: ProductsType) => p.id === product.id,
      );
      if (isExists) {
        const index = state.findIndex((p: ProductsType) => p.id === product.id);

        if (index !== -1) {
          state.splice(index, 1);
        }
      } else {
        state.push(product);
      }
    },
  },
});

export const { actions, reducer } = shopingCartSlice;
