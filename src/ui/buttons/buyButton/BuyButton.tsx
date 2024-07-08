import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './buyButton.module.scss';

interface BuyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
}

const BuyButton: React.FC<BuyButtonProps> = ({ children, disabled, ...rest }) => {
  return (
    <button {...rest} className={styles.buyButton} disabled={disabled}>
      {children}
    </button>
  );
};

export default BuyButton;
