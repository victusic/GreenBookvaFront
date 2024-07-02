import React, { ReactNode } from 'react';

import styles from './productLeftBar.module.scss';

interface ProductLeftBarProps {
  children: ReactNode;
}

const ProductLeftBar: React.FC<ProductLeftBarProps> = ({ children }) => {
  return <div className={styles.leftBar}>{children}</div>;
};

export default ProductLeftBar;
