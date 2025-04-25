import { ProductsType, ProductType, NewProductType } from '../types/Products';

export function getProducts(): Promise<ProductsType[]> {
  return fetch('https://fakestoreapi.com/products').then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    return response.json();
  });
}

export function getProduct(id: number): Promise<ProductType> {
  return fetch(`https://fakestoreapi.com/products/${id}`).then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch product');
    }

    return response.json();
  });
}

export function postProducts(product: NewProductType): Promise<ProductsType> {
  return fetch('https://fakestoreapi.com/products', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to post product');
    }

    return response.json();
  });
}
