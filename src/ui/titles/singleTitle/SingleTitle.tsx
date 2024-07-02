import React, { ReactNode } from 'react';

import styles from './singleTitle.module.scss';

interface SingleTitleProps {
  children: ReactNode;
}

const SingleTitle: React.FC<SingleTitleProps> = ({ children }) => {
  return <h2 className={styles.singleTitle}>{children}</h2>;
};

export default SingleTitle;
