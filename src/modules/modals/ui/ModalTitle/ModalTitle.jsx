import React from 'react';
import styles from './modalTitle.module.scss';

const ModalTitle = ({ children }) => {
  return <h3 className={styles.title}>{children}</h3>;
};

export default ModalTitle;
