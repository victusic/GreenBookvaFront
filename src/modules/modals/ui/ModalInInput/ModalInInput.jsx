import React from 'react';

import styles from './modalInInput.module.scss';

const ModalInInput = ({ children }) => {
  return <span className={styles.inInput}>{children}</span>;
};

export default ModalInInput;
