import React, { HTMLAttributes, ReactNode } from 'react';

import styles from './modalReturn.module.scss';

interface ModalReturnProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
}

const ModalReturn: React.FC<ModalReturnProps> = ({ children, ...props }) => {
  return (
    <span {...props} className={styles.return}>
      {children}
    </span>
  );
};

export default ModalReturn;
