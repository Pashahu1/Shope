import { ProductsType } from '../../../types/Products';
import { Button } from '../Button/Button';
import './Cart.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useActions } from '../../../hooks/useActions';
import { deleteProduct } from '../../../utils/httpClient';

type CartProps = {
  product: ProductsType;
};

export const Cart: React.FC<CartProps> = ({ product }) => {
  const { toggleShopingCart, deleteProducts } = useActions();
  const shopingCart: ProductsType[] = useSelector(
    (state: any) => state.shopingCart,
  );

  const isExists: boolean = shopingCart.some(p => p.id === product.id);

  const handleDelete = (id: number) => {
    deleteProducts({ id });
    deleteProduct(id);
  };

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

      <div className="cart__actions">
        <Link to={`edit/${product.id}`}>
          <button className="cart__actions-button cart__actions--edit">
            Edit
          </button>
        </Link>

        <button
          onClick={() => handleDelete(product.id)}
          className="cart__actions-button cart__actions--delete"
        >
          Delete
        </button>
      </div>

      <div className="cart__button">
        <Button
          title={isExists ? 'Remove Cart' : 'Add to Cart'}
          className={`cart__button ${
            isExists ? 'cart__button--remove' : 'cart__button--add'
          }`}
          onClick={() => toggleShopingCart(product)}
        />
      </div>
    </article>
  );
};
