import React from 'react';

import styles from './mobileProductButton.module.scss';

const MobileProductButton = ({ children, type, ...props }) => {
  return (
    <button
      className={styles.mobileButton + ' ' + (type === 'small' ? styles.buttonSmall : styles.buttonBig)}
      {...props}
    >
      {children}
    </button>
  );
};

export default MobileProductButton;
