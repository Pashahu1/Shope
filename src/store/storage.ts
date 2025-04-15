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
