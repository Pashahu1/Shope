import { Cart } from '../../components/Shered/Cart/Cart';
import { useEffect, useState } from 'react';
import { getProducts } from '../../utils/httpClient';
import './Products.scss';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { ProductsType } from '../../types/Products';

export const Products = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const productList: ProductsType[] = useSelector(
    (state: any) => state.products,
  );
  const { addProducts } = useActions();

  useEffect(() => {
    getProducts()
      .then(response => {
        addProducts(response);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch products');
      });
  }, []);

  return (
    <div className="products">
      <div className="products__content">
        {loading && <div>Loading...</div>}
        {!loading &&
          productList.map(product => (
            <Cart key={product.id} product={product} />
          ))}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};
