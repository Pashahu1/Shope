import './NewProduct.scss';
import { Link } from 'react-router-dom';

export const NewProduct = () => {
  return (
    <div className="new-product">
      <Link to="form" className="new-product__button">
        <span className="new-title">Create New Product +</span>
      </Link>
    </div>
  );
};
