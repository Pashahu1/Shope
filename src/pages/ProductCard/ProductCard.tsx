import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ProductsType } from '../../types/Products';
import { Cart } from '../../components/Shered/Cart/Cart';

export const ProductCard = () => {
  const shopingCart = useSelector((state: any) => state.shopingCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(shopingCart));
  }, [shopingCart]);

  console.log('ProductCard', shopingCart);

  return (
    <div className="product-card">
      <div>
        {shopingCart.length === 0 && (
          <div className="product-card__empty">Your cart is empty</div>
        )}
        {shopingCart.length > 0 && (
          <div className="product-card__content">
            {shopingCart.map((product: ProductsType) => (
              <Cart key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
