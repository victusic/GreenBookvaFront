import React from 'react';

import styles from './buyButtonTrue.module.scss';

const BuyButtonTrue = ({ ...props }) => {
  return (
    <button {...props} className={styles.buyButton}>
      В корзине
    </button>
  );
};

export default BuyButtonTrue;
