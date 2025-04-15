import { configureStore } from '@reduxjs/toolkit';
import { reducer as Cart } from './ShopingCart/ShopingCart';

export const store = configureStore({
  reducer: {
    shopingCart: Cart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
