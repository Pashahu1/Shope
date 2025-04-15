import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const ProductCard = () => {
  const shopingCart = useSelector((state: any) => state.shopingCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(shopingCart));
  }, [shopingCart]);

  return (
    <div className="product-card">
      <div>Buy</div>
    </div>
  );
};
