import React, { ReactNode } from 'react';

import styles from './ModalDescription.module.scss';

interface ModalDescriptionProps {
  children: ReactNode;
}

const ModalDescription: React.FC<ModalDescriptionProps> = ({ children }) => {
  return <span className={styles.description}>{children}</span>;
};

export default ModalDescription;
