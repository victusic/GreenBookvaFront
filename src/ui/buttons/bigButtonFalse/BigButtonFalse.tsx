import React, { ReactNode } from 'react';

import styles from './bigButtonFalse.module.scss';

interface BigButtonFalseProps {
  children: ReactNode;
}

const BigButtonFalse: React.FC<BigButtonFalseProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.buyButton}>
      <h3>{children}</h3>
    </button>
  );
};

export default BigButtonFalse;
