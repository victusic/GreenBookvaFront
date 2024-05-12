import React from 'react';

import styles from './navigateLine.module.scss';

const NavigateLine = ({ children }) => {
  return <div className={styles.navigateLine}>{children}</div>;
};

export default NavigateLine;
