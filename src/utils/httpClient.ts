import { Products, NewProduct } from '../types/Products';

export function getProducts(): Promise<Products[]> {
  return fetch('https://fakestoreapi.com/products').then(response => {
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }

    return response.json();
  });
}

export function postProducts(product: NewProduct): Promise<Products> {
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

export function deleteProduct(id: number): Promise<Products> {
  return fetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to delete product');
    }

    return response.json();
  });
}
