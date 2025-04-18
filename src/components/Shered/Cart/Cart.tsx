import { useDispatch } from 'react-redux';
import { ProductsType } from '../../../types/Products';
import { Button } from '../Button/Button';
import './Cart.scss';
import { actions } from '../../../store/shopingCart/shopingCartSlice';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

type CartProps = {
  product: ProductsType;
};

export const Cart: React.FC<CartProps> = ({ product }) => {
  const dispatch = useDispatch();
  const shopingCart: ProductsType[] = useSelector(
    (state: any) => state.shopingCart,
  );

  const isExists: boolean = shopingCart.some(p => p.id === product.id);

  return (
    <article className="cart">
      <span className="cart__delete">X</span>
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
          title={isExists ? 'Remove Cart' : 'Add to Cart'}
          className={`cart__button ${
            isExists ? 'cart__button--remove' : 'cart__button--add'
          }`}
          onClick={() => dispatch(actions.toggleShopingCart(product))}
        />
      </div>
    </article>
  );
};
