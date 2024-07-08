import React, { ReactNode } from 'react';
import styles from './pad.module.scss';

interface PadProps {
  children: ReactNode;
}

const pad: React.FC<PadProps> = ({ children }) => {
  return (
    <div className={styles.body}>
      <div className={styles.pad}>{children}</div>
    </div>
  );
};

export default pad;
