import React from 'react';

import styles from './modalReturn.module.scss';

const ModalReturn = ({ children, ...props }) => {
  return (
    <span {...props} className={styles.return}>
      {children}
    </span>
  );
};

export default ModalReturn;
