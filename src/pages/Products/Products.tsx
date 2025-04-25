import { Cart } from '../../components/Shered/Cart/Cart';
import { useEffect, useState } from 'react';
import { getProducts } from '../../utils/httpClient';
import { useSelector } from 'react-redux';
import { useActions } from '../../hooks/useActions';
import { ProductsType } from '../../types/Products';
import './Products.scss';
import { NewProduct } from '../../components/NewProduct/NewProduct';

export const Products = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const productList: ProductsType[] = useSelector(
    (state: any) => state.products,
  );
  const { readProducts } = useActions();

  useEffect(() => {
    if (productList.length > 0) {
      setLoading(false);
      return;
    }

    getProducts()
      .then(response => {
        readProducts(response);
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch products');
      });
  }, []);

  return (
    <div className="products">
      <div className="products__header">
        <NewProduct />
      </div>
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
