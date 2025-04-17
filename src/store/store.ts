import { configureStore } from '@reduxjs/toolkit';
import { reducer as Cart } from './shopingCart/shopingCartSlice';
import { reducer as NewCart } from './addNewProduct/addNewProductSlice';

export const store = configureStore({
  reducer: {
    shopingCart: Cart,
    addNewProduct: NewCart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
