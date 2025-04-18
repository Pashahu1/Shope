import { useSelector } from 'react-redux';
import './NewProduct.scss';
import { ProductsType } from '../../../types/Products';
import { Cart } from '../../Shered/Cart/Cart';

type NewProductProps = {
  setIsActive: (isActive: boolean) => void;
};

export const NewProduct: React.FC<NewProductProps> = ({ setIsActive }) => {
  const newProducts = useSelector((state: any) => state.addNewProduct);

  return (
    <div className="new-product">
      {newProducts.length > 0 && (
        <div className="new-product__list">
          {newProducts.map((product: ProductsType) => (
            <Cart key={product.id} product={product} />
          ))}
        </div>
      )}
      <div className="new-product__button" onClick={() => setIsActive(true)}>
        <span className="new-product__icon"></span>
      </div>
    </div>
  );
};
