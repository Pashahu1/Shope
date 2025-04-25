import { configureStore } from '@reduxjs/toolkit';
import { reducer as Cart } from './shopingCart/shopingCartSlice';
import { reducer as Products } from './products/productsSlice';

export const store = configureStore({
  reducer: {
    products: Products,
    shopingCart: Cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
