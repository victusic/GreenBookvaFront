import React, { InputHTMLAttributes } from 'react';
import styles from './ModalInput.module.scss';

const ModalInput: React.FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return <input {...props} className={styles.base} />;
};

export default ModalInput;
