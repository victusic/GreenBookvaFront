import React from 'react';

import styles from './productDescriptionLine.module.scss';
import { Link } from 'react-router-dom';

const ProductDescriptionLine = ({ children, value, link }) => {
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
