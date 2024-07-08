import React, { ButtonHTMLAttributes } from 'react';

import styles from './buyButtonTrue.module.scss';

const BuyButtonTrue: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...rest }) => {
  return (
    <button {...rest} className={styles.buyButton}>
      В корзине
    </button>
  );
};

export default BuyButtonTrue;
