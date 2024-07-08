import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './bigButtonTrue.module.scss';

interface BigButtonTrueProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const BigButtonTrue: React.FC<BigButtonTrueProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.buyButton}>
      <h3>{children}</h3>
    </button>
  );
};

export default BigButtonTrue;
