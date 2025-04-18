import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductType } from '../../../types/Products';
import { getProduct } from '../../../utils/httpClient';
import './ProductDetails.scss';
import { Button } from '../../../components/Shered/Button/Button';

export const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<ProductType | null>(null);

  console.log('ProductDetails', id);
  console.log('ProductDetails', product);

  useEffect(() => {
    getProduct(Number(id))
      .then(setProduct)
      .catch(error => {
        console.error('Error fetching product details:', error);
      });
  }, [id]);

  return (
    <div className="product-details">
      {product && (
        <div className="product-details__content">
          <h1 className="product-details__title">{product.title}</h1>
          <img
            className="product-details__img"
            src={product.image}
            alt={product.title}
          />
          <p className="product-details__description">{product.description}</p>
          <p className="product-details__price">Price: ${product.price}</p>
          <p className="product-details__category">
            Category: {product.category}
          </p>
          <p className="product-details__rating">
            Rating: {product.rating.rate}
          </p>
          <p className="product-details__count">
            Count: {product.rating.count}
          </p>

          <Button title="Add to cart" />
        </div>
      )}
    </div>
  );
};
