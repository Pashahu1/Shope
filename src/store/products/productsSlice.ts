import { createSlice } from '@reduxjs/toolkit';
import { loadProducts, saveProducts } from '../storage';

const initialState = loadProducts();

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    readProducts: (state, { payload }) => {
      state.length = 0;
      state.push(...payload);
      saveProducts(payload);
    },
    addNewProduct: (state, { payload }) => {
      state.push(payload);
      saveProducts(state);
    },
    updateProducts: (state, { payload }) => {
      const { id, title, price, description, category, image } = payload;
      const updateProduct = state.find(user => user.id === id);
      if (updateProduct) {
        updateProduct.title = title;
        updateProduct.price = price;
        updateProduct.description = description;
        updateProduct.category = category;
        updateProduct.image = image;
      }
      saveProducts(state);
    },
    deleteProducts: (state, { payload }) => {
      const { id } = payload;

      return state.filter(s => s.id !== id);
    },
  },
});

export const { actions, reducer } = productsSlice;
