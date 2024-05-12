import React from 'react';

import styles from './navigateElement.module.scss';
import { Link } from 'react-router-dom';

const NavigateElement = ({ children, route }) => {
  return (
    <Link className={styles.textElement} to={route}>
      {children}
    </Link>
  );
};

export default NavigateElement;
