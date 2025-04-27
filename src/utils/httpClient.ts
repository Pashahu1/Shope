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

export function putProducts(productId: number, updatedData: object) {
  return fetch(`https://fakestoreapi.com/products/${productId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedData),
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to put product');
    }

    return response.json();
  });
}

export function deleteProduct(id: number) {
  return fetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error('Failed to Delte product');
    }

    return response.json();
  });
}
