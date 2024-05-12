import React from 'react';

import styles from './pagesPlate.module.scss';

const PagesPlate = ({ children }) => {
  return <div className={styles.pagesPlate}>{children}</div>;
};

export default PagesPlate;
