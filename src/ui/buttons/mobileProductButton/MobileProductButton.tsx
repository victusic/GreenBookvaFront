import React, { ReactNode } from 'react';

import styles from './mobileProductButton.module.scss';

interface MobileProductButtonProps {
  children: ReactNode;
  type: string;
}

const MobileProductButton: React.FC<MobileProductButtonProps> = ({ children, type, ...props }) => {
  return (
    <button
      className={styles.mobileButton + ' ' + (type === 'small' ? styles.buttonSmall : styles.buttonBig)}
      {...props}
    >
      {children}
    </button>
  );
};

export default MobileProductButton;
