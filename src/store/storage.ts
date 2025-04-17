import { Products } from '../types/Products';

export const saveCart = (cart: Products[]) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

export const loadCart = (): Products[] => {
  try {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

export const saveNewProducts = (products: Products[]) => {
  localStorage.setItem('newProducts', JSON.stringify(products));
};

export const loadNewProducts = (): Products[] => {
  try {
    const data = localStorage.getItem('newProducts');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};
