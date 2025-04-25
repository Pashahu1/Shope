import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { actions as productsActions } from '../store/products/productsSlice';
import { actions as cartActions } from '../store/shopingCart/shopingCartSlice';

const rootActions = {
  ...productsActions,
  ...cartActions,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};
