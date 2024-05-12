import React from 'react';

import styles from './buyButton.module.scss';

const BuyButton = ({ children, disabled, ...props }) => {
  return (
    <button {...props} className={styles.buyButton} disabled={disabled}>
      {children}
    </button>
  );
};

export default BuyButton;
