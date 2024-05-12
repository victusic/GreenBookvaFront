import React from 'react';

import styles from './bigButtonFalse.module.scss';

const BigButtonFalse = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.buyButton}>
      <h3>{children}</h3>
    </button>
  );
};

export default BigButtonFalse;
