import React from 'react';

import styles from './productLeftBar.module.scss';

const ProductLeftBar = ({ children }) => {
  return <div className={styles.leftBar}>{children}</div>;
};

export default ProductLeftBar;
