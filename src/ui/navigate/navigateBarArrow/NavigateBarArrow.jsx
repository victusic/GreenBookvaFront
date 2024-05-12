import React from 'react';

import styles from './navigateBarArrow.module.scss';
import { Link } from 'react-router-dom';

const NavigateBarArrow = ({ children, route, id }) => {
  return (
    <Link className={styles.BarArrow} to={route + id}>
      <span className={styles.BarArrowMargin}>❮</span>
      {children}
    </Link>
  );
};

export default NavigateBarArrow;
