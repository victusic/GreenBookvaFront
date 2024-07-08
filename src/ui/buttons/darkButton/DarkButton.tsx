import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './darkButton.module.scss';

interface DarkButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const DarkButton: React.FC<DarkButtonProps> = ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export default DarkButton;
