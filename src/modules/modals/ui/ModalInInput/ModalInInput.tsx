import React, { ReactNode } from 'react';

import styles from './modalInInput.module.scss';

interface ModalInInputProps {
  children: ReactNode;
}

const ModalInInput: React.FC<ModalInInputProps> = ({ children }) => {
  return <span className={styles.inInput}>{children}</span>;
};

export default ModalInInput;
