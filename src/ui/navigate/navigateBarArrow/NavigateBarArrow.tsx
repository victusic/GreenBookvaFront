import React, { ReactNode } from 'react';

import styles from './navigateBarArrow.module.scss';
import { Link } from 'react-router-dom';

interface NavigateBarArrowProps {
  children: ReactNode;
  route: string;
  id: string;
}

const NavigateBarArrow: React.FC<NavigateBarArrowProps> = ({ children, route, id }) => {
  return (
    <Link className={styles.BarArrow} to={route + id}>
      <span className={styles.BarArrowMargin}>❮</span>
      {children}
    </Link>
  );
};

export default NavigateBarArrow;
