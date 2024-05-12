import React from 'react';
import styles from './darkButton.module.scss';

const DarkButton = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default DarkButton;
