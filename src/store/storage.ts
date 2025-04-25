import { ProductsType } from '../types/Products';

export const saveProducts = (products: ProductsType[]) => {
  localStorage.setItem('products', JSON.stringify(products));
};

export const loadProducts = (): ProductsType[] => {
  try {
    const data = localStorage.getItem('products');
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

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
