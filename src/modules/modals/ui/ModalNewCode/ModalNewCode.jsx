import React from 'react';

import styles from './modalNewCode.module.scss';

const ModalNewCode = ({ ...props }) => {
  return (
    <span {...props} className={styles.newCode}>
      Запросить новый код
    </span>
  );
};

export default ModalNewCode;
