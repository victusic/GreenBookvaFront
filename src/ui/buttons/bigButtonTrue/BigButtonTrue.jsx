import React from 'react';

import styles from './bigButtonTrue.module.scss';

const BigButtonTrue = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.buyButton}>
      <h3>{children}</h3>
    </button>
  );
};

export default BigButtonTrue;
