import React, { ReactNode } from 'react';
import styles from './modalTitle.module.scss';

interface ModalTitleProps {
  children: ReactNode;
}

const ModalTitle: React.FC<ModalTitleProps> = ({ children }) => {
  return <h3 className={styles.title}>{children}</h3>;
};

export default ModalTitle;
