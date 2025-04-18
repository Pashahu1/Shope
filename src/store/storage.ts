import { ProductsType } from '../types/Products';

export const saveCart = (cart: ProductsType[]) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const loadCart = (): ProductsType[] => {
  try {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveNewProducts = (products: ProductsType[]) => {
  localStorage.setItem('newProducts', JSON.stringify(products));
};

export const loadNewProducts = (): ProductsType[] => {
  try {
    const data = localStorage.getItem('newProducts');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};
