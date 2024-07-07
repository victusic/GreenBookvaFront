import React, { HTMLAttributes } from 'react';

import styles from './modalNewCode.module.scss';

const ModalNewCode: React.FC<HTMLAttributes<HTMLSpanElement>> = ({ ...props }) => {
  return (
    <span {...props} className={styles.newCode}>
      Запросить новый код
    </span>
  );
};

export default ModalNewCode;
