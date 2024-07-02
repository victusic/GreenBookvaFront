import React, { ReactNode } from 'react';
import styles from './highPaddingButton.module.scss';

interface HighPaddingButtonProps {
  children: ReactNode;
}

const HighPaddingButton: React.FC<HighPaddingButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.highButton}>
      {children}
    </button>
  );
};

export default HighPaddingButton;
