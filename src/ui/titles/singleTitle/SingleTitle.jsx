import React from 'react';

import styles from './singleTitle.module.scss';

const SingleTitle = ({ children }) => {
  return <h2 className={styles.singleTitle}>{children}</h2>;
};

export default SingleTitle;
