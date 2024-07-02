import React, { ReactNode } from 'react';

import styles from './bigButtonTrue.module.scss';

interface BigButtonTrueProps {
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
