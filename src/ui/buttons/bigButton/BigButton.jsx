import React from 'react';

import styles from './bigButton.module.scss';

const BigButton = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.buyButton}>
      <h3>{children}</h3>
    </button>
  );
};

export default BigButton;
