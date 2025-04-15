import { useDispatch } from 'react-redux';
import { Products } from '../../../types/Products';
import { Button } from '../Button/Button';
import './Cart.scss';
import { actions } from '../../../store/ShopingCart/ShopingCart';

type CartProps = {
  product: Products;
};

export const Cart: React.FC<CartProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <article className="cart">
      <img className="cart__img" src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <Button
        title="Add to Cart"
        onClick={() => dispatch(actions.toggleShopingCart(product))}
      />
    </article>
  );
};
