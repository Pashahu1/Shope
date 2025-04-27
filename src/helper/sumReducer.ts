import { useMemo } from 'react';
import { ProductsType } from '../types/Products';

export const sumReducer = (shopingCart: ProductsType[]) => {
  const sum = useMemo(() => {
    return shopingCart.reduce((acc: number, product) => acc + product.price, 0);
  }, [shopingCart]);

  return sum;
};
