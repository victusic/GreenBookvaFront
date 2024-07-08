import React, { ReactNode } from 'react';

import styles from './productDescription.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshNowProductAction } from '../../../../../store/profileReducer';

interface ProductDescriptionProps {
  children: ReactNode;
  id: string;
}

const ProductDescription: React.FC<ProductDescriptionProps> = ({ id, children }) => {
  const dispatchProfile = useDispatch();
  useEffect(() => {
    dispatchProfile(refreshNowProductAction(id));
  }, []);

  return <p className={styles.desc}>{children}</p>;
};

export default ProductDescription;
