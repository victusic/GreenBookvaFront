import React from 'react';

import styles from './productDescription.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshNowProductAction } from '../../../../../store/profileReducer';

const ProductDescription = ({ id, children }) => {
  const dispathProfile = useDispatch();
  useEffect(() => {
    dispathProfile(refreshNowProductAction(id));
  }, []);

  return <p className={styles.desc}>{children}</p>;
};

export default ProductDescription;
