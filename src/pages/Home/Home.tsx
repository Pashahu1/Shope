import { getProducts } from './../../utils/httpClient';
import { Products } from './../../types/Products';
import { Cart } from './../../components/Shered/Cart/Cart';
import { useEffect, useState } from 'react';
import './Home.scss';

export const Home = () => {
  const [products, setProducts] = useState<Products[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => {
        setError('Failed to fetch products');
        setLoading(false);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="home">
      <div className="home__content">
        {loading && <div>Loading...</div>}
        {!loading &&
          products.map(product => <Cart key={product.id} product={product} />)}
        {error && <div>{error}</div>}
      </div>
    </div>
  );
};
