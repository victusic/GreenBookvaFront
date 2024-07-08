import React, { ReactNode } from 'react';

import styles from './productDescriptionLine.module.scss';
import { Link } from 'react-router-dom';

interface ProductDescriptionLineProps {
  children: ReactNode;
  value?: string | number;
  link?: string;
}

const ProductDescriptionLine: React.FC<ProductDescriptionLineProps> = ({ children, value, link }) => {
  return (
    <>
      {value && (
        <div className={styles.productDescriptionLine}>
          <div className={styles.productDescriptionTitle}>
            <p className={styles.productDescriptionTitleText}>{children}</p>
          </div>
          <div className={styles.productDescriptionValue}>
            {link ? (
              <Link to={link} className={styles.productDescriptionValueLink}>
                {value}
              </Link>
            ) : (
              <p className={styles.productDescriptionValueText}>{value}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDescriptionLine;
