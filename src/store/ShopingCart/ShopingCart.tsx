import { createSlice } from '@reduxjs/toolkit';
import { Products } from '../../types/Products';
import { loadCart } from '../storage';

const initialState: Products[] = loadCart();

export const ShopingCartSlice = createSlice({
  name: 'shopingCart',
  initialState,
  reducers: {
    toggleShopingCart: (state, { payload: product }) => {
      const isExists: boolean = state.some(
        (p: Products) => p.id === product.id,
      );
      if (isExists) {
        const index = state.findIndex((p: Products) => p.id === product.id);

        if (index !== -1) {
          state.splice(index, 1);
        }
      } else {
        state.push(product);
      }
    },
  },
});

export const { actions, reducer } = ShopingCartSlice;
