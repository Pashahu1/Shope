import { useSelector } from 'react-redux';
import { Cart } from '../../components/Shered/Cart/Cart';
import { useEffect, useState } from 'react';
import { ProductsType } from '../../types/Products';
import { getProducts } from '../../utils/httpClient';
import './Products.scss';

export const Products = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');
  const newProducts = useSelector((state: any) => state.addNewProduct);

  const updatedProducts = [...products, ...newProducts];

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .then(() => {
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
          updatedProducts.map(product => (
            <Cart key={product.id} product={product} />
          ))}
        {error && <div>{error}</div>}
      </div>
    </div>
  );
};
