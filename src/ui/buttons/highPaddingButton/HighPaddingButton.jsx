import React from 'react';
import styles from './highPaddingButton.module.scss';

const HighPaddingButton = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.highButton}>
      {children}
    </button>
  );
};

export default HighPaddingButton;
