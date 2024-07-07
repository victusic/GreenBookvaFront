import React, { ButtonHTMLAttributes, ReactNode } from 'react';

import styles from './modalButton.module.scss';

interface ModalButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const ModalButton: React.FC<ModalButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={styles.base} type="submit">
      {children}
    </button>
  );
};

export default ModalButton;
