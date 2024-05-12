import React from 'react';
import styles from './priceInput.module.scss';

const PriceInput = ({ ...props }) => {
  return <input {...props} className={styles.base} />;
};

export default PriceInput;
