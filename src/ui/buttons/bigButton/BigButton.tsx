import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './bigButton.module.scss';

interface BigButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const BigButton: React.FC<BigButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.buyButton}>
      <h3>{children}</h3>
    </button>
  );
};

export default BigButton;
