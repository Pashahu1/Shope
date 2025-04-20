import { useSelector } from 'react-redux';
import './NewProduct.scss';
import { ProductsType } from '../../../types/Products';
import { Cart } from '../../Shered/Cart/Cart';
import { Link } from 'react-router-dom';

export const NewProduct = () => {
  const newProducts = useSelector((state: any) => state.addNewProduct);

  return (
    <div className="new-product">
      <h1>Create your own product</h1>
      {newProducts.length > 0 && (
        <div className="new-product__list">
          {newProducts.map((product: ProductsType) => (
            <Cart key={product.id} product={product} />
          ))}
        </div>
      )}

      <Link to="form" className="new-product__button">
        <span className="new-product__icon"></span>
      </Link>
    </div>
  );
};
