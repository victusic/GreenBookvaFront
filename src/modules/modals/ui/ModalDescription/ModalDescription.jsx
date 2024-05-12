import React from 'react';

import styles from './ModalDescription.module.scss';

const ModalDescription = ({ children }) => {
  return <span className={styles.description}>{children}</span>;
};

export default ModalDescription;
