import React, { InputHTMLAttributes } from 'react';
import styles from './priceInput.module.scss';

const PriceInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return <input {...props} className={styles.base} />;
};

export default PriceInput;
