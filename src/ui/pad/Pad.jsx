import React from 'react';
import styles from './pad.module.scss';

const pad = ({ children }) => {
  return (
    <div className={styles.body}>
      <div className={styles.pad}>{children}</div>
    </div>
  );
};

export default pad;
