import React from 'react';
import styles from './ModalInput.module.scss';

const ModalInput = ({ ...props }) => {
  return <input {...props} className={styles.base} />;
};

export default ModalInput;
