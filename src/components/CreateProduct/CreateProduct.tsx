import { useState } from 'react';
import './CreateProduct.scss';
import { FormProduct } from './FormProduct/FormProduct';
import { NewProduct } from './NewProduct/NewProduct';

export const CreateProduct = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <>
      {!isActive && <NewProduct setIsActive={setIsActive} />}
      {isActive && <FormProduct />}
    </>
  );
};
