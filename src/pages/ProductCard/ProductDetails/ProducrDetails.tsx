import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProductType } from '../../../types/Products';
import { getProduct } from '../../../utils/httpClient';
import './ProductDetails.scss';
import { Button } from '../../../components/Shered/Button/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { actions } from '../../../store/shopingCart/shopingCartSlice';

export const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState<ProductType | null>(null);
  const shopingCart: ProductType[] = useSelector(
    (state: any) => state.shopingCart,
  );

  const isExists = product ? shopingCart.some(p => p.id === product.id) : false;

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

          <Button
            title={isExists ? 'Remove Cart' : 'Add to Cart'}
            className={`cart__button ${
              isExists ? 'cart__button--remove' : 'cart__button--add'
            }`}
            onClick={() => dispatch(actions.toggleShopingCart(product))}
          />
        </div>
      )}
    </div>
  );
};
