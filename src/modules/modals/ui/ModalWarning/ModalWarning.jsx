import React from 'react';
import styles from './modalWarning.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';

const ModalWarning = ({ visibleWarning, children, ...props }) => {
  const [warningClass, setWarningClasses] = useState('');

  useEffect(() => {
    {
      visibleWarning ? setWarningClasses('') : setWarningClasses(styles.WarningNone);
    }
  }, [visibleWarning]);

  return (
    <span {...props} className={styles.Warning + ' ' + warningClass}>
      {children}
    </span>
  );
};

export default ModalWarning;
