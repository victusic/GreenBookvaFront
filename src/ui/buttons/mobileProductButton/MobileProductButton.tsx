import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './mobileProductButton.module.scss';

interface MobileProductButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  typeButton: string;
  widthButton?: number;
}

const MobileProductButton: React.FC<MobileProductButtonProps> = ({
  children,
  typeButton,
  widthButton,
  ...props
}) => {
  return (
    <button
      className={styles.mobileButton + ' ' + (typeButton === 'small' ? styles.buttonSmall : styles.buttonBig)}
      style={{ width: String(widthButton) }}
      {...props}
    >
      {children}
    </button>
  );
};

export default MobileProductButton;
