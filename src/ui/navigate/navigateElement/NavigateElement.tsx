import React, { ReactNode } from 'react';

import styles from './navigateElement.module.scss';
import { Link } from 'react-router-dom';

interface NavigateElementProps {
  children: ReactNode;
  route?: string;
}

const NavigateElement: React.FC<NavigateElementProps> = ({ children, route }) => {
  return (
    <Link className={styles.textElement} to={route || ''}>
      {children}
    </Link>
  );
};

export default NavigateElement;
