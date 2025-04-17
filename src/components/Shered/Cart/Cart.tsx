import { useDispatch } from 'react-redux';
import { ProductsType } from '../../../types/Products';
import { Button } from '../Button/Button';
import './Cart.scss';
import { actions } from '../../../store/shopingCart/shopingCartSlice';
import { Link } from 'react-router-dom';

type CartProps = {
  product: ProductsType;
};

export const Cart: React.FC<CartProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart">
      <img className="cart__img" src={product.image} alt={product.title} />

      <h3 className="cart__title">
        <Link to={`${product.id}`} className="cart__link">
          {product.title}
        </Link>
      </h3>

      <div className="cart__content">
        <p className="cart__description">{product.description}</p>
        <p className="cart__price">${product.price}</p>
        <p className="cart__category">{product.category}</p>
      </div>

      <div className="cart__button">
        <Button
          title="Add to Cart"
          onClick={() => dispatch(actions.toggleShopingCart(product))}
        />
      </div>
    </article>
  );
};
