import React, { ReactNode } from 'react';
import styles from './modalWarning.module.scss';
import { useEffect } from 'react';
import { useState } from 'react';

interface ModalWarningProps {
  visibleWarning: boolean;
  children: ReactNode;
}

const ModalWarning: React.FC<ModalWarningProps> = ({ visibleWarning, children, ...props }) => {
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
