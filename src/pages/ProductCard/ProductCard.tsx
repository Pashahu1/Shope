import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProductsType } from '../../types/Products';
import { Cart } from '../../components/Shered/Cart/Cart';
import './ProductCard.scss';

export const ProductCard = () => {
  const shopingCart = useSelector((state: any) => state.shopingCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(shopingCart));
  }, [shopingCart]);

  return (
    <div className="product-card">
      <div className="product-card__content">
        {shopingCart.length === 0 && (
          <div className="product-card__empty">Your cart is empty</div>
        )}

        {shopingCart.length > 0 && (
          <>
            {shopingCart.map((product: ProductsType) => (
              <Cart key={product.id} product={product} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};
