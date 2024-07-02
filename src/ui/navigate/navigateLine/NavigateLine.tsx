import React, { ReactNode } from 'react';

import styles from './navigateLine.module.scss';

interface NavigateLineProps {
  children: ReactNode;
}

const NavigateLine: React.FC<NavigateLineProps> = ({ children }) => {
  return <div className={styles.navigateLine}>{children}</div>;
};

export default NavigateLine;
