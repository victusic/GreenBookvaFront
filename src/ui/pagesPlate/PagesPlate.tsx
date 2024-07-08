import React, { ReactNode } from 'react';

import styles from './pagesPlate.module.scss';

interface PagesPlateProps {
  children: ReactNode;
}

const PagesPlate: React.FC<PagesPlateProps> = ({ children }) => {
  return <div className={styles.pagesPlate}>{children}</div>;
};

export default PagesPlate;
